import { injectable, inject } from 'inversify'
import { type FormItem } from '@flow/form-core'
import { Playground, PlaygroundConfigRevealOpts } from '@flow/canvas-core'

import { highlightFormItem, HighLightOptions } from './highlight'

export type FocusNodeCanvasOptions = PlaygroundConfigRevealOpts

export interface FocusNodeFormItemOptions {
    canvas?: FocusNodeCanvasOptions
    highlight?: boolean | HighLightOptions
}

@injectable()
export class NodeFocusService {
    @inject(Playground) readonly playground: Playground | any

    protected previousOverlay: HTMLDivElement | undefined

    protected currentPromise: Promise<void> | undefined

    highlightNodeFormItem(formItem: FormItem, options?: HighLightOptions) {
        this.previousOverlay = highlightFormItem(formItem, options)
    }

    focusNodeFormItem(
        formItem: FormItem,
        options?: FocusNodeFormItemOptions,
    ): Promise<void> {
        const node = formItem.formModel.flowNodeEntity
        const { canvas = {}, highlight } = options || {}
        if (this.previousOverlay) {
            this.previousOverlay.remove()
            this.previousOverlay = undefined
        }
        const currentPromise: any = this.playground
            .scrollToView({ entities: [node], scrollToCenter: true, ...canvas })
            .then(() => {
                if (
                    !formItem ||
                    !highlight ||
                    this.currentPromise !== currentPromise
                ) {
                    return
                }
                this.highlightNodeFormItem(
                    formItem,
                    typeof highlight === 'boolean' ? {} : highlight,
                )
            })
        this.currentPromise = currentPromise
        //@ts-ignore
        return this.currentPromise
    }
}
