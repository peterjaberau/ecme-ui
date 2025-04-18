import React, { forwardRef } from 'react'

import { EditorRenderer } from '@flow/editor'

import { FreeLayoutPluginContext, FreeLayoutProps } from '../preset'
import { FreeLayoutEditorProvider } from './free-layout-editor-provider'

/**
 * 自由布局编辑器
 * @param props
 * @constructor
 */
export const FreeLayoutEditor = forwardRef<
    FreeLayoutPluginContext,
    FreeLayoutProps
>(function FreeLayoutEditor(props: FreeLayoutProps, ref) {
    const { children, ...otherProps } = props
    return (
        <FreeLayoutEditorProvider ref={ref} {...otherProps}>
            <EditorRenderer>{children}</EditorRenderer>
        </FreeLayoutEditorProvider>
    )
})
