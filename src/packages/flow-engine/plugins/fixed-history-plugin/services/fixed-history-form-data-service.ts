import { cloneDeep } from 'lodash'
import { inject, injectable } from 'inversify'
import { FlowNodeFormData, FormModel } from '@flow/form-core'
import { FlowDocument } from '@flow/canvas-document'
import { Disposable, Emitter } from '@flow/utils'

@injectable()
export class FixedHistoryFormDataService implements Disposable {
    @inject(FlowDocument) document: FlowDocument | any

    private _cache = new Map<FlowNodeFormData, Map<string, any>>()

    private _formValueChangeByHistoryEmitter = new Emitter<{
        formData: FlowNodeFormData
        value: any
        path: string
    }>()

    onFormValueChangeByHistory = this._formValueChangeByHistoryEmitter.event

    resetCache(flowNodeFormData: FlowNodeFormData, value: any) {
        Object.keys(value).forEach((key) => {
            this.setCache(flowNodeFormData, key, value[key])
        })
    }

    setCache(flowNodeFormData: FlowNodeFormData, prop: string, value: any) {
        if (!this._cache.has(flowNodeFormData)) {
            this._cache.set(flowNodeFormData, new Map())
        }

        const formData = this._cache.get(flowNodeFormData)!
        formData.set(prop, cloneDeep(value))
    }

    getCache(flowNodeFormData: FlowNodeFormData, prop: string): any {
        if (!this._cache.has(flowNodeFormData)) {
            return
        }

        const formData = this._cache.get(flowNodeFormData)!
        return formData.get(prop)
    }

    /**
     * 获取表单数据
     * @param id node id
     * @returns 表单数据
     */
    getFormDataByNodeId(id: string) {
        const node: any = this.document.getNode(id)
        if (!node) {
            return
        }
        // @ts-ignore
        const formData: any = node.getData<FlowNodeFormData>(FlowNodeFormData)
        return formData
    }

    getFormItemValue(formData: FlowNodeFormData | any, path: string) {
        const formItem = this.getFormItem(formData, path)

        if (!formItem) {
            return
        }
        return formItem.value
    }

    setFormItemValue(formData: FlowNodeFormData, path: string, value: any) {
        const formItem = this.getFormItem(formData, path)

        if (formItem) {
            formItem.value = value
            this._formValueChangeByHistoryEmitter.fire({
                formData,
                path,
                value,
            })
        }
    }

    getFormItem(formData: FlowNodeFormData, path: string) {
        if (typeof path === 'undefined') {
            return
        }
        if (path.endsWith('/')) {
            path = path.slice(0, -1)
        }

        if (!path.startsWith('/')) {
            path = '/' + path
        }

        const formItem = formData
            .getFormModel<FormModel>()
            .getFormItemByPath(path)

        return formItem
    }

    dispose() {
        this._formValueChangeByHistoryEmitter.dispose()
        this._cache.clear()
    }
}
