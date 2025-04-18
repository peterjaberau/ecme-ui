import { type NodeFormProps } from '@flow/node-engine'
import { FlowNodeEntity } from '@flow/canvas-document'

import { type WorkflowPortEntity } from '../entities'

export interface NodeRenderReturnType {
    /**
     * 当前节点
     */
    node: FlowNodeEntity
    /**
     * 节点选中
     */
    selected: boolean
    /**
     * 节点激活
     */
    activated: boolean
    /**
     * 节点展开
     */
    expanded: boolean
    /**
     * 触发拖拽
     * @param e
     */
    startDrag: (e: React.MouseEvent) => void
    /**
     * 当前节点的点位信息
     */
    ports: WorkflowPortEntity[]
    /**
     * 删除节点
     */
    deleteNode: () => void
    /**
     * 选中节点
     * @param e
     */
    selectNode: (e: React.MouseEvent) => void
    /**
     * 全局 readonly 状态
     */
    readonly: boolean
    /**
     * 拖拽线条的目标 node id
     */
    linkingNodeId: string
    /**
     * 节点 ref
     */
    nodeRef: React.MutableRefObject<HTMLDivElement | null>
    /**
     * 节点 focus 事件
     */
    onFocus: () => void
    /**
     * 节点 blur 事件
     */
    onBlur: () => void
    /**
     * 渲染表单，只有节点引擎开启才能使用
     */
    form: NodeFormProps<any> | undefined
    /**
     * 获取节点的扩展数据
     */
    getExtInfo<T = any>(): T
    /**
     * 更新节点的扩展数据
     * @param extInfo
     */
    updateExtInfo<T = any>(extInfo: T): void
    /**
     * 展开/收起节点
     * @param expanded
     */
    toggleExpand(): void
}
