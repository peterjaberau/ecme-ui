import type { Entity } from '@flow/canvas-core'
import type { WorkfloEntityHoverable } from '@flow/free-layout-core'

export type StackingContext = {
    hoveredEntity?: WorkfloEntityHoverable
    hoveredEntityID?: string
    selectedEntities: Entity[]
    selectedIDs: string[]
}
