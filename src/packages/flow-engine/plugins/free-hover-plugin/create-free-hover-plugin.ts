import { definePluginCreator } from '@flow/canvas-core'

import { HoverLayer } from './hover-layer'

export const createFreeHoverPlugin = definePluginCreator({
    onInit(ctx): void {
        ctx.playground.registerLayer(HoverLayer)
    },
})
