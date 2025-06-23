import React from 'react';
import _ from 'lodash';
import { getDefinitionInitialValue } from './utils';
import { useInspectorComponent } from '@/views/actors/playground/hooks/useInspectorComponent'
import { Box } from '@chakra-ui/react';
const CLIENT_SERVER_TOGGLE_FIELDS = ['serverSidePagination', 'serverSideSort', 'serverSideFilter'];


interface CodeElementProps {
    param?: any,
    definition?: any,
    // onChange,
    paramType?: any,
    componentMeta?: any,
    componentName?: any,
    // onFxPress,
    // fxActive,
    component?: any,
    accordian?: any,
    placeholder?: any,
    // validationFn,
    isHidden?: any,
}

export const CodeElement = (props: CodeElementProps) => {
    const { param, definition, paramType, componentMeta, componentName, component, accordian, placeholder, isHidden = false} = props
    const { currentState } = useInspectorComponent()

    let initialValue = !_.isEmpty(definition)
        ? definition.value
        : getDefinitionInitialValue(paramType, param.name, component, currentState, definition.value);

    const paramMeta = accordian ? componentMeta[paramType]?.[param.name] : componentMeta[paramType][param.name];
    const displayName = paramMeta.displayName || param.name;

    function handleCodeChanged(value: any) {
        console.log('handleCodeChanged', value);
        // onChange(param, 'value', value, paramType);
    }

    const options = paramMeta.options || {};

    const getfieldName = React.useMemo(() => {
        return param.name;
    }, [param]);

    function onVisibilityChange(value: any) {
        console.log('onVisibilityChange', value);
        // onChange({ name: 'iconVisibility' }, 'value', value, 'styles');
    }

    if (isHidden) return null;

    return (
        <Box>

        </Box>
    )



}
