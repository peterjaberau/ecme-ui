import { ContainerModule } from 'inversify'
import { FlowRendererContribution } from '@flow/canvas-renderer'
import { FlowDocumentContribution } from '@flow/canvas-document'
import { PlaygroundContribution } from '@flow/canvas-core'
import { bindContributions } from '@flow/utils'

import { FlowRegisters } from './flow-registers'

export const FixedLayoutContainerModule = new ContainerModule((bind) => {
    bindContributions(bind, FlowRegisters, [
        FlowDocumentContribution,
        FlowRendererContribution,
        PlaygroundContribution,
    ])
})
