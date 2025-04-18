import { IPoint, Rectangle } from '@flow/utils'
import { WorkflowPortEntity } from '@flow/free-layout-core'
import { FlowNodeTransformData } from '@flow/canvas-document'

import { isContainer } from './is-container'

export type IGetPortBox = (
    port: WorkflowPortEntity,
    offset?: IPoint,
) => Rectangle

/** 获取端口矩形 */
export const getPortBox: IGetPortBox = (
    port: WorkflowPortEntity,
    offset: IPoint = { x: 0, y: 0 },
): Rectangle => {
    const node = port.node
    if (isContainer(node)) {
        // 子画布内部端口需要虚拟节点
        const { point } = port
        if (port.portType === 'input') {
            return new Rectangle(
                point.x + offset.x,
                point.y - 50 + offset.y,
                300,
                100,
            )
        }
        return new Rectangle(point.x - 300, point.y - 50, 300, 100)
    }
    const box = node.getData(FlowNodeTransformData).bounds
    return box
}
