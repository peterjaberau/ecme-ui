import { injectable } from 'inversify'
import { DisposableCollection, Event, MaybePromise } from '@flow/utils'
import { type FlowNodeEntity } from '@flow/canvas-document'

import { FormFeedback, FormModelValid, IFormItem, IFormMeta } from '../types'
import { FormManager } from '../services/form-manager'
import { type FormItem } from '.'

export type FormModelFactory = (entity: FlowNodeEntity) => FormModel
export const FormModelFactory = Symbol('FormModelFactory')
export const FormModelEntity = Symbol('FormModelEntity')

@injectable()
export abstract class FormModel {
    readonly onValidate: Event<FormModel> | any

    readonly onValidChange: Event<FormModelValid> | any

    readonly onFeedbacksChange: Event<FormFeedback[]> | any

    readonly onInitialized: Event<FormModel> | any

    protected toDispose: DisposableCollection = new DisposableCollection()

    /**
     * @deprecated
     * use `formModel.node` instead in FormModelV2
     */
    abstract get flowNodeEntity(): FlowNodeEntity

    /**
     * @deprecated
     */
    abstract get formManager(): FormManager

    abstract get formMeta(): IFormMeta

    abstract get initialized(): boolean

    abstract get valid(): FormModelValid

    /**
     * @deprecated
     * use `formModel.getFieldIn` instead in FormModelV2 to get the model of a form field
     * do not use this in FormModelV2 since  it only return an empty Map.
     */
    abstract get formItemPathMap(): Map<string, IFormItem>

    /**
     * @deprecated
     */
    abstract clearValid(): void

    abstract validate(): Promise<boolean>

    abstract validateWithFeedbacks(): Promise<FormFeedback[]>

    abstract init(
        formMetaOrFormMetaGenerator: any,
        initialValue?: any,
    ): MaybePromise<void>

    abstract toJSON(): any

    /**
     * @deprecated
     * use `formModel.getField` instead in FormModelV2
     */
    abstract getFormItemByPath(path: string): FormItem | undefined

    /**
     * @deprecated
     * use `formModel.getFieldValue` instead in FormModelV2 to get the model of a form field by path
     */
    abstract getFormItemValueByPath<T = any>(path: string): any | undefined

    abstract render(): any

    abstract dispose(): void
}
