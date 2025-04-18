import {
    AddOrDeleteFromNodeOperationValue,
    OperationType,
} from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { FixedHistoryConfig } from '../fixed-history-config'
import { baseOperationMeta } from './base'

export const deleteFromNodeOperationMeta: OperationMeta<
    AddOrDeleteFromNodeOperationValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: OperationType.deleteFromNode,
    inverse: (op) => ({ ...op, type: OperationType.addFromNode }),
    getLabel: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        return `Delete ${config.getNodeLabel(value.data)}`
    },
    getDescription: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        const nodeName = config.getNodeLabel(value.data)
        const parentName = config.getNodeLabelById(value.fromId)
        return `Delete ${value.data.type} node ${nodeName} after ${parentName}`
    },
}
