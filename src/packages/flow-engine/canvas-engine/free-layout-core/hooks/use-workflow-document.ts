import { useService } from '@flow/canvas-core'

import { WorkflowDocument } from '../workflow-document'

export function useWorkflowDocument(): WorkflowDocument {
    return useService<WorkflowDocument>(WorkflowDocument)
}
