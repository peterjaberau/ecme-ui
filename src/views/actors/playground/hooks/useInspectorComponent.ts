import { useSelector } from '@xstate/react'
import { GlobalPlaygroundContext } from '../actors/playground.provider'

const SHOW_ADDITIONAL_ACTIONS: any = [
    'Text',
    'TextInput',
    'NumberInput',
    'PasswordInput',
    'ToggleSwitchV2',
    'Checkbox',
    'DropdownV2',
    'MultiselectV2',
    'Button',
];
const PROPERTIES_VS_ACCORDION_TITLE: any = {
    Text: 'Data',
    TextInput: 'Data',
    PasswordInput: 'Data',
    NumberInput: 'Data',
    ToggleSwitchV2: 'Data',
    Checkbox: 'Data',
    Button: 'Data',
};

const getPropsGroupFilters = (allComponents: any) => {
    return {
        Properties: [],
        Events: [],
        Validation: [],
        "Additional Actions": Object.keys(allComponents).filter(
            (component) => !SHOW_ADDITIONAL_ACTIONS.includes(component)
        ),
        General: [
            "Modal",
            "TextInput",
            "PasswordInput",
            "NumberInput",
            "Text",
            "Table",
            "Button",
            "ToggleSwitchV2",
            "Checkbox",
            "DropdownV2",
            "MultiselectV2",
            "Image",
        ],
        Layout: [],
    }
}



export function useInspectorComponent() {
    const inspectorComponentActorRef =
        GlobalPlaygroundContext.useActorRef().system.get('inspector-component')
    const sendToInspectorComponent = inspectorComponentActorRef.send

    const inspectorComponentState: any = useSelector(
        inspectorComponentActorRef,
        (state) => state,
    )

    // getCurrentPageComponents
    const allComponents = inspectorComponentState.context.allComponents;


    const dataQueries = inspectorComponentState.context.dataQueries
    const currentState = inspectorComponentState.context.currentState
    const componentMeta = inspectorComponentState.context.componentMeta
    const component = inspectorComponentState.context.component
    const pages = inspectorComponentState.context.pages

    const componentName = componentMeta.component
    const componentEvents = componentMeta.events
    const componentEventKeys = Object.keys(componentMeta.events)




    let properties = [];
    let additionalActions = [];
    for (const [key] of Object.entries(componentMeta?.properties)) {
        if (componentMeta?.properties[key]?.section === 'additionalActions') {
            additionalActions.push(key);
        } else {
            properties.push(key);
        }
    }


    let groups = [];
    if (properties.length > 0) {
        const propertyGroups = properties.map((property) => {
            return {
                title: PROPERTIES_VS_ACCORDION_TITLE[componentName] ?? 'Properties',
                param: property,
                paramType: 'properties'
            }
        });
        groups.push(...propertyGroups);
    }




    const groupFilters: any = getPropsGroupFilters(allComponents)
    const propertiesByGroup: any = groups.filter((item) =>
        !(
            item.title in groupFilters &&
            groupFilters[item.title].includes(componentMeta.component)
        )
    );




    return {
        inspectorComponentActorRef,
        inspectorComponentState,
        sendToInspectorComponent,

        allComponents,
        dataQueries,
        currentState,
        componentMeta,
        component,
        pages,

        componentName,
        componentEvents,
        componentEventKeys,
        properties,
        additionalActions,
        propertiesByGroup

    }
}
