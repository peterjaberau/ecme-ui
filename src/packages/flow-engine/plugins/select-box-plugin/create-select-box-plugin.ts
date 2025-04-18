import {
    FlowSelectorBoundsLayer,
    FlowSelectorBoundsLayerOptions,
    FlowSelectorBoxLayer,
    FlowSelectorBoxOptions,
    type SelectorBoxPopoverProps,
} from '@flow/canvas-renderer'
import { definePluginCreator } from '@flow/canvas-core'

// import { SelectorBounds } from './selector-bounds';

export { type SelectorBoxPopoverProps }
export interface SelectBoxPluginOptions
    extends FlowSelectorBoundsLayerOptions,
        FlowSelectorBoxOptions {
    enable?: boolean
}

export const createSelectBoxPlugin =
    definePluginCreator<SelectBoxPluginOptions>({
        onInit(ctx, opts): void {
            // 默认可用，所以强制判断 false
            if (opts.enable !== false) {
                ctx.playground.registerLayer<FlowSelectorBoundsLayer>(
                    FlowSelectorBoundsLayer,
                    opts,
                )
                ctx.playground.registerLayer<FlowSelectorBoxLayer>(
                    FlowSelectorBoxLayer,
                    {
                        canSelect: opts.canSelect,
                    },
                )
            }
        },
    })
