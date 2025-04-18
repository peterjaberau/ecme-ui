import React, { useMemo, useCallback } from 'react'

import { interfaces } from 'inversify'
import { FlowDocument } from '@flow/canvas-document'
import {
    PlaygroundReactProvider,
    createPluginContextDefault,
    SelectionService,
} from '@flow/canvas-core'

import {
    EditorPluginContext,
    EditorProps,
    createDefaultPreset,
} from '../preset'

export const EditorProvider: React.FC<EditorProps> = (props: EditorProps) => {
    const { children, ...others } = props
    const preset = useMemo(() => createDefaultPreset(others), [])
    const customPluginContext = useCallback(
        (container: interfaces.Container) =>
            ({
                ...createPluginContextDefault(container),
                get document(): FlowDocument {
                    return container.get<FlowDocument>(FlowDocument)
                },
                get selection(): SelectionService {
                    return container.get<SelectionService>(SelectionService)
                },
            }) as EditorPluginContext,
        [],
    )
    return (
        <PlaygroundReactProvider
            plugins={preset}
            customPluginContext={customPluginContext}
        >
            {children}
        </PlaygroundReactProvider>
    )
}
