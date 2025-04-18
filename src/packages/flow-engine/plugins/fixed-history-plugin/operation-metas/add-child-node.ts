import { FlowNodeEntity, OperationType } from '@flow/canvas-document'
import { AddOrDeleteChildNodeValue } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { FixedHistoryConfig } from '../fixed-history-config'
import { baseOperationMeta } from './base'

export const addChildNodeOperationMeta: OperationMeta<
    AddOrDeleteChildNodeValue,
    PluginContext,
    FlowNodeEntity
> = {
    ...baseOperationMeta,
    type: OperationType.addChildNode,
    inverse: (op) => ({ ...op, type: OperationType.deleteChildNode }),
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
        return `Create ${value.data.type} node ${nodeName} in ${parentName} at ${position}`
    },
}
