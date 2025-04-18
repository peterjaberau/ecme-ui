import { useService, PluginContext } from '@flow/editor'

import { FixedLayoutPluginContext } from '../preset'

export function useClientContext(): FixedLayoutPluginContext {
    return useService<FixedLayoutPluginContext>(PluginContext)
}
