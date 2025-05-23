/* eslint-disable @typescript-eslint/naming-convention */
import { cloneDeep, get, isEqual, set } from 'lodash'
import { injectable, inject } from 'inversify'
import { FlowNodeFormData, type DetailChangeEvent } from '@flow/form-core'
import { type FlowNodeEntity } from '@flow/canvas-document'
import { WorkflowDocument } from '@flow/free-layout-core'
import { HistoryService } from '@flow/history'

import { FreeOperationType, type IHandler } from '../types'
import { HistoryEntityManager } from '../history-entity-manager'
import { FreeHistoryConfig } from '../free-history-config'

export interface ChangeNodeDataEvent extends DetailChangeEvent {
    node: FlowNodeEntity
}

@injectable()
export class ChangeNodeDataHandler implements IHandler<ChangeNodeDataEvent> {
    @inject(HistoryService)
    private _historyService: HistoryService | any

    @inject(WorkflowDocument) document: WorkflowDocument | any

    @inject(HistoryEntityManager)
    private _entityManager: HistoryEntityManager | any

    @inject(FreeHistoryConfig)
    private _config: FreeHistoryConfig | any

    handle(event: ChangeNodeDataEvent) {
        const { path, value, initialized, node } = event
        const formData = node.getData<FlowNodeFormData>(FlowNodeFormData)
        const oldValue = this._entityManager.getValue(formData) as object
        const propPath = path.split('/').filter(Boolean).join('.')

        const propOldValue = propPath ? get(oldValue, propPath) : oldValue
        if (isEqual(value, propOldValue)) {
            return
        }

        if (initialized) {
            let operationPath = path
            let operationValue = cloneDeep(value)
            let operationOldValue = propOldValue
            // 只存储一层的数据，因为formModel无法获取数组下的某项的值
            if (path !== '/') {
                const clonedOldValue = cloneDeep(oldValue)
                set(clonedOldValue, propPath, value)
                operationPath = path.split('/').filter(Boolean)[0]
                operationValue = get(clonedOldValue, operationPath)
                operationOldValue = get(oldValue, operationPath)
            }

            this._historyService.pushOperation(
                {
                    type: FreeOperationType.changeNodeData,
                    value: {
                        id: node.id,
                        path: operationPath,
                        value: operationValue,
                        oldValue: operationOldValue,
                    },
                    uri: this._config.getNodeURI(node.id),
                },
                { noApply: true },
            )
        }

        if (propPath) {
            set(oldValue, propPath, cloneDeep(value))
        } else {
            this._entityManager.setValue(formData, cloneDeep(value))
        }
    }
}
