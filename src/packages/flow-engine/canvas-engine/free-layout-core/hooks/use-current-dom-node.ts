import { FlowNodeRenderData } from '@flow/canvas-document'
import { useEntityFromContext } from '@flow/canvas-core'

import { type WorkflowNodeEntity } from '../entities'

/**
 * 获取当前渲染的 dom 节点
 */
export function useCurrentDomNode(): HTMLDivElement {
    const entity = useEntityFromContext<WorkflowNodeEntity>()
    const renderData = entity.getData(FlowNodeRenderData)!
    return renderData.node
}
