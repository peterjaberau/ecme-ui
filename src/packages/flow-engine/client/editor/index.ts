import 'reflect-metadata'
import { FormModelV2 } from '@flow/node-engine'

/* 核心 模块导出 */
export * from '@flow/utils'
export * from '@flow/canvas-core'
export * from '@flow/canvas-document'
export * from '@flow/canvas-renderer'
export * from '@flow/variable-plugin'
export * from '@flow/shortcuts-plugin'
export * from '@flow/node-core-plugin'
export * from '@flow/i18n-plugin'
export {
    type interfaces,
    injectable,
    postConstruct,
    named,
    Container,
    ContainerModule,
    AsyncContainerModule,
    inject,
    multiInject,
} from 'inversify'

export {
    FlowNodeFormData,
    NodeRender,
    type NodeRenderProps,
} from '@flow/form-core'

export type {
    FormState,
    FieldState,
    FieldArrayRenderProps,
    FieldRenderProps,
    FormRenderProps,
    Validate,
    FormControl,
    FieldName,
    FieldError,
    FieldWarning,
    IField,
    IFieldArray,
    IForm,
    Errors,
    Warnings,
} from '@flow/form'

export {
    Form,
    Field,
    FieldArray,
    useForm,
    useField,
    useCurrentField,
    useCurrentFieldState,
    useFieldValidate,
    useWatch,
    ValidateTrigger,
} from '@flow/form'
export * from '@flow/node-engine'
export { FormModelV2 as FormModel }

/**
 * 固定布局模块导出
 */
export * from './preset'
export * from './components'
export * from './hooks'
export * from './clients'

/**
 * Plugin 导出
 */

export * from '@flow/node-variable-plugin'

export { createPlaygroundReactPreset } from '@flow/playground-react'
