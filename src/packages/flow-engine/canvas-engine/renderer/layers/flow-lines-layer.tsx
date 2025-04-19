import React, { ReactElement } from 'react'

import { groupBy, throttle } from 'lodash'
import { inject, injectable } from 'inversify'
import { domUtils } from '@flow/utils'
import {
    FlowDocument,
    FlowDocumentTransformerEntity,
    FlowNodeEntity,
    FlowNodeTransitionData,
    FlowRendererStateEntity,
    FlowDragService,
} from '@flow/canvas-document'
import { Layer, observeEntity, observeEntityDatas } from '@flow/canvas-core'

import {
    FlowRendererKey,
    FlowRendererRegistry,
} from '../flow-renderer-registry'
import MarkerArrow from '../components/MarkerArrow'
import MarkerActivatedArrow from '../components/MarkerActivatedArrow'
import { createLines } from '../components/LinesRenderer'

@injectable()
export class FlowLinesLayer extends Layer {
    @inject(FlowDocument) readonly document: FlowDocument | any

    @inject(FlowDragService)
    protected readonly dragService: FlowDragService | any

    @inject(FlowRendererRegistry)
    readonly rendererRegistry: FlowRendererRegistry | any

    node = domUtils.createDivWithClass('gedit-flow-lines-layer')

    @observeEntity(FlowDocumentTransformerEntity)
    readonly documentTransformer: FlowDocumentTransformerEntity | any

    @observeEntity(FlowRendererStateEntity)
    readonly flowRenderState: FlowRendererStateEntity | any

    /**
     * 监听 transition 变化
     */
    @observeEntityDatas(FlowNodeEntity, FlowNodeTransitionData)
    _transitions: FlowNodeTransitionData[] | any

    get transitions(): FlowNodeTransitionData[] {
        //@ts-ignore
        return this.document.getRenderDatas<FlowNodeTransitionData>(
            FlowNodeTransitionData,
        )
    }

    /**
     * 可视区域变化
     */
    onViewportChange = throttle(() => {
        this.render()
    }, 100)

    onZoom() {
        const svgContainer = this.node!.querySelector(
            'svg.flow-lines-container',
        )!
        svgContainer?.setAttribute?.('viewBox', this.viewBox)
    }

    onReady() {
        this.node.style.zIndex = '1'
    }

    get viewBox(): string {
        const ratio = 1000 / this.config.finalScale
        return `0 0 ${ratio} ${ratio}`
    }

    render(): ReactElement | any {
        const allLines: ReactElement[] = []
        const isViewportVisible = this.config.isViewportVisible.bind(
            this.config,
        )
        // 还没初始化
        //@ts-ignore
        if (this.documentTransformer.loading) return <></>
        this.documentTransformer.refresh()

        this.transitions.forEach((transition) => {
            createLines({
                data: transition,
                rendererRegistry: this.rendererRegistry,
                isViewportVisible,
                linesSave: allLines as any,
                dragService: this.dragService,
            })
        })

        // svg 没有 z-index，只能通过顺序来设置前后层级
        // 通过将 activated 的项排到最后，防止 hover 层级覆盖
        const { activateLines = [], normalLines = [] } = groupBy(
            allLines,
            (line: any) => (line.props.activated ? 'activateLines' : 'normalLines'),
        )
        const resultLines = [...normalLines, ...activateLines]

        const arrowRenderer = this.rendererRegistry.tryToGetRendererComponent(
            FlowRendererKey.MARKER_ARROW,
        )
        const activateArrowRenderer =
            this.rendererRegistry.tryToGetRendererComponent(
                FlowRendererKey.MARKER_ACTIVATE_ARROW,
            )
        const arrow = arrowRenderer
            ? React.createElement(arrowRenderer.renderer as () => ReactElement | any)
            : null
        const activateArrow = activateArrowRenderer
            ? React.createElement(
                  activateArrowRenderer.renderer as () => ReactElement | any,
              )
            : null

        return (
            <svg
                className="flow-lines-container"
                width="1000"
                height="1000"
                overflow="visible"
                viewBox={this.viewBox}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {arrowRenderer ? arrow : <MarkerArrow />}
                    {activateArrow ? activateArrow : <MarkerActivatedArrow />}
                </defs>
                {resultLines}
            </svg>
        )
    }
}
