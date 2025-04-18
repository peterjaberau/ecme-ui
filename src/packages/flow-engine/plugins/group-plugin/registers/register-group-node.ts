import { FlowDocument } from '@flow/canvas-document'

import { IGroupPluginRegister } from '../type'
import { GroupRegister } from '../group-node-register'

/** 注册分组节点 */
export const registerGroupNode: IGroupPluginRegister = (ctx) => {
    const document = ctx.get<FlowDocument>(FlowDocument)
    document.registerFlowNodes(GroupRegister)
}
