/* eslint-disable @typescript-eslint/naming-convention */
import { injectable, inject } from 'inversify'
import { HistoryService } from '@flow/history'
import { type NodesDragEndEvent } from '@flow/free-layout-core'
import { TransformData } from '@flow/canvas-core'

import { FreeOperationType, type IHandler } from '../types'

@injectable()
export class DragNodesHandler implements IHandler<NodesDragEndEvent> {
    @inject(HistoryService)
    private _historyService: HistoryService | any

    handle(event: NodesDragEndEvent) {
        if (event.type === 'onDragEnd') {
            this._dragNode(event)
        }
    }

    private _dragNode(event: NodesDragEndEvent) {
        this._historyService.pushOperation(
            {
                type: FreeOperationType.dragNodes,
                value: {
                    ids: event.nodes.map((node) => node.id),
                    value: event.nodes.map((node) => {
                        const { x, y } = node.getData(TransformData).position
                        return {
                            x,
                            y,
                        }
                    }),
                    oldValue: event.startPositions,
                },
            },
            { noApply: true },
        )
    }
}
