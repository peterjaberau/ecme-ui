import { inject, injectable } from 'inversify'
import {
    FlowOperation,
    FlowOperationBaseServiceImpl,
} from '@flow/canvas-document'
import { HistoryService } from '@flow/history'

@injectable()
export class FixedHistoryOperationService extends FlowOperationBaseServiceImpl {
    @inject(HistoryService) historyService: HistoryService | any

    apply(operation: FlowOperation): any {
        return this.historyService.pushOperation(operation)
    }

    originApply(operation: FlowOperation): any {
        return super.apply(operation)
    }

    transact(transaction: () => void): void {
        this.historyService.transact(transaction)
    }
}
