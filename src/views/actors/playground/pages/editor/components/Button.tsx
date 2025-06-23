import React from 'react';
import { omit } from 'lodash'
import { Button as ButtonPrimitive } from '@chakra-ui/react'
import { useRenderWidget } from '../../../hooks/useRenderWidget';

export const Button = function Button() {
    const {
        renderWidgetActorRef,
        renderWidgetState,
        renderWidgetContext,
        sendToRenderWidget,
        componentType,
        componentName,
        id,
        parentId,
        properties,
        styles,
        key,
        darkMode,
    } = useRenderWidget()



    const renderButton = () => (
        <ButtonPrimitive
            style={styles}
            {...omit(properties, 'text')}
        >
            {properties.text}
        </ButtonPrimitive>
    );

    return <>{renderButton()}</>;
};
