import { Rectangle } from '@flow/utils'

import { type WorkflowNodeEntity } from '../entities/workflow-node-entity'
export type WorkflowPortType = 'input' | 'output'

export const getPortEntityId = (
    node: WorkflowNodeEntity,
    portType: WorkflowPortType,
    portID: string | number = '',
): string => `port_${portType}_${node.id}_${portID}`

export const WORKFLOW_LINE_ENTITY = 'WorkflowLineEntity'

export function domReactToBounds(react: DOMRect): Rectangle {
    return new Rectangle(react.x, react.y, react.width, react.height)
}
