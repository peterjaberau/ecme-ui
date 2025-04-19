import React, { ReactElement } from 'react'

import { type IPoint, Rectangle } from '@flow/utils'
import {
    type CustomLabelProps,
    type FlowNodeTransitionData,
    type FlowTransitionLabel,
    FlowTransitionLabelEnum,
} from '@flow/canvas-document'

import { type FlowRendererRegistry } from '../flow-renderer-registry'
import CollapseAdder from './CollapseAdder'
import Collapse from './Collapse'
import BranchDraggableRenderer from './BranchDraggableRenderer'
import Adder from './Adder'

export interface LabelOpts {
    // eslint-disable-next-line react/no-unused-prop-types
    data: FlowNodeTransitionData
    rendererRegistry: FlowRendererRegistry
    isViewportVisible: (bounds: Rectangle) => boolean
    labelsSave: ReactElement[]
    getLabelColor: (activated?: boolean) => string
}

const TEXT_LABEL_STYLE: React.CSSProperties = {
    fontSize: 12,
    color: '#8F959E',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundColor: 'var(--g-editor-background)',
    lineHeight: '20px',
}

const LABEL_MAX_WIDTH = 150
const LABEL_MAX_HEIGHT = 60

function getLabelBounds(offset: IPoint) {
    return new Rectangle(
        offset.x - LABEL_MAX_WIDTH / 2,
        offset.y - LABEL_MAX_HEIGHT / 2,
        LABEL_MAX_WIDTH,
        LABEL_MAX_HEIGHT,
    )
}

export function createLabels(labelProps: LabelOpts): void {
    const { data, rendererRegistry, labelsSave, getLabelColor } = labelProps
    const { labels, renderData } = data || {}
    const { activated } = renderData || {}

    // 标签绘制逻辑
    const renderLabel: any = (label: FlowTransitionLabel, index: number) => {
        const { offset, renderKey, props, rotate, type } = label || {}
        const offsetX = offset.x
        const offsetY = offset.y

        let child = null
        switch (type) {
            case FlowTransitionLabelEnum.BRANCH_DRAGGING_LABEL:
                child = (
                    <BranchDraggableRenderer
                        rendererRegistry={rendererRegistry}
                        data={data}
                        {...props}
                    />
                )
                break
            case FlowTransitionLabelEnum.ADDER_LABEL:
                child = (
                    <Adder
                        rendererRegistry={rendererRegistry}
                        data={data}
                        {...props}
                    />
                )
                break

            case FlowTransitionLabelEnum.COLLAPSE_LABEL:
                child = (
                    <Collapse
                        rendererRegistry={rendererRegistry}
                        data={data}
                        {...props}
                    />
                )
                break

            case FlowTransitionLabelEnum.COLLAPSE_ADDER_LABEL:
                child = (
                    <CollapseAdder
                        rendererRegistry={rendererRegistry}
                        data={data}
                        {...props}
                    />
                )
                break

            case FlowTransitionLabelEnum.TEXT_LABEL:
                if (!renderKey) {
                    return null
                }
                const text = rendererRegistry.getText(renderKey) || renderKey
                child = (
                    <div
                        style={{
                            ...TEXT_LABEL_STYLE,
                            ...props?.style,
                            color: getLabelColor(activated),
                            transform: rotate ? `rotate(${rotate})` : undefined,
                        }}
                    >
                        {text}
                    </div>
                )
                break

            case FlowTransitionLabelEnum.CUSTOM_LABEL:
                if (!renderKey) {
                    return null
                }
                try {
                    const renderer =
                        rendererRegistry.getRendererComponent(renderKey)
                    child = React.createElement(
                        renderer.renderer as (props: any) => ReactElement,
                        {
                            node: data.entity,
                            ...props,
                        } as CustomLabelProps,
                    )
                } catch (err) {
                    console.error(err)
                    child = renderKey
                }
                break
            default:
                break
        }

        return (
            <div
                key={`${data.entity.id}${index}`}
                style={{
                    position: 'absolute',
                    left: offsetX,
                    top: offsetY,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {child}
            </div>
        )
    }

    labels.forEach((label, index) => {
        if (labelProps.isViewportVisible(getLabelBounds(label.offset))) {
            labelsSave.push(renderLabel(label, index) as ReactElement | any)
        }
    })
}
