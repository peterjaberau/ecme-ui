import { injectable } from 'inversify'
import { OperationContribution, OperationRegistry } from '@flow/history'

import { operationMetas } from './operation-metas'

@injectable()
export class FixedHistoryRegisters implements OperationContribution {
    registerOperationMeta(operationRegistry: OperationRegistry): void {
        operationMetas.forEach((operationMeta) => {
            operationRegistry.registerOperationMeta(operationMeta)
        })
    }
}
