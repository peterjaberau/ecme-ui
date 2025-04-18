import { useMemo } from 'react'

import { Disposable } from '@flow/utils'

import { PlaygroundDragOptions, PlaygroundDrag } from '../core'
import { usePlayground } from './use-playground'

interface UsePlaygroundDragReturn {
    start<T = undefined>(
        e: { clientX: number; clientY: number },
        opts: PlaygroundDragOptions<T> & { context?: T },
    ): Disposable
}

export function usePlaygroundDrag(): UsePlaygroundDragReturn {
    const playground = usePlayground()
    return useMemo(
        () => ({
            start<T>(
                e: { clientX: number; clientY: number },
                opts: PlaygroundDragOptions<T> & { context?: T },
            ): Disposable {
                return PlaygroundDrag.startDrag(e.clientX, e.clientY, {
                    ...opts,
                    config: playground.config,
                })
            },
        }),
        [],
    )
}
