import { useEffect } from 'react'

import { FlowNodeFormData, FormModel } from '@flow/form-core'
import { FlowNodeEntity } from '@flow/canvas-document'
import { PlaygroundContext, useRefresh } from '@flow/canvas-core'

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
