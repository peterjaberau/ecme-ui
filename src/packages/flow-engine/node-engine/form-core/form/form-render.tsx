import React, { useEffect } from 'react'

import { useRefresh } from '@flow/utils'
import { FlowNodeEntity } from '@flow/canvas-document'
import { PlaygroundContext } from '@flow/canvas-core'

import { NodeContext } from '../node'
import { FormModel } from './models'
import { FlowNodeFormData } from './flow-node-form-data'

interface FormRenderProps {
    node: FlowNodeEntity
    playgroundContext?: PlaygroundContext
}

function getFormModelFromNode(node: FlowNodeEntity) {
    return node.getData(FlowNodeFormData)?.getFormModel<FormModel>()
}

export function FormRender({ node }: FormRenderProps): any {
    const refresh = useRefresh()

    const formModel = getFormModelFromNode(node)

    useEffect(() => {
        const disposable = formModel?.onInitialized(() => {
            refresh()
        })
        return () => {
            disposable.dispose()
        }
    }, [formModel])

    return formModel?.initialized ? formModel.render() : null
}

export const formPluginRender = (props: NodeContext) => (
    <FormRender {...props} />
)
