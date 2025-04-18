import { injectable } from 'inversify'
import {
    type OperationContribution,
    type OperationRegistry,
} from '@flow/history'

import { operationMetas } from './operation-metas'

/**
 * 表单历史操作
 */
@injectable()
export class HistoryNodeRegisters implements OperationContribution {
    registerOperationMeta(operationRegistry: OperationRegistry): void {
        operationMetas.forEach((operationMeta) => {
            operationRegistry.registerOperationMeta(operationMeta)
        })
    }
}
