import { useMemo } from 'react'

import { FlowDragLayer } from '@flow/canvas-renderer'
import { usePlayground } from '@flow/canvas-core'

export function useStartDragNode() {
    const playground = usePlayground()

    const dragLayer: any = playground.getLayer(FlowDragLayer as any)

    return useMemo(
        () => ({
            startDrag: dragLayer
                ? dragLayer.startDrag.bind(dragLayer)
                : (e: any) => {},
        }),
        [dragLayer],
    )
}
