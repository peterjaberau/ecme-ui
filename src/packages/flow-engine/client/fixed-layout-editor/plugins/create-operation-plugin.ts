import { definePluginCreator } from '@flow/canvas-core'

import { FlowOperationService } from '../types'
import { HistoryOperationServiceImpl } from '../services/history-operation-service'
import { FlowOperationServiceImpl } from '../services/flow-operation-service'
import { FixedLayoutProps } from '../preset'

export const createOperationPlugin = definePluginCreator<FixedLayoutProps>({
    onBind: ({ bind }, opts) => {
        bind(FlowOperationService)
            .to(
                opts?.history?.enable
                    ? HistoryOperationServiceImpl
                    : FlowOperationServiceImpl,
            )
            .inSingletonScope()
    },
    onDispose: (ctx) => {
        const flowOperationService =
            ctx.container.get<FlowOperationService>(FlowOperationService)
        flowOperationService.dispose()
    },
})
