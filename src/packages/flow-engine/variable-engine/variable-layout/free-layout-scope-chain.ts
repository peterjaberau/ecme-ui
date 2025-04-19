import { inject, optional, postConstruct } from 'inversify'
import { Scope, ScopeChain } from '@flow/variable-core'
import {
    FlowNodeEntity,
    FlowDocument,
    FlowVirtualTree,
} from '@flow/canvas-document'
import { EntityManager } from '@flow/canvas-core'
import { WorkflowNodeLinesData, WorkflowNodeMeta } from '@flow/free-layout-core'

import { VariableLayoutConfig } from './variable-layout-config'
import { FlowNodeScope, FlowNodeScopeTypeEnum } from './types'
import { FlowNodeVariableData } from './flow-node-variable-data'

/**
 * 自由布局作用域链实现
 */
export class FreeLayoutScopeChain extends ScopeChain {
    @inject(EntityManager) entityManager: EntityManager | any

    @inject(FlowDocument)
    protected flowDocument: FlowDocument | any

    @optional()
    @inject(VariableLayoutConfig)
    protected configs?: VariableLayoutConfig

    get tree(): FlowVirtualTree<FlowNodeEntity> {
        return this.flowDocument.originTree
    }

    @postConstruct()
    onInit() {
        this.toDispose.pushAll([
            // 线条发生变化时，会触发作用域链的更新
            this.entityManager.onEntityDataChange(({ entityDataType }: any) => {
                if (entityDataType === WorkflowNodeLinesData.type) {
                    this.refreshAllChange()
                }
            }),
            // 树变化时候刷新作用域
            this.tree.onTreeChange(() => {
                this.refreshAllChange()
            }),
        ])
    }

    // 获取同一层级所有输入节点
    protected getAllInputLayerNodes(curr: FlowNodeEntity): FlowNodeEntity[] {
        return (
            curr.getData(WorkflowNodeLinesData)?.allInputNodes || []
        ).filter((_node) => _node.parent === curr.parent)
    }

    // 获取同一层级所有输出节点
    protected getAllOutputLayerNodes(curr: FlowNodeEntity): FlowNodeEntity[] {
        return (
            curr.getData(WorkflowNodeLinesData)?.allOutputNodes || []
        ).filter((_node) => _node.parent === curr.parent)
    }

    getDeps(scope: FlowNodeScope): FlowNodeScope[] {
        const { node } = scope.meta || {}
        if (!node) {
            return this.transformDeps([], { scope })
        }

        const scopes: FlowNodeScope[] = []

        // 1. 找到依赖的节点
        let curr: FlowNodeEntity | undefined = node

        while (curr) {
            const allInputNodes: FlowNodeEntity[] =
                this.getAllInputLayerNodes(curr)

            // 2. 获取所有依赖节点的 public 作用域
            scopes.push(
                ...allInputNodes
                    .map((_node) => _node.getData(FlowNodeVariableData).public)
                    .filter(Boolean),
            )

            // 父节点的 private 也可以访问
            const currVarData: FlowNodeVariableData =
                curr.getData(FlowNodeVariableData)
            if (currVarData?.private && scope !== currVarData.private) {
                scopes.push(currVarData.private)
            }

            curr = this.getParent(curr)
        }

        const uniqScopes = Array.from(new Set(scopes))
        return this.transformDeps(uniqScopes, { scope })
    }

    getCovers(scope: FlowNodeScope): FlowNodeScope[] {
        const { node } = scope.meta || {}
        if (!node) {
            return this.transformCovers([], { scope })
        }

        const isPrivate = scope.meta.type === FlowNodeScopeTypeEnum.private

        // 1. BFS 找到所有覆盖的节点
        const queue: FlowNodeEntity[] = []

        if (isPrivate) {
            // private 只能覆盖其子节点
            queue.push(...this.getChildren(node))
        } else {
            // 否则覆盖其所有输出线的节点
            queue.push(...(this.getAllOutputLayerNodes(node) || []))
        }

        // 2. 获取所有覆盖节点的 public、private 作用域
        const scopes: FlowNodeScope[] = []

        while (queue.length) {
            const _node = queue.shift()!
            const variableData: FlowNodeVariableData =
                _node.getData(FlowNodeVariableData)
            scopes.push(...variableData.allScopes)
            const children = _node && this.getChildren(_node)

            if (children?.length) {
                queue.push(...children)
            }
        }

        // 3. 如果当前 scope 是 private，则当前节点的 public 也可覆盖
        const currentVariableData: FlowNodeVariableData =
            node.getData(FlowNodeVariableData)
        if (isPrivate && currentVariableData.public) {
            scopes.push(currentVariableData.public)
        }

        const uniqScopes = Array.from(new Set(scopes))

        return this.transformCovers(uniqScopes, { scope })
    }

    protected transformCovers(
        covers: Scope[],
        { scope }: { scope: Scope },
    ): Scope[] {
        return this.configs?.transformCovers
            ? this.configs.transformCovers(covers, {
                  scope,
                  document: this.flowDocument,
                  variableEngine: this.variableEngine,
              })
            : covers
    }

    protected transformDeps(
        deps: Scope[],
        { scope }: { scope: Scope },
    ): Scope[] {
        return this.configs?.transformDeps
            ? this.configs.transformDeps(deps, {
                  scope,
                  document: this.flowDocument,
                  variableEngine: this.variableEngine,
              })
            : deps
    }

    getChildren(node: FlowNodeEntity): FlowNodeEntity[] {
        if (this.configs?.getFreeChildren) {
            return this.configs.getFreeChildren?.(node)
        }
        const nodeMeta = node.getNodeMeta<WorkflowNodeMeta>()
        const subCanvas = nodeMeta.subCanvas?.(node)

        if (subCanvas) {
            // 子画布本身不存在 children
            if (subCanvas.isCanvas) {
                return []
            } else {
                return subCanvas.canvasNode.collapsedChildren
            }
        }

        // 部分场景通过连线来表达父子关系，因此需要上层配置
        return this.tree.getChildren(node)
    }

    getParent(node: FlowNodeEntity): FlowNodeEntity | undefined {
        // 部分场景通过连线来表达父子关系，因此需要上层配置
        if (this.configs?.getFreeParent) {
            return this.configs.getFreeParent(node)
        }
        const initParent = node.document.originTree.getParent(node)

        if (!initParent) {
            return initParent
        }

        //@ts-ignore
        const nodeMeta = initParent.getNodeMeta<WorkflowNodeMeta>()
        const subCanvas = nodeMeta.subCanvas?.(initParent)
        if (subCanvas?.isCanvas) {
            return subCanvas.parentNode
        }

        return initParent
    }

    sortAll(): Scope[] {
        // 暂未实现
        console.warn('FreeLayoutScopeChain.sortAll is not implemented')
        return []
    }
}
