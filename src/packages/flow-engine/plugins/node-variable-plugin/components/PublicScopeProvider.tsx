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

export const PublicScopeProvider = ({ children }: VariableProviderProps) => {
    const node = useEntityFromContext()

    const publicScope: Scope = useMemo(
        () => node.getData(FlowNodeVariableData).public,
        [node],
    )

    return (
        <ScopeProvider value={{ scope: publicScope }}>{children}</ScopeProvider>
    )
}
