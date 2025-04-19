import React from 'react'

import { inject, injectable } from 'inversify'
import { Layer } from '@flow/canvas-core'
import { domUtils } from '@flow/utils'

import { MinimapLayerOptions } from './type'
import { FlowMinimapService } from './service'
import { MinimapRender } from './component'

@injectable()
export class FlowMinimapLayer extends Layer<MinimapLayerOptions> {
    public static type = 'FlowMinimapLayer'

    @inject(FlowMinimapService) private readonly service: FlowMinimapService | any

    public readonly node: HTMLElement

    private readonly className = 'gedit-minimap-layer gedit-playground-layer'

    constructor() {
        super()
        this.node = domUtils.createDivWithClass(this.className)
        this.node.style.zIndex = '9999'
    }

    public render(): Element | any {
        if (this.options.disableLayer) {
            return <></>
        }
        return (
            <MinimapRender
                service={this.service}
                panelStyles={this.options.panelStyles}
                containerStyles={this.options.containerStyles}
                inactiveStyle={this.options.inactiveStyle}
            />
        )
    }
}
