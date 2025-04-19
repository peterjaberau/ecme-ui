import { inject, injectable } from 'inversify'
import { injectPlaygroundContext, PlaygroundContext } from '@flow/canvas-core'

import { NodeEngineContext } from '../../node'
import { FormItem, FormItemMaterialContext } from '..'

@injectable()
export class FormContextMaker {
    @inject(NodeEngineContext) readonly nodeEngineContext: NodeEngineContext | any

    @injectPlaygroundContext() readonly playgroundContext: PlaygroundContext

    makeFormItemMaterialContext(
        formItem: FormItem,
        options?: { getIndex: () => number | undefined },
    ): FormItemMaterialContext {
        return {
            meta: formItem.meta,
            path: formItem.path,
            readonly: this.nodeEngineContext.readonly,
            getFormItemValueByPath:
                formItem.formModel.getFormItemValueByPath.bind(
                    formItem.formModel,
                ),
            onFormValidate: formItem.formModel.onValidate.bind(
                formItem.formModel,
            ),
            form: formItem.formModel,
            node: formItem.formModel.flowNodeEntity,
            playgroundContext: this.playgroundContext,
            index: options?.getIndex(),
        }
    }
}
