import { FlowOperation, FlowOperationBaseService } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'
import { OperationMeta } from '@flow/history'

import { FixedHistoryOperationService } from '../services'

export const baseOperationMeta: Pick<OperationMeta, 'apply'> = {
    apply: (operation, ctx: PluginContext) => {
        const fixedHistoryOperationService = ctx.get(
            FlowOperationBaseService,
        ) as FixedHistoryOperationService

        return fixedHistoryOperationService.originApply(
            operation as FlowOperation,
        )
    },
}
