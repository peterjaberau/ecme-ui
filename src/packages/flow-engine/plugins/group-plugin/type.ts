import type { CSSProperties, FC } from 'react'

import type { FlowNodeEntity } from '@flow/canvas-document'
import type { FlowGroupController } from '@flow/canvas-document'
import type { LayerOptions, PluginContext } from '@flow/canvas-core'

import type { GroupPluginRegister } from './constant'

export type IGroupBox = FC<{
    groupNode: FlowNodeEntity
    backgroundStyle?: (groupController: FlowGroupController) => CSSProperties
}>

export type IGroupRender = FC<{
    groupNode: FlowNodeEntity
    GroupNode: IGroupNode
    GroupBoxHeader: IGroupBoxHeader
}>

export type IGroupNode = FC<{
    groupNode: FlowNodeEntity
    groupController: FlowGroupController
}>

export type IGroupBoxHeader = FC<{
    groupNode: FlowNodeEntity
    groupController: FlowGroupController
}>

export interface GroupsLayerOptions extends LayerOptions {
    groupBoxStyle?: (groupController: FlowGroupController) => CSSProperties
}

export type IGroupPluginRegister = (
    ctx: PluginContext,
    opts: CreateGroupPluginOptions,
) => void

export type CreateGroupPluginOptions = GroupsLayerOptions & {
    components?: {
        GroupNode: IGroupNode
        GroupBoxHeader: IGroupBoxHeader
    }
    registers?: {
        [key in GroupPluginRegister]?: IGroupPluginRegister | boolean
    }
}
