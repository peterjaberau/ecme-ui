
export const getDefinitionInitialValue = (paramType: any, param: any, definition: any, component: any, currentState: any) => {
    const componentType = component?.component?.component;

    switch (componentType) {
        // case 'Table':
        //     return getTableDefinitionInitialValue(param, component, currentState);

        case 'Text':
            return ensureLegacyTextComponentCompatibility(param, definition);

        default:
            return '';
    }
};

export const ensureLegacyTextComponentCompatibility = (param: any, definition: any) => {
    if (param !== 'textFormat') return;

    const componentTextFormatProperty = definition?.properties?.textFormat;

    if (!componentTextFormatProperty) {
        return 'html';
    }
};

