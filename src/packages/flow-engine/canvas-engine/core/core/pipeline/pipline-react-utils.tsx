import ReactDOM from 'react-dom'
import React, { useEffect, useState, useCallback } from 'react'

import { NOOP } from '@flow/utils'

import type { Layer } from '../layer'
import { type PipelineRenderer } from './pipeline-renderer'

interface LayerReactAutorun {
    autorun: () => void // autorun function
    portal: () => Element
}

function OriginComp({
    originRenderer,
    renderedCb,
}: {
    originRenderer: () => Element | void
    renderedCb: () => void
}): Element | null | any {
    useEffect(() => {
        renderedCb()
    }, [])
    return originRenderer() || null
}

export function createLayerReactAutorun(
    layer: Layer,
    originRenderer: () => Element | void,
    renderedCb: (layer: Layer) => void,
    pipelineRenderer: PipelineRenderer,
): LayerReactAutorun {
    let update = NOOP
    function PlaygroundReactLayerPortal(): Element {
        const [, refresh] = useState({})
        const handleRendered = useCallback(() => {
            renderedCb(layer)
        }, [layer])
        useEffect(() => {
            update = () => refresh({})
            return () => {
                update = NOOP
            }
        })

        let result: any
        try {
            result = !pipelineRenderer.isReady ? (
                <></>
            ) : (
                <OriginComp
                    originRenderer={originRenderer}
                    renderedCb={handleRendered}
                />
            )
        } catch (e) {
            console.error(`Render Layer "${layer.constructor.name}" error `, e)
            result = <></>
        }
        // @ts-ignore
        return ReactDOM.createPortal(result, layer.node!)
    }
    return {
        autorun: () => update(),
        // 这里使用了 memo 缓存隔离，这样做的前提 layer 的刷新完全交给 entity，不受外部干扰
        portal: layer.renderWithReactMemo
            // @ts-ignore
            ? (React.memo(PlaygroundReactLayerPortal) as any)
            : PlaygroundReactLayerPortal,
    }
}
