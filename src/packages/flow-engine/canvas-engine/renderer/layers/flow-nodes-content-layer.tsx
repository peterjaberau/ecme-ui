import ReactDOM from 'react-dom'
import React, { ReactElement } from 'react'

import { inject, injectable } from 'inversify'
import { Cache, type CacheOriginItem, domUtils } from '@flow/utils'
import {
    FlowDocument,
    FlowDocumentTransformerEntity,
    FlowNodeEntity,
    FlowNodeRenderData,
    FlowNodeTransformData,
} from '@flow/canvas-document'
import {
    Layer,
    observeEntity,
    observeEntityDatas,
    PlaygroundEntityContext,
} from '@flow/canvas-core'

import {
    FlowRendererKey,
    FlowRendererRegistry,
} from '../flow-renderer-registry'

interface NodePortal extends CacheOriginItem {
    id: string
    Portal: () => ReactElement
}

/**
 * 渲染节点内容
 */
@injectable()
export class FlowNodesContentLayer extends Layer {
    @inject(FlowDocument) readonly document: FlowDocument | any

    @inject(FlowRendererRegistry)
    readonly rendererRegistry: FlowRendererRegistry | any

    @observeEntity(FlowDocumentTransformerEntity)
    readonly documentTransformer: FlowDocumentTransformerEntity | any

    @observeEntityDatas(FlowNodeEntity, FlowNodeRenderData)
    _renderStates: FlowNodeRenderData[] | any

    get renderStatesVisible(): FlowNodeRenderData[] {
        //@ts-ignore
        return this.document.getRenderDatas<FlowNodeRenderData>(
            FlowNodeRenderData,
            false,
        )
    }

    private renderMemoCache = new WeakMap<any, any>()

    node = domUtils.createDivWithClass('gedit-flow-nodes-layer')

    getPortalRenderer(data: FlowNodeRenderData): (props: any) => ReactElement {
        const meta = data.entity.getNodeMeta()
        const renderer = this.rendererRegistry.getRendererComponent(
            (meta.renderKey as FlowRendererKey) || FlowRendererKey.NODE_RENDER,
        )
        const reactRenderer = renderer.renderer as any
        let memoCache = this.renderMemoCache.get(reactRenderer)
        if (!memoCache) {
            memoCache = React.memo(reactRenderer)
            this.renderMemoCache.set(reactRenderer, memoCache)
        }
        return memoCache
    }

    /**
     * 监听缩放，目前采用整体缩放
     * @param scale
     */
    onZoom(scale: number) {
        this.node!.style.transform = `scale(${scale})`
    }

    dispose(): void {
        this.reactPortals.dispose()
        super.dispose()
    }

    protected reactPortals = Cache.create<NodePortal, FlowNodeRenderData>(
        (data?: FlowNodeRenderData) => {
            const { node, entity } = data!
            const { config } = this
            const PortalRenderer = this.getPortalRenderer(data!)

            function Portal(): ReactElement {
                React.useEffect(() => {
                    // 第一次加载需要把宽高通知
                    if (node.clientWidth && node.clientHeight) {
                        const transform = entity.getData<FlowNodeTransformData>(
                            FlowNodeTransformData,
                        )
                        if (transform)
                            transform.size = {
                                width: node.clientWidth,
                                height: node.clientHeight,
                            }
                    }
                }, [])
                // 这里使用 portal，改 dom 样式不会引起 react 重新渲染
                return ReactDOM.createPortal(
                    <PlaygroundEntityContext.Provider value={entity}>
                        //@ts-ignore
                        <PortalRenderer
                            node={entity}
                            version={data?.version}
                            activated={data?.activated}
                            readonly={config.readonly}
                            disabled={config.disabled}
                        />
                    </PlaygroundEntityContext.Provider>,
                    node,
                )
            }

            return {
                id: node.id || entity.id,
                dispose: () => {
                    // TODO, 删除逻辑由 node 去控制了
                },
                Portal,
            } as NodePortal
        },
    )

    onReady() {
        this.node!.style.zIndex = '10'
    }

    /**
     * 监听readonly和 disabled 状态 并刷新layer, 并刷新节点
     */
    onReadonlyOrDisabledChange() {
        this.render()
    }

    getPortals(): NodePortal[] {
        return this.reactPortals.getMoreByItems(this.renderStatesVisible)
    }

    render(): ReactElement | any {
        if (this.documentTransformer.loading) return <></>
        this.documentTransformer.refresh()

        // 从缓存获取节点
        return (
            <>
                {this.getPortals().map((portal) => (
                    <portal.Portal key={portal.id} />
                ))}
            </>
        )
    }
}
