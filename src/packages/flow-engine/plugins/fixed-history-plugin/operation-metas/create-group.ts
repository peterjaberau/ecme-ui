import { createOrUngroupValue, OperationType } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { baseOperationMeta } from './base'

export const createGroupOperationMeta: OperationMeta<
    createOrUngroupValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: OperationType.createGroup,
    inverse: (op) => ({ ...op, type: OperationType.ungroup }),
    getLabel: (op, ctx) => {
        const value = op.value
        return `Create group ${value.groupId} from ${value.targetId}`
    },
    getDescription: (op, ctx) => {
        const value = op.value
        return `Create group with nodes ${value.nodeIds.join(', ')}`
    },
}
