import React from 'react'

import { useInspectorComponent } from '@/playground/hooks/useInspectorComponent'
import JsonView from '../../../_components/JSONTree'

interface RenderElementProps {
    component?: any
    componentMeta?: any
    dataQueries?: any
    param?: any
    paramType?: any
    currentState?: any
    components?: any
    darkMode?: any
    placeholder?: any
    [key: string]: any
}

export const RenderElement = (props: RenderElementProps) => {
    const {
        component,
        componentMeta,
        dataQueries,
        param,
        paramType,
        currentState,
        components = {},
        darkMode = false,
        placeholder = '',
    } = props

    const componentConfig = component.component;
    const componentDefinition = componentConfig.definition;
    const paramTypeDefinition = componentDefinition[paramType] || {};
    const definition = paramTypeDefinition[param] || {};
    const meta = componentMeta[paramType][param];
    const isHidden = component.component.properties[param]?.isHidden ?? false;




    return <JsonView src={{
        props: props,
        config: {
            componentConfig: componentConfig,
            componentDefinition: componentDefinition,
            paramTypeDefinition: paramTypeDefinition,
            definition: definition,
            isHidden: isHidden
        }
    }} collapsed={1} />
}
