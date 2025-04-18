import { AddOrDeleteBlockValue, OperationType } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { FixedHistoryConfig } from '../fixed-history-config'
import { baseOperationMeta } from './base'

export const deleteBlockOperationMeta: OperationMeta<
    AddOrDeleteBlockValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: OperationType.deleteBlock,
    inverse: (op) => ({ ...op, type: OperationType.addBlock }),
    getLabel: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        return `Delete ${config.getBlockLabel(value.blockData)}`
    },
    getDescription: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        const branchName = config.getBlockLabel(value.blockData)
        const targetName = config.getNodeLabelById(value.targetId)
        const position =
            typeof value.index !== 'undefined'
                ? `position ${value.index}`
                : 'the end'
        return `Delete branch ${branchName} in ${targetName} at ${position}`
    },
}
