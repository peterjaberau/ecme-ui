import { injectable, inject } from 'inversify'
import { type FormItem } from '@flow/form-core'
import { FlowNodeEntity } from '@flow/canvas-document'
import { Playground, PlaygroundConfigRevealOpts } from '@flow/canvas-core'

import { FocusNodeFormItemOptions, NodeClient } from './node-client'

interface FocusNodeOptions {
    zoom?: PlaygroundConfigRevealOpts['zoom']
    easing?: PlaygroundConfigRevealOpts['easing'] // 是否开启缓动，默认开启
    easingDuration?: PlaygroundConfigRevealOpts['easingDuration'] // 默认 500 ms
    scrollToCenter?: PlaygroundConfigRevealOpts['scrollToCenter'] // 是否滚动到中心
}

@injectable()
export class FlowEditorClient {
    @inject(NodeClient) readonly nodeClient: NodeClient | any

    @inject(Playground) readonly playground: Playground | any

    focusNodeFormItem(formItem: FormItem, options?: FocusNodeFormItemOptions) {
        this.nodeClient.nodeFocusService.focusNodeFormItem(formItem, options)
    }

    focusNode(node: FlowNodeEntity, options?: FocusNodeOptions) {
        this.playground.scrollToView({ entities: [node], ...options })
    }
}
