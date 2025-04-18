import { inject, injectable } from 'inversify'
import {
    type FlowDocument,
    type FlowLayout,
    type FlowNodeEntity,
    FlowDocumentProvider,
    FlowNodeTransformData,
} from '@flow/canvas-document'
import { PlaygroundConfigEntity, TransformData } from '@flow/canvas-core'
import {
    type IPoint,
    PaddingSchema,
    Rectangle,
    type ScrollSchema,
    SizeSchema,
} from '@flow/utils'

export const FREE_LAYOUT_KEY = 'free-layout'
/**
 * 自由画布布局
 */
@injectable()
export class FreeLayout implements FlowLayout {
    name = FREE_LAYOUT_KEY

    @inject(PlaygroundConfigEntity) playgroundConfig: PlaygroundConfigEntity

    @inject(FlowDocumentProvider)
    protected documentProvider: FlowDocumentProvider

    get document(): FlowDocument {
        return this.documentProvider()
    }

    /**
     * 更新布局
     */
    update(): void {
        if (this.document.root.getData(FlowNodeTransformData)?.localDirty) {
            this.document.root.clearMemoGlobal()
            // this.document.root.getData(FlowNodeTransformData)!.localDirty = false
        }
        // 自由画布同步同步大小, TODO 这个移动到 createWorkflowNode
        // this.document.root.allChildren.forEach(this.syncTransform.bind(this))
    }

    syncTransform(node: FlowNodeEntity): void {
        const transform = node.getData<FlowNodeTransformData>(
            FlowNodeTransformData,
        )!
        if (!transform.localDirty) {
            return
        }
        node.clearMemoGlobal()
        node.clearMemoLocal()
        // 同步 size 给原始的 transform
        transform.transform.update({
            size: transform.data.size,
        })
        if (!node.parent) {
            return
        }
        node.parent.clearMemoGlobal()
        node.parent.clearMemoLocal()
        const parentTransform = node.parent.getData<FlowNodeTransformData>(
            FlowNodeTransformData,
        )
        parentTransform.transform.fireChange()
    }

    /**
     * 获取节点的 padding 数据
     * @param node
     */
    getPadding(node: FlowNodeEntity): PaddingSchema {
        const { padding } = node.getNodeMeta()
        const transform = node.getData<FlowNodeTransformData>(
            FlowNodeTransformData,
        )
        if (padding) {
            return typeof padding === 'function' ? padding(transform) : padding
        }
        return PaddingSchema.empty()
    }

    /**
     * 默认滚动到 fitview 区域
     * @param contentSize
     */
    getInitScroll(contentSize: SizeSchema): ScrollSchema {
        const bounds = Rectangle.enlarge(
            this.document
                .getAllNodes()
                .map(
                    (node) => node.getData<TransformData>(TransformData).bounds,
                ),
        ).pad(30, 30) // 留出 30 像素的边界
        const viewport = this.playgroundConfig.getViewport(false)
        const zoom = SizeSchema.fixSize(bounds, viewport)
        return {
            scrollX:
                (bounds.x + bounds.width / 2) * zoom -
                this.playgroundConfig.config.width / 2,
            scrollY:
                (bounds.y + bounds.height / 2) * zoom -
                this.playgroundConfig.config.height / 2,
        }
    }

    /**
     * 获取默认输入点
     */
    getDefaultInputPoint(node: FlowNodeEntity): IPoint {
        return node.getData<TransformData>(TransformData)!.bounds.leftCenter
    }

    /**
     * 获取默认输出点
     */
    getDefaultOutputPoint(node: FlowNodeEntity): IPoint {
        return node.getData<TransformData>(TransformData)!.bounds.rightCenter
    }

    /**
     * 水平中心点
     */
    getDefaultNodeOrigin(): IPoint {
        return { x: 0.5, y: 0 }
    }
}
