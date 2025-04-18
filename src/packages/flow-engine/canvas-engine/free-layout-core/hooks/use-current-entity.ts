import { useEntityFromContext } from '@flow/canvas-core'

import { type WorkflowNodeEntity } from '../entities'

/**
 * 获取当前节点
 */
export function useCurrentEntity(): WorkflowNodeEntity {
    return useEntityFromContext<WorkflowNodeEntity>()
}
