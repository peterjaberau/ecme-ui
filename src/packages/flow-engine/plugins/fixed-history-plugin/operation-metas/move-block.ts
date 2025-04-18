import { MoveBlockOperationValue, OperationType } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { FixedHistoryConfig } from '../fixed-history-config'
import { baseOperationMeta } from './base'

export const moveBlockOperationMeta: OperationMeta<
    MoveBlockOperationValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: OperationType.moveBlock,
    inverse: (op) => ({
        ...op,
        value: {
            ...op.value,
            fromIndex: op.value.toIndex,
            toIndex: op.value.fromIndex,
            fromParentId: op.value.toParentId,
            toParentId: op.value.fromParentId,
        },
    }),
    getLabel: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        return `Move ${config.getNodeLabelById(value.nodeId)}`
    },
    getDescription: (op, ctx) => {
        const config = ctx.get<FixedHistoryConfig>(FixedHistoryConfig)
        const value = op.value
        const position =
            typeof value.toIndex !== 'undefined'
                ? `position ${value.toIndex}`
                : 'the end'
        return `Move branch ${config.getNodeLabelById(value.nodeId)} to ${position}`
    },
}
