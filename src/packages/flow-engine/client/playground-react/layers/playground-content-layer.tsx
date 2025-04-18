import React from 'react'

import { injectable } from 'inversify'
import { Layer } from '@flow/canvas-core'
import { domUtils } from '@flow/utils'

export interface PlaygroundReactContentProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

@injectable()
export class PlaygroundContentLayer extends Layer<PlaygroundReactContentProps> {
    static type = 'PlaygroundContentLayer'

    readonly node = domUtils.createDivWithClass(
        'gedit-playground-layer gedit-playground-content-layer',
    )

    onZoom(scale: number): void {
        this.node.style.transform = `scale(${scale})`
    }

    onReady() {
        this.node.style.left = '0px'
        this.node.style.top = '0px'
    }

    updateOptions(opts: PlaygroundReactContentProps) {
        this.options = opts
        this.render()
    }

    render(): JSX.Element {
        return (
            <div
                className={this.options.className}
                style={{ position: 'absolute', ...this.options.style }}
            >
                {this.options.children}
            </div>
        )
    }
}
