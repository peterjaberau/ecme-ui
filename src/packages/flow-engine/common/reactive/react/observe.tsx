import React, { useRef, useEffect } from 'react'

import { useRefresh } from '@flow/utils'

import { Tracker } from '../core/tracker'

import Computation = Tracker.Computation

export function observe<T = any>(fc: React.FC<T>): React.FC<T> {
    return function ReactiveObserver(props: T) {
        const childrenRef = useRef<React.ReactElement<any, any> | null | any>(null)
        const computationRef = useRef<Computation | undefined | any>(null)
        const refresh = useRefresh()
        computationRef.current?.stop()
        computationRef.current = new Tracker.Computation((c) => {
            if (c.firstRun) {
                childrenRef.current = fc(props)
            } else {
                refresh()
            }
        })
        useEffect(
            () => () => {
                computationRef.current?.stop()
            },
            [],
        )
        return childrenRef.current!
    }
}
