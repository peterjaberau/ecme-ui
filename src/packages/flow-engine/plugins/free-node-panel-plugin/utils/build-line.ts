import {
    WorkflowLinesManager,
    WorkflowNodeEntity,
    WorkflowNodePortsData,
    WorkflowPortEntity,
} from '@flow/free-layout-core'

export type IBuildLine = (params: {
    node: WorkflowNodeEntity
    linesManager: WorkflowLinesManager
    fromPort?: WorkflowPortEntity
    toPort?: WorkflowPortEntity
}) => void

/** 建立连线 */
export const buildLine: IBuildLine = (params) => {
    const { fromPort, node, toPort, linesManager } = params
    const portsData = node.getData(WorkflowNodePortsData)
    if (!portsData) {
        return
    }

    const shouldBuildFromLine = portsData.inputPorts?.length > 0
    if (fromPort && shouldBuildFromLine) {
        const toTargetPort = portsData.inputPorts[0]
        const isSingleInput = portsData.inputPorts.length === 1
        linesManager.createLine({
            from: fromPort.node.id,
            fromPort: fromPort.portID,
            to: node.id,
            toPort: isSingleInput ? undefined : toTargetPort.id,
        })
    }
    const shouldBuildToLine = portsData.outputPorts?.length > 0
    if (toPort && shouldBuildToLine) {
        const fromTargetPort = portsData.outputPorts[0]
        linesManager.createLine({
            from: node.id,
            fromPort: fromTargetPort.portID,
            to: toPort.node.id,
            toPort: toPort.portID,
        })
    }
}
