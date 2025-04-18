import { EntityDataRegistry } from '@flow/canvas-core'

import { FlowNodeFormData } from '../form'
import { FlowNodeErrorData } from '../error'

export function createNodeEntityDatas(): EntityDataRegistry[] {
    return [FlowNodeFormData, FlowNodeErrorData]
}
