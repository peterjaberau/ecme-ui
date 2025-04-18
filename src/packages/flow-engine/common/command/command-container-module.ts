import { ContainerModule } from 'inversify'
import { bindContributionProvider } from '@flow/utils'

import { CommandService } from './command-service'
import {
    CommandRegistry,
    CommandRegistryFactory,
    CommandContribution,
} from './command'

export const CommandContainerModule = new ContainerModule((bind) => {
    bindContributionProvider(bind, CommandContribution)
    bind(CommandRegistry).toSelf().inSingletonScope()
    bind(CommandService).toService(CommandRegistry)
    bind(CommandRegistryFactory).toFactory(
        (ctx) => () => ctx.container.get(CommandRegistry),
    )
})
