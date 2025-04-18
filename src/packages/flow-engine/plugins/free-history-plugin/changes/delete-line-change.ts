import { type WorkflowLineEntity } from '@flow/free-layout-core'
import { WorkflowContentChangeType } from '@flow/free-layout-core'

import {
    type AddOrDeleteLineOperationValue,
    type ContentChangeTypeToOperation,
    type DeleteLineOperation,
    FreeOperationType,
} from '../types'
import { FreeHistoryConfig } from '../free-history-config'

export const deleteLineChange: ContentChangeTypeToOperation<DeleteLineOperation> =
    {
        type: WorkflowContentChangeType.DELETE_LINE,
        toOperation: (event, ctx) => {
            const config = ctx.get<FreeHistoryConfig>(FreeHistoryConfig)
            const line = event.entity as WorkflowLineEntity
            const value: AddOrDeleteLineOperationValue = {
                from: line.info.from,
                to: line.info.to || '',
                fromPort: line.info.fromPort || '',
                toPort: line.info.toPort || '',
                id: line.id,
            }
            return {
                type: FreeOperationType.deleteLine,
                value,
                uri: config.getNodeURI(line.id),
            }
        },
    }
