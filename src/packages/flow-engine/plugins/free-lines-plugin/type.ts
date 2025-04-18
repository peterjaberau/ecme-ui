import { FC, ReactNode } from 'react'

import type {
    WorkflowLineEntity,
    WorkflowLineRenderContributionFactory,
} from '@flow/free-layout-core'
import { LineRenderType } from '@flow/free-layout-core'

export interface LineRenderProps {
    key: string
    color?: string // 高亮颜色，优先级最高
    selected?: boolean
    line: WorkflowLineEntity
    lineType: LineRenderType
    version: string // 用于控制 memo 刷新
    strokePrefix?: string
    children?: ReactNode
}

export interface LinesLayerOptions {
    renderInsideLine?: FC<LineRenderProps>
}

export interface FreeLinesPluginOptions extends LinesLayerOptions {
    contributions?: WorkflowLineRenderContributionFactory[]
    defaultLineType?: LineRenderType
}
