import {
    WorkflowDragService,
    WorkflowLinesManager,
    WorkflowNodeEntity,
    WorkflowPortEntity,
} from '@flow/free-layout-core'
import { HistoryService } from '@flow/free-history-plugin'

import { updateSubSequentNodesPosition } from './update-sub-nodes-position'
import { subPositionOffset, XYSchema } from './sub-position-offset'
import { getSubsequentNodes } from './get-sub-nodes'

export type ISubNodesAutoOffset = (params: {
    node: WorkflowNodeEntity
    fromPort: WorkflowPortEntity
    toPort: WorkflowPortEntity
    padding?: XYSchema
    linesManager: WorkflowLinesManager
    historyService: HistoryService
    dragService: WorkflowDragService
    containerNode?: WorkflowNodeEntity
}) => void

export const subNodesAutoOffset: ISubNodesAutoOffset = (params) => {
    const {
        node,
        fromPort,
        toPort,
        linesManager,
        historyService,
        dragService,
        containerNode,
        padding = {
            x: 100,
            y: 100,
        },
    } = params
    const subOffset = subPositionOffset({
        node,
        fromPort,
        toPort,
        padding,
    })
    const subsequentNodes = getSubsequentNodes({
        node: toPort.node,
        linesManager,
    })
    updateSubSequentNodesPosition({
        node,
        subsequentNodes,
        fromPort,
        toPort,
        containerNode,
        offset: subOffset,
        historyService,
        dragService,
    })
}
