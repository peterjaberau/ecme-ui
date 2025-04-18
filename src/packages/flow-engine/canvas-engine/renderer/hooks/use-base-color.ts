import { ConstantKeys, FlowDocumentOptions } from '@flow/canvas-document'
import { useService } from '@flow/canvas-core'

export const BASE_DEFAULT_COLOR = '#BBBFC4'
export const BASE_DEFAULT_ACTIVATED_COLOR = '#82A7FC'

export function useBaseColor(): {
    baseColor: string
    baseActivatedColor: string
} {
    const options = useService<FlowDocumentOptions>(FlowDocumentOptions)
    return {
        baseColor:
            options.constants?.[ConstantKeys.BASE_COLOR] || BASE_DEFAULT_COLOR,
        baseActivatedColor:
            options.constants?.[ConstantKeys.BASE_ACTIVATED_COLOR] ||
            BASE_DEFAULT_ACTIVATED_COLOR,
    }
}
