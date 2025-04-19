import React, { ReactElement } from 'react'

import type { FlowTransitionLine } from '@flow/canvas-document'

import { type FlowRendererRegistry } from '../flow-renderer-registry'

interface PropsType extends FlowTransitionLine {
    rendererRegistry: FlowRendererRegistry
}

function CustomLine(props: PropsType): ReactElement {
    const { renderKey, rendererRegistry, ...line } = props

    if (!renderKey) {
        return <></>
    }

    const renderer = rendererRegistry.getRendererComponent(renderKey)

    if (!renderer) {
        return <></>
    }

    const Component = renderer.renderer as (
        props: FlowTransitionLine,
    ) => ReactElement

    return <Component {...line} />
}

export default CustomLine
