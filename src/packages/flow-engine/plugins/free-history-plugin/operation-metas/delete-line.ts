import { type OperationMeta } from '@flow/history'
import { WorkflowDocument } from '@flow/free-layout-core'
import { type PluginContext } from '@flow/canvas-core'

import { type AddOrDeleteLineOperationValue, FreeOperationType } from '../types'
import { FreeHistoryConfig } from '../free-history-config'
import { baseOperationMeta } from './base'

export const deleteLineOperationMeta: OperationMeta<
    AddOrDeleteLineOperationValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: FreeOperationType.deleteLine,
    inverse: (op) => ({
        ...op,
        type: FreeOperationType.addLine,
    }),
    apply: (operation, ctx: PluginContext) => {
        const document = ctx.get<WorkflowDocument>(WorkflowDocument)
        document.removeNode(operation.value.id)
    },
    getLabel: (op, ctx) => 'Delete Line',
    getDescription: (op, ctx) => {
        const config = ctx.get<FreeHistoryConfig>(FreeHistoryConfig)
        const { value } = op
        if (!value.from || !value.to) {
            return 'Delete Line'
        }

        const fromName = config.getNodeLabelById(value.from)
        const toName = config.getNodeLabelById(value.to)
        return `Delete Line from ${fromName} to ${toName}`
    },
}
