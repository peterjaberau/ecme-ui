import { definePluginCreator } from '@flow/canvas-core'

import { AutoLayoutService } from './services'

export const createFreeAutoLayoutPlugin = definePluginCreator({
    onBind: ({ bind }) => {
        bind(AutoLayoutService).toSelf().inSingletonScope()
    },
})
