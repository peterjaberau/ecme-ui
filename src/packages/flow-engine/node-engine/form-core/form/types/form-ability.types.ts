import { FlowNodeEntity } from '@flow/canvas-document'
import { PlaygroundContext } from '@flow/canvas-core'
import { MaybePromise } from '@flow/utils'

import { type IFormItem } from './form-model.types'
import { IFormItemMeta } from './form-meta.types'

export interface FormItemAbilityMeta<Options = any> {
    type: string
    options: Options
}

/**
 * @deprecated
 */
export interface FormItemContext {
    /**
     * @deprecated Use context.node instead
     */
    formItemMeta: IFormItemMeta
    /**
     * @deprecated
     */
    formItem: IFormItem
    /**
     * @deprecated Use context.node instead
     */
    flowNodeEntity: FlowNodeEntity
    /**
     * @deprecated Use context.playgroundContext instead
     */
    playgroundContext: PlaygroundContext
}

export interface FormItemHookParams extends FormItemContext {
    formItem: IFormItem
}

export interface FormItemHooks<T> {
    /**
     * FormItem初始化钩子
     */
    onInit?: (params: FormItemHookParams & T) => void
    /**
     * FormItem提交时钩子
     */
    onSubmit?: (params: FormItemHookParams & T) => void
    /**
     * FormItem克隆时钩子
     */
    onClone?: (params: FormItemHookParams & T) => MaybePromise<void>
    /**
     * 克隆后执行的逻辑
     */
    afterClone?: (params: FormItemHookParams & T) => void
    /**
     * FormItem全局校验时钩子
     */
    onValidate?: (params: FormItemHookParams & T) => void
}
