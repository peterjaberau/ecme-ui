import React, { ReactElement } from 'react'

import { min } from 'lodash'
import {
    type FlowNodeEntity,
    FlowNodeTransformData,
} from '@flow/fixed-layout-editor'

import { Ellipse } from '../../assets'
import { UILineContainer, UILine } from './styles'

const getMinSize = (preWidth: number, nextWidth: number): number => {
    if (!preWidth || preWidth < 0) {
        return 0
    }
    if (!nextWidth || nextWidth < 0) {
        return preWidth
    }
    return min([preWidth, nextWidth]) || 0
}

export default function DragHighlightAdder({
    node,
}: {
    node: FlowNodeEntity
}): ReactElement | any {
    const transformBounds = node.getData<FlowNodeTransformData>(
        FlowNodeTransformData,
    )?.bounds
    const { isVertical } = node
    if (isVertical) {
        const preWidth = (transformBounds?.width || 0) - 16
        const nextNodeBounds = node?.next?.getData<FlowNodeTransformData>(
            FlowNodeTransformData,
        )?.bounds?.width
        const nextWidth = (nextNodeBounds || 0) - 16
        const LineDom = UILine(getMinSize(preWidth, nextWidth), 2)
        return (
            <UILineContainer>
                <Ellipse />
                <LineDom />
                <Ellipse />
            </UILineContainer>
        )
    }
    const preHeight = (transformBounds?.height || 0) - 16
    const nextNodeBounds = node?.next?.getData<FlowNodeTransformData>(
        FlowNodeTransformData,
    )?.bounds?.height
    const nextHeight = (nextNodeBounds || 0) - 16
    const LineDom = UILine(2, getMinSize(preHeight, nextHeight))
    return (
        <UILineContainer style={{ flexDirection: 'column' }}>
            <Ellipse />
            <LineDom />
            <Ellipse />
        </UILineContainer>
    )
}
