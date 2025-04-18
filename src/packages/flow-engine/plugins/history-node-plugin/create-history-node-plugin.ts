import { FlowDocument } from '@flow/canvas-document'
import { bindContributions, definePluginCreator } from '@flow/canvas-core'
import {
    HistoryContainerModule,
    HistoryService,
    OperationContribution,
} from '@flow/history'

import { attachFormValuesChange, getFormModelV2 } from './utils'
import { HistoryNodeRegisters } from './history-node-registers'

/**
 * 表单历史插件
 */
export const createHistoryNodePlugin = definePluginCreator({
    onBind: ({ bind }) => {
        bindContributions(bind, HistoryNodeRegisters, [OperationContribution])
    },
    onInit: (ctx, _opts) => {
        const document = ctx.get<FlowDocument>(FlowDocument)
        const historyService = ctx.get<HistoryService>(HistoryService)

        document.onNodeCreate(({ node }) => {
            const formModel = getFormModelV2(node)

            if (!formModel) {
                return
            }

            attachFormValuesChange(formModel, node, historyService)
        })
    },
    containerModules: [HistoryContainerModule],
})
