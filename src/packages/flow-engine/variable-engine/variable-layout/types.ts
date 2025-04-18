import { Scope } from '@flow/variable-core'
import { FlowNodeEntity } from '@flow/canvas-document'

export enum FlowNodeScopeTypeEnum {
    public = 'public',
    private = 'private',
}

export interface FlowNodeScopeMeta {
    node?: FlowNodeEntity
    type?: FlowNodeScopeTypeEnum
}

export interface ScopeVirtualNode {
    id: string
    flowNodeType: 'virtualNode'
}

export type ScopeChainNode = FlowNodeEntity | ScopeVirtualNode

// 节点内部的作用域
export type FlowNodeScope = Scope<FlowNodeScopeMeta>
