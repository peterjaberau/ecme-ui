import { useService, PluginContext } from '@flow/editor'

import { FreeLayoutPluginContext } from '../preset'

export function useClientContext(): FreeLayoutPluginContext {
    return useService<FreeLayoutPluginContext>(PluginContext)
}
