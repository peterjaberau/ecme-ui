import { FlowDocument } from '@flow/canvas-document'
import { FlowGroupService } from '@flow/canvas-document'

import { IGroupPluginRegister } from '../type'

/** 注册清理分组逻辑 */
export const registerCleanGroups: IGroupPluginRegister = (ctx, opts) => {
    const groupService = ctx.get<FlowGroupService>(FlowGroupService)
    const document = ctx.get<FlowDocument>(FlowDocument)

    const clearInvalidGroups = () => {
        groupService.getAllGroups().forEach((group) => {
            if (group?.nodes.length !== 0) {
                return
            }
            if (!group.groupNode.pre) {
                return
            }
            groupService.deleteGroup(group.groupNode)
        })
    }

    document.originTree.onTreeChange(() => {
        setTimeout(() => {
            clearInvalidGroups()
        }, 0)
    })
}
