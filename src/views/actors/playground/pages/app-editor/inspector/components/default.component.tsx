import React, { useState, useEffect } from 'react';
import { useInspectorComponent } from '@/views/actors/playground/hooks/useInspectorComponent'
import { RenderElement } from '../render.element'
import { For } from '@chakra-ui/react'


export const DefaultComponent = () => {
    const {
        component,
        componentName,
        componentMeta,
        dataQueries,
        allComponents,
        currentState,
        componentEvents,
        componentEventKeys,
        properties,
        additionalActions,
        propertiesByGroup
    } = useInspectorComponent()


    return (
     <>
         <For each={propertiesByGroup}>
             {
                 (item: any, index) => (
                     <RenderElement
                         key={index}
                         component={component}
                         componentMeta={componentMeta}
                         dataQueries={dataQueries}
                         param={item.param}
                         paramType={item.paramType}
                         currentState={currentState}
                         components={allComponents}
                     />
                 )
             }

         </For>
     </>
    )
}
