import React, { useMemo } from 'react'

import { usePlayground } from '@flow/canvas-core'

import {
    PlaygroundContentLayer,
    PlaygroundReactContentProps,
} from '../layers/playground-content-layer'

export { type PlaygroundReactContentProps }

export const PlaygroundReactContent: React.FC<PlaygroundReactContentProps> = (
    props,
) => {
    const playground = usePlayground()
    useMemo(() => {
        const layer = playground.getLayer(PlaygroundContentLayer)!
        layer.updateOptions(props)
    }, [props])
    return <></>
}
