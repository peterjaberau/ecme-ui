import { FlowNodeFormData } from '@flow/form-core'
import { FlowNodeEntity } from '@flow/canvas-document'

import { DataEvent } from './types'
import { FormModelV2 } from './form-model-v2'

export function getFormModel(node: FlowNodeEntity) {
    // @ts-ignore
    return node.getData<FlowNodeFormData>(FlowNodeFormData)
        ?.formModel as FormModelV2
}

export function isFormV2(node: FlowNodeEntity) {
    return !!node.getNodeRegistry().formMeta?.render
}

export function createEffectOptions<T>(
    event: DataEvent,
    effect: T,
): { effect: T; event: DataEvent } {
    return {
        event,
        effect,
    }
}
