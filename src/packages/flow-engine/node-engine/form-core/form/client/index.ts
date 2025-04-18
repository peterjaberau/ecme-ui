import { FlowNodeEntity } from '@flow/canvas-document'

import { FlowNodeFormData } from '../flow-node-form-data'
import { FormModel } from '..'

export function isNodeFormReady(node: FlowNodeEntity) {
    return node
        .getData<FlowNodeFormData>(FlowNodeFormData)
        .getFormModel<FormModel>().initialized
}

export function getFormModel(node: FlowNodeEntity) {
    return node.getData<FlowNodeFormData>(FlowNodeFormData).formModel
}
