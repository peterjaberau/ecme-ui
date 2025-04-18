import { useService } from '@flow/canvas-core'

import { FlowEditorClient } from '../clients'

export function useFlowEditor(): FlowEditorClient {
    return useService(FlowEditorClient)
}
