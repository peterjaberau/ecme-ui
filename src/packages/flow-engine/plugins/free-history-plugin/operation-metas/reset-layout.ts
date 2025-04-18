import { type PluginContext } from '@flow/canvas-core'
import { WorkflowResetLayoutService } from '@flow/free-layout-core'
import { type OperationMeta } from '@flow/history'

import { FreeOperationType, type ResetLayoutOperationValue } from '../types'
import { baseOperationMeta } from './base'

export const resetLayoutOperationMeta: OperationMeta<
    ResetLayoutOperationValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: FreeOperationType.resetLayout,
    inverse: (op) => ({
        ...op,
        value: {
            ...op.value,
            value: op.value.oldValue,
            oldValue: op.value.value,
        },
    }),
    apply: async (operation, ctx: PluginContext) => {
        const reset = ctx.get<WorkflowResetLayoutService>(
            WorkflowResetLayoutService,
        )
        await reset.layoutToPositions(
            operation.value.ids,
            operation.value.value,
        )
    },
    shouldMerge: () => false,
}
