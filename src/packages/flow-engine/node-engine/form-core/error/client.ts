import { FlowNodeEntity } from '@flow/canvas-document'

import { FlowNodeErrorData } from './flow-node-error-data'

export function getNodeError(node: FlowNodeEntity) {
    return node.getData<FlowNodeErrorData>(FlowNodeErrorData).getError()
}
