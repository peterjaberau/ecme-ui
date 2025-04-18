import { FlowOperationBaseService, OperationType } from '@flow/canvas-document'
import { AddOrDeleteNodeValue } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { FixedHistoryConfig } from '../fixed-history-config'
import { baseOperationMeta } from './base'

export const deleteNodeOperationMeta: OperationMeta<
    AddOrDeleteNodeValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: OperationType.deleteNode,
    inverse: (op) => ({ ...op, type: OperationType.addNode }),
    apply: ({ value: { data } }, ctx) =>
        ctx
            .get<FlowOperationBaseService>(FlowOperationBaseService)
            .deleteNode(data.id),
    getLabel: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        return `Create ${config.getNodeLabel(value.data)}`
    },
    getDescription: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        const nodeName = config.getNodeLabel(value.data)
        const parentName = config.getParentName(value.parentId)
        const position =
            typeof value.index !== 'undefined'
                ? `position ${value.index}`
                : 'the end'
        return `Delete ${value.data.type} node ${nodeName} in ${parentName} at ${position}`
    },
}
