import { useEffect } from 'react'

import { FlowNodeEntity } from '@flow/canvas-document'
import { useEntityFromContext, useRefresh } from '@flow/canvas-core'

import { FlowNodeFormData, FormModel, IFormItem } from '../../form'

export function useFormItem(path: string): IFormItem | undefined {
    const refresh = useRefresh()
    const node = useEntityFromContext<FlowNodeEntity>()
    const formData = node.getData<FlowNodeFormData>(FlowNodeFormData)
    const formItem = formData.getFormModel<FormModel>().getFormItemByPath(path)

    useEffect(() => {
        const disposable = formData.onDataChange(() => {
            refresh()
        })

        return () => {
            disposable.dispose()
        }
    }, [])

    return formItem
}
