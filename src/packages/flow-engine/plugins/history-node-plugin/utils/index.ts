import { get } from 'lodash'
import { FormModelV2, isFormModelV2 } from '@flow/node-engine'
import { FlowNodeFormData } from '@flow/form-core'
import { FlowNodeEntity } from '@flow/canvas-document'
import { HistoryService, Operation } from '@flow/history'
import { StackOperation } from '@flow/history'

import { ChangeFormValuesOperationValue, NodeOperationType } from '../types'

/**
 * 获取v2版本的formModel
 * @param node 节点
 * @returns
 */
export function getFormModelV2(
    node: FlowNodeEntity | undefined,
): FormModelV2 | undefined {
    if (!node) {
        return undefined
    }

    const formModel = node
        ?.getData(FlowNodeFormData)
        ?.getFormModel<FormModelV2>()

    if (!formModel || !isFormModelV2(formModel)) {
        return undefined
    }

    return formModel
}

/**
 * 表单合并策略
 * @param op 操作
 * @param prev 上一个操作
 * @param element 操作栈元素
 * @returns
 */
export function shouldChangeFormValuesMerge(
    op: Operation<ChangeFormValuesOperationValue | undefined>,
    prev: Operation<ChangeFormValuesOperationValue | undefined>,
    element: StackOperation,
) {
    if (!prev) {
        return false
    }

    if (Date.now() - element.getTimestamp() < 500) {
        if (
            op.type === prev.type && // 相同类型
            op.value?.id === prev.value?.id && // 相同节点
            op.value?.path === prev.value?.path // 相同路径
        ) {
            return {
                type: op.type,
                value: {
                    ...op.value,
                    value: op.value?.value,
                    oldValue: prev.value?.oldValue,
                },
            }
        }
        return true
    }
    return false
}

/**
 * 监听表单值变化
 * @param formModel 表单模型
 * @param node 节点
 * @param historyService 历史服务
 */
export function attachFormValuesChange(
    formModel: FormModelV2,
    node: FlowNodeEntity,
    historyService: HistoryService,
) {
    formModel.onFormValuesChange((event) => {
        historyService.pushOperation(
            {
                type: NodeOperationType.changeFormValues,
                value: {
                    id: node.id,
                    path: event.name,
                    value: get(event.values, event.name),
                    oldValue: get(event.prevValues, event.name),
                },
            },
            { noApply: true },
        )
    })
}
