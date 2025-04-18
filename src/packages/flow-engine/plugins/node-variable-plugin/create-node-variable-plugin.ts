// import { FormManager } from '@flow/form-core';
import { NodeManager } from '@flow/form-core'
import { definePluginCreator } from '@flow/canvas-core'

import { withNodeVariables } from './with-node-variables'

// import { withNodeVariables } from './with-node-variables';

export const createNodeVariablePlugin = definePluginCreator({
    onInit(ctx) {
        const nodeManager = ctx.get<NodeManager>(NodeManager)
        nodeManager.registerNodeRenderHoc(withNodeVariables)
    },
})
