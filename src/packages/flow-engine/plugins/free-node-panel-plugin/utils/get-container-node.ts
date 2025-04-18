import { WorkflowNodeEntity, WorkflowPortEntity } from '@flow/free-layout-core'

import { isContainer } from './is-container'

export type IGetContainerNode = (params: {
    containerNode?: WorkflowNodeEntity
    fromPort?: WorkflowPortEntity
    toPort?: WorkflowPortEntity
}) => WorkflowNodeEntity | undefined

export const getContainerNode: IGetContainerNode = (params) => {
    const { fromPort, containerNode } = params
    if (containerNode) {
        return containerNode
    }
    const fromNode = fromPort?.node
    const fromContainer = fromNode?.parent
    if (isContainer(fromNode)) {
        // 子画布内部输入连线
        return fromNode
    }
    return fromContainer
}
