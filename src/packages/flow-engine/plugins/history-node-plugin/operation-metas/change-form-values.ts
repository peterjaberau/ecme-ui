import { FlowDocument } from '@flow/canvas-document'
import { type PluginContext } from '@flow/canvas-core'
import { type OperationMeta } from '@flow/history'

import { getFormModelV2, shouldChangeFormValuesMerge } from '../utils'
import { ChangeFormValuesOperationValue, NodeOperationType } from '../types'

/**
 * 表单修改操作
 */
export const changeFormValueOperationMeta: OperationMeta<
    ChangeFormValuesOperationValue,
    PluginContext,
    void
> = {
    type: NodeOperationType.changeFormValues,
    inverse: (op) => ({
        ...op,
        value: {
            ...op.value,
            value: op.value.oldValue,
            oldValue: op.value.value,
        },
    }),
    apply: ({ value: { value, path, id } }, ctx: PluginContext) => {
        const document = ctx.get<FlowDocument>(FlowDocument)
        const formModel = getFormModelV2(document.getNode(id))

        if (!formModel) {
            return
        }

        formModel.setValueIn(path, value)
    },
    shouldMerge: shouldChangeFormValuesMerge as OperationMeta['shouldMerge'],
}
