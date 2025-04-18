import { ContainerModule } from 'inversify'
import { bindContributions } from '@flow/utils'

import { FormContextMaker } from './services/form-context-maker'
import { NodeContribution } from '../node'
import { FormManager, FormPathService } from './services'
import { FormNodeContribution } from './form-node-contribution'

export const FormCoreContainerModule = new ContainerModule((bind) => {
    bind(FormManager).toSelf().inSingletonScope()
    bind(FormPathService).toSelf().inSingletonScope()
    bind(FormContextMaker).toSelf().inSingletonScope()
    bindContributions(bind, FormNodeContribution, [NodeContribution])
})
