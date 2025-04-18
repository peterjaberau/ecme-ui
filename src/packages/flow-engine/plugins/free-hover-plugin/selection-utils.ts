import { Rectangle } from '@flow/utils'
import { WorkflowNodeEntity } from '@flow/free-layout-core'
import { FlowNodeTransformData } from '@flow/canvas-document'
import { type Entity } from '@flow/canvas-core'

const BOUNDS_PADDING = 2

export function getSelectionBounds(
    selection: Entity[],
    ignoreOneSelect: boolean = true, // 忽略单选
): Rectangle {
    const selectedNodes = selection.filter(
        (node) => node instanceof WorkflowNodeEntity,
    )

    // 选中单个的时候不显示
    return selectedNodes.length > (ignoreOneSelect ? 1 : 0)
        ? Rectangle.enlarge(
              selectedNodes.map(
                  (n) => n.getData(FlowNodeTransformData)!.bounds,
              ),
          ).pad(BOUNDS_PADDING)
        : Rectangle.EMPTY
}
