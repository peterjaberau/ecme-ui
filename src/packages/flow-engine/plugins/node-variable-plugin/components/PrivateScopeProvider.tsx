import React, { useMemo } from 'react'

import {
    FlowNodeVariableData,
    type Scope,
    ScopeProvider,
} from '@flow/variable-plugin'
import { useEntityFromContext } from '@flow/canvas-core'

interface VariableProviderProps {
    children: React.ReactElement
}

export const PrivateScopeProvider = ({ children }: VariableProviderProps) => {
    const node = useEntityFromContext()

    const privateScope: Scope = useMemo(() => {
        const variableData: FlowNodeVariableData =
            node.getData(FlowNodeVariableData)
        if (!variableData.private) {
            variableData.initPrivate()
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return variableData.private!
    }, [node])

    return (
        <ScopeProvider value={{ scope: privateScope }}>
            {children}
        </ScopeProvider>
    )
}
