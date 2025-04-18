import { FlowNodeBaseType, type FlowNodeRegistry } from '@flow/canvas-document'

/**
 * 开始节点
 */
export const StartRegistry: FlowNodeRegistry = {
    type: FlowNodeBaseType.START,
    meta: {
        isStart: true,
        draggable: false,
        selectable: false, // 触发器等开始节点不能被框选
        deleteDisable: true, // 禁止删除
        copyDisable: true, // 禁止copy
        addDisable: true, // 禁止添加
    },
}
