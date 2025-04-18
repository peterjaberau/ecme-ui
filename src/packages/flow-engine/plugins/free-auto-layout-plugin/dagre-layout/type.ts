import type { WorkflowNodeEntity } from '@flow/free-layout-core'

export interface LayoutNode {
    id: string
    node: WorkflowNodeEntity
    /** 层级 */
    rank: number
    /** 同层级索引 */
    order: number
    /** 位置 */
    position: {
        x: number
        y: number
    }
    /** 宽高 */
    size: {
        width: number
        height: number
    }
    low?: number
    lim?: number
    parent?: string
}

export interface LayoutEdge {
    id: string
    from: string
    to: string

    cutvalue?: number
    minlen?: number
    weight?: number
}

export interface ILayoutGraph {
    nodes: LayoutNode[]
    edges: LayoutEdge[]
}
