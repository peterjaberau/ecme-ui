import { createOrUngroupValue, OperationType } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { baseOperationMeta } from './base'

export const ungroupOperationMeta: OperationMeta<
    createOrUngroupValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: OperationType.ungroup,
    inverse: (op) => ({ ...op, type: OperationType.createGroup }),
    getLabel: (op, ctx) => {
        const value = op.value
        return `Ungroup ${value.groupId}`
    },
    getDescription: (op, ctx) => {
        const value = op.value
        return `Ungroup with nodes ${value.nodeIds.join(', ')}`
    },
}
