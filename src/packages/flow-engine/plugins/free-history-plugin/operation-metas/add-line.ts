import { type PluginContext } from '@flow/canvas-core'
import { WorkflowLinesManager } from '@flow/free-layout-core'
import { type OperationMeta } from '@flow/history'

import { type AddOrDeleteLineOperationValue, FreeOperationType } from '../types'
import { FreeHistoryConfig } from '../free-history-config'
import { baseOperationMeta } from './base'

export const addLineOperationMeta: OperationMeta<
    AddOrDeleteLineOperationValue,
    PluginContext,
    void
> = {
    ...baseOperationMeta,
    type: FreeOperationType.addLine,
    inverse: (op) => ({
        ...op,
        type: FreeOperationType.deleteLine,
    }),
    apply: (operation, ctx: PluginContext) => {
        const linesManager = ctx.get<WorkflowLinesManager>(WorkflowLinesManager)
        linesManager.createLine({
            ...operation.value,
            key: operation.value.id,
        })
    },
    getLabel: (op, ctx) => 'Create Line',
    getDescription: (op, ctx) => {
        const config = ctx.get<FreeHistoryConfig>(FreeHistoryConfig)
        const { value } = op
        if (!value.from || !value.to) {
            return 'Create Line'
        }

        const fromName = config.getNodeLabelById(value.from)
        const toName = config.getNodeLabelById(value.to)
        return `Create Line from ${fromName} to ${toName}`
    },
}
