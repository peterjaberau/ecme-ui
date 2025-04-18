import { FlowNodeBaseType, type FlowNodeRegistry } from '@flow/canvas-document'

/**
 * 结束节点
 */
export const EndRegistry: FlowNodeRegistry = {
    type: FlowNodeBaseType.END,
    meta: {
        draggable: false,
        isNodeEnd: true,
        selectable: false,
        copyDisable: true,
    },
    // 结束节点没有出边和 label
    getLines() {
        return []
    },
    getLabels() {
        return []
    },
}
