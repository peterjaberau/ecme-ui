import { definePluginCreator } from '@flow/canvas-core'

import { NodeFocusService } from './node-focus-service'
import { NodeClient } from './node-client'
import { createNodeHighlightPlugin } from './highlight/create-node-highlight-plugin'

export const createNodeClientPlugin = definePluginCreator<{}>({
    onBind({ bind }) {
        bind(NodeFocusService).toSelf().inSingletonScope()
        bind(NodeClient).toSelf().inSingletonScope()
    },
})

export const createNodeClientPlugins = () => [
    createNodeHighlightPlugin({}),
    createNodeClientPlugin({}),
]
