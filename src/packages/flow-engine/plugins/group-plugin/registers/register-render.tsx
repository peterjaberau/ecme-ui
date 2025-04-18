import React, { FC } from 'react'

import { FlowRendererRegistry } from '@flow/canvas-renderer'
import { FlowNodeEntity } from '@flow/canvas-document'

import { IGroupPluginRegister } from '../type'
import { GroupRenderer } from '../constant'
import { GroupRender } from '../components'

/** 注册渲染组件 */
export const registerRender: IGroupPluginRegister = (ctx, opts) => {
    const rendererRegistry = ctx.get<FlowRendererRegistry>(FlowRendererRegistry)
    const renderer: FC<{ node: FlowNodeEntity }> = (props) => (
        <GroupRender
            groupNode={props.node}
            GroupNode={opts.components!.GroupNode}
            GroupBoxHeader={opts.components!.GroupBoxHeader}
        />
    )
    rendererRegistry.registerReactComponent(GroupRenderer.GroupRender, renderer)
}
