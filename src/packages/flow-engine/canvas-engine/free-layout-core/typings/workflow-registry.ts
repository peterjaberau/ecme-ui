import type { FormMeta } from '@flow/node-engine'
import type { FormMetaOrFormMetaGenerator } from '@flow/form-core'
import type { FlowNodeRegistry } from '@flow/canvas-document'

import type { WorkflowNodeEntity } from '../entities'
import type { WorkflowNodeMeta } from './workflow-node'

/**
 * 节点表单引擎配置
 */
export type WorkflowNodeFormMeta = FormMetaOrFormMetaGenerator | FormMeta

/**
 * 节点注册
 */
export interface WorkflowNodeRegistry
    extends FlowNodeRegistry<WorkflowNodeMeta> {
    formMeta?: WorkflowNodeFormMeta
}

export interface WorkflowNodeRenderProps {
    node: WorkflowNodeEntity
}
