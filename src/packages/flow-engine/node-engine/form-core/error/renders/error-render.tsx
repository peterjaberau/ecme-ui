import React, { useCallback, useEffect } from 'react'

import { FlowNodeEntity } from '@flow/canvas-document'
import { PlaygroundContext, useRefresh, useService } from '@flow/canvas-core'

import { FlowNodeErrorData } from '../flow-node-error-data'
import { MATERIAL_KEY, NodeManager, NodePluginRender } from '../../node'
import { defaultErrorRender } from './default-error-render'

interface NodeRenderProps {
    node: FlowNodeEntity
    playgroundContext: PlaygroundContext
}

export const ErrorRender = ({ node, playgroundContext }: NodeRenderProps) => {
    const refresh = useRefresh()
    const nodeErrorData = node.getData<FlowNodeErrorData>(FlowNodeErrorData)
    const nodeError = nodeErrorData.getError()
    const nodeManager = useService<NodeManager>(NodeManager)
    const nodeErrorRender = nodeManager.getMaterialRender(
        MATERIAL_KEY.NODE_ERROR_RENDER,
    )

    const renderError = useCallback(() => {
        if (!nodeErrorRender) {
            return defaultErrorRender({
                error: nodeError,
                context: { node, playgroundContext },
            })
        }
        return nodeErrorRender({
            error: nodeError,
            context: { node, playgroundContext },
        })
    }, [nodeError, node, playgroundContext])

    useEffect(() => {
        const disposable = nodeErrorData.onDataChange(() => {
            refresh()
        })
        return () => {
            disposable.dispose()
        }
    }, [])

    return nodeError ? renderError() : null
}

export const errorPluginRender: NodePluginRender = (props) => (
    <ErrorRender {...props} />
)
