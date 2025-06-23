export const renderWidgetData = {
    playgroundLayout: {
        props: {
            isLeftPanelCollapsed: false,
            isPlayground: false,
            isReversed: false,
            settings: {
                name: 'challenge-layout-settings',
            },
            collapsedWidth: 60,
        },
    },
    plugins: [
        {
            name: 'Button',
            displayName: 'Button',
            description: 'Trigger actions: queries, alerts, set variables etc.',
            component: 'Button',
            defaultSize: {
                width: 4,
                height: 40,
            },
            others: {
                showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
            },
            properties: {
                text: {
                    type: 'code',
                    displayName: 'Label',
                    validation: {
                        schema: { type: 'string' },
                    },
                },
                loadingState: {
                    type: 'toggle',
                    displayName: 'Loading state',
                    validation: { schema: { type: 'boolean' } },
                    section: 'additionalActions',
                },
                visibility: {
                    type: 'toggle',
                    displayName: 'Visibility',
                    validation: { schema: { type: 'boolean' } },
                    section: 'additionalActions',
                },
                disabledState: {
                    type: 'toggle',
                    displayName: 'Disable',
                    validation: { schema: { type: 'boolean' } },
                    section: 'additionalActions',
                },
                tooltip: {
                    type: 'code',
                    displayName: 'Tooltip',
                    validation: { schema: { type: 'string' } },
                    section: 'additionalActions',
                    placeholder: 'Enter tooltip text',
                },
            },
            events: {
                onClick: { displayName: 'On click' },
                onHover: { displayName: 'On hover' },
            },
            styles: {
                type: {
                    type: 'switch',
                    displayName: 'Type',
                    validation: { schema: { type: 'string' } },
                    options: [
                        { displayName: 'Solid', value: 'primary' },
                        { displayName: 'Outline', value: 'outline' },
                    ],
                    accordian: 'button',
                },
                backgroundColor: {
                    type: 'color',
                    displayName: 'Background',
                    validation: {
                        schema: { type: 'string' },
                        defaultValue: false,
                    },
                    conditionallyRender: {
                        key: 'type',
                        value: 'primary',
                    },
                    accordian: 'button',
                },
                textColor: {
                    type: 'color',
                    displayName: 'Text color',
                    validation: {
                        schema: { type: 'string' },
                        defaultValue: false,
                    },
                    accordian: 'button',
                },
                borderColor: {
                    type: 'color',
                    displayName: 'Border color',
                    validation: {
                        schema: { type: 'string' },
                        defaultValue: false,
                    },
                    accordian: 'button',
                },
                loaderColor: {
                    type: 'color',
                    displayName: 'Loader color',
                    validation: {
                        schema: { type: 'string' },
                        defaultValue: false,
                    },
                    accordian: 'button',
                },

                icon: {
                    type: 'icon',
                    displayName: 'Icon',
                    validation: { schema: { type: 'string' } },
                    accordian: 'button',

                    visibility: false,
                },
                iconColor: {
                    type: 'color',
                    displayName: 'Icon color',
                    validation: { schema: { type: 'string' } },
                    accordian: 'button',
                    visibility: false,
                },

                direction: {
                    type: 'switch',
                    displayName: '',
                    validation: { schema: { type: 'string' } },
                    showLabel: false,
                    isIcon: true,
                    options: [
                        { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                        { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                    ],
                    accordian: 'button',
                },
                borderRadius: {
                    type: 'numberInput',
                    displayName: 'Border radius',
                    validation: {
                        validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                        defaultValue: false,
                    },
                    accordian: 'button',
                },
                boxShadow: {
                    type: 'boxShadow',
                    displayName: 'Box shadow',
                    validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                    accordian: 'button',
                    conditionallyRender: {
                        key: 'type',
                        value: 'primary',
                    },
                },

                padding: {
                    type: 'switch',
                    displayName: 'Padding',
                    validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                    options: [
                        { displayName: 'Default', value: 'default' },
                        { displayName: 'None', value: 'none' },
                    ],
                    accordian: 'container',
                },
            },
            exposedVariables: {
                buttonText: 'Button',
                isVisible: true,
                isDisabled: false,
                isLoading: false,
            },
            actions: [
                {
                    handle: 'click',
                    displayName: 'Click',
                },
                {
                    handle: 'setText',
                    displayName: 'Set text',
                    params: [{ handle: 'text', displayName: 'Text', defaultValue: 'New Text' }],
                },
                {
                    handle: 'setVisibility',
                    displayName: 'Set visibility',
                    params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                },
                {
                    handle: 'setDisable',
                    displayName: 'Set disable',
                    params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                },
                {
                    handle: 'setLoading',
                    displayName: 'Set loading',
                    params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                },
                {
                    handle: 'disable',
                    displayName: 'Disable(deprecated)',
                    params: [{ handle: 'disable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                },
                {
                    handle: 'visibility',
                    displayName: 'Visibility(deprecated)',
                    params: [{ handle: 'visible', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                },
                {
                    handle: 'loading',
                    displayName: 'Loading(deprecated)',
                    params: [{ handle: 'loading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                },
            ],
            definition: {
                others: {
                    showOnDesktop: { value: '{{true}}' },
                    showOnMobile: { value: '{{false}}' },
                },
                properties: {
                    text: { value: `Button` },
                    visibility: { value: '{{true}}' },
                    disabledState: { value: '{{false}}' },
                    loadingState: { value: '{{false}}' },
                    tooltip: { value: '' },
                },
                events: [],
                styles: {
                    textColor: { value: '#FFFFFF' },
                    borderColor: { value: '#4368E3' },
                    loaderColor: { value: '#FFFFFF' },
                    borderRadius: { value: '{{6}}' },
                    backgroundColor: { value: '#4368E3' },
                    iconColor: { value: '#FFFFFF' },
                    direction: { value: 'left' },
                    padding: { value: 'default' },
                    boxShadow: { value: '0px 0px 0px 0px #00000090' },
                    icon: { value: 'IconAlignBoxBottomLeft' },
                    iconVisibility: { value: false },
                    type: { value: 'primary' },
                },
            },
        },
    ],
    renderWidget:    {
        definitionWithState: {
            "properties": {
                "text": {
                    "type": "code",
                    "displayName": "Label",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    }
                },
                "loadingState": {
                    "type": "toggle",
                    "displayName": "Loading state",
                    "validation": {
                        "schema": {
                            "type": "boolean"
                        }
                    },
                    "section": "additionalActions"
                },
                "visibility": {
                    "type": "toggle",
                    "displayName": "Visibility",
                    "validation": {
                        "schema": {
                            "type": "boolean"
                        }
                    },
                    "section": "additionalActions"
                },
                "disabledState": {
                    "type": "toggle",
                    "displayName": "Disable",
                    "validation": {
                        "schema": {
                            "type": "boolean"
                        }
                    },
                    "section": "additionalActions"
                },
                "tooltip": {
                    "type": "code",
                    "displayName": "Tooltip",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "section": "additionalActions",
                    "placeholder": "Enter tooltip text"
                }
            },
            "general": {
                "tooltip": {
                    "type": "code",
                    "displayName": "Tooltip",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "others": {
                "showOnDesktop": {
                    "type": "toggle",
                    "displayName": "Show on desktop"
                },
                "showOnMobile": {
                    "type": "toggle",
                    "displayName": "Show on mobile"
                }
            },
            "events": {
                "onClick": {
                    "displayName": "On click"
                },
                "onHover": {
                    "displayName": "On hover"
                }
            },
            "styles": {
                "type": {
                    "type": "switch",
                    "displayName": "Type",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "options": [
                        {
                            "displayName": "Solid",
                            "value": "primary"
                        },
                        {
                            "displayName": "Outline",
                            "value": "outline"
                        }
                    ],
                    "accordian": "button"
                },
                "backgroundColor": {
                    "type": "color",
                    "displayName": "Background",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "conditionallyRender": {
                        "key": "type",
                        "value": "primary"
                    },
                    "accordian": "button"
                },
                "textColor": {
                    "type": "color",
                    "displayName": "Text color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "borderColor": {
                    "type": "color",
                    "displayName": "Border color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "loaderColor": {
                    "type": "color",
                    "displayName": "Loader color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "icon": {
                    "type": "icon",
                    "displayName": "Icon",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "accordian": "button",
                    "visibility": false
                },
                "iconColor": {
                    "type": "color",
                    "displayName": "Icon color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "accordian": "button",
                    "visibility": false
                },
                "direction": {
                    "type": "switch",
                    "displayName": "",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "showLabel": false,
                    "isIcon": true,
                    "options": [
                        {
                            "displayName": "alignleftinspector",
                            "value": "left",
                            "iconName": "alignleftinspector"
                        },
                        {
                            "displayName": "alignrightinspector",
                            "value": "right",
                            "iconName": "alignrightinspector"
                        }
                    ],
                    "accordian": "button"
                },
                "borderRadius": {
                    "type": "numberInput",
                    "displayName": "Border radius",
                    "validation": {
                        "validation": {
                            "schema": {
                                "type": "union",
                                "schemas": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "number"
                                    }
                                ]
                            }
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "boxShadow": {
                    "type": "boxShadow",
                    "displayName": "Box shadow",
                    "validation": {
                        "schema": {
                            "type": "union",
                            "schemas": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ]
                        }
                    },
                    "accordian": "button",
                    "conditionallyRender": {
                        "key": "type",
                        "value": "primary"
                    }
                },
                "padding": {
                    "type": "switch",
                    "displayName": "Padding",
                    "validation": {
                        "schema": {
                            "type": "union",
                            "schemas": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ]
                        }
                    },
                    "options": [
                        {
                            "displayName": "Default",
                            "value": "default"
                        },
                        {
                            "displayName": "None",
                            "value": "none"
                        }
                    ],
                    "accordian": "container"
                }
            },
            "validate": true,
            "generalStyles": {
                "boxShadow": {
                    "type": "boxShadow",
                    "displayName": "Box Shadow"
                }
            },
            "definition": {
                "properties": {
                    "text": {
                        "value": ""
                    },
                    "visibility": {
                        "value": "{{true}}"
                    },
                    "disabledState": {
                        "value": "{{!components.toggleswitch1.value}}"
                    },
                    "loadingState": {
                        "value": "{{components.toggleswitch2.value}}"
                    },
                    "tooltip": {
                        "value": ""
                    }
                },
                "styles": {
                    "textColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderColor": {
                        "value": "{{`#${variables.borderColor}`}}",
                        "fxActive": true
                    },
                    "loaderColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderRadius": {
                        "value": "{{50}}"
                    },
                    "backgroundColor": {
                        "value": "{{(listItem[10] ?? \"#ffffff\")}}",
                        "fxActive": true
                    },
                    "iconColor": {
                        "value": "#FFFFFF"
                    },
                    "direction": {
                        "value": "left"
                    },
                    "padding": {
                        "value": "default"
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000090"
                    },
                    "icon": {
                        "value": "IconAlignBoxBottomLeft"
                    },
                    "iconVisibility": {
                        "value": false
                    },
                    "type": {
                        "value": "primary"
                    }
                },
                "generalStyles": {
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000040"
                    }
                },
                "validation": {},
                "others": {
                    "showOnDesktop": {
                        "value": "{{true}}"
                    },
                    "showOnMobile": {
                        "value": "{{false}}"
                    }
                },
                "general": {}
            },
            "name": "button11",
            "displayName": "Button",
            "description": "Trigger actions: queries, alerts, set variables etc.",
            "component": "Button",
            "defaultSize": {
                "width": 4,
                "height": 40
            },
            "exposedVariables": {
                "buttonText": "Button",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false
            },
            "actions": [
                {
                    "handle": "click",
                    "displayName": "Click"
                },
                {
                    "handle": "setText",
                    "displayName": "Set text",
                    "params": [
                        {
                            "handle": "text",
                            "displayName": "Text",
                            "defaultValue": "New Text"
                        }
                    ]
                },
                {
                    "handle": "setVisibility",
                    "displayName": "Set visibility",
                    "params": [
                        {
                            "handle": "disable",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "setDisable",
                    "displayName": "Set disable",
                    "params": [
                        {
                            "handle": "disable",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "setLoading",
                    "displayName": "Set loading",
                    "params": [
                        {
                            "handle": "loading",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "disable",
                    "displayName": "Disable(deprecated)",
                    "params": [
                        {
                            "handle": "disable",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "visibility",
                    "displayName": "Visibility(deprecated)",
                    "params": [
                        {
                            "handle": "visible",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "loading",
                    "displayName": "Loading(deprecated)",
                    "params": [
                        {
                            "handle": "loading",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                }
            ],
            "parent": "e9e243bb-1e30-4427-9983-33848b0d608a"
        },
        componentToRender: {
            "componentType": "Button",

            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
            "key": 0.41741643641899184,
            "obj": {
                "properties": {
                    "text": "text button11",
                    "visibility": true,
                    // "disabledState": false,
                    "disabled": false,
                    // "loadingState": false,
                    "loading": false,
                    "tooltip": ""
                },
                "styles": {
                    "boxShadow": "0px 0px 0px 0px #00000090",
                    "textColor": "#fff",
                    "borderColor": "#ffffff00",
                    "loaderColor": "#fff",
                    "borderRadius": 50,
                    "backgroundColor": "#0000ff",
                    "iconColor": "#FFFFFF",
                    "direction": "left",
                    "padding": "default",
                    "icon": "IconAlignBoxBottomLeft",
                    "iconVisibility": false,
                    "type": "primary"
                }
            },
            "parentId": "e9e243bb-1e30-4427-9983-33848b0d608a",
            "componentName": "button11"
        },

        'button11': {
            "properties": {
                "text": {
                    "type": "code",
                    "displayName": "Label",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    }
                },
                "loadingState": {
                    "type": "toggle",
                    "displayName": "Loading state",
                    "validation": {
                        "schema": {
                            "type": "boolean"
                        }
                    },
                    "section": "additionalActions"
                },
                "visibility": {
                    "type": "toggle",
                    "displayName": "Visibility",
                    "validation": {
                        "schema": {
                            "type": "boolean"
                        }
                    },
                    "section": "additionalActions"
                },
                "disabledState": {
                    "type": "toggle",
                    "displayName": "Disable",
                    "validation": {
                        "schema": {
                            "type": "boolean"
                        }
                    },
                    "section": "additionalActions"
                },
                "tooltip": {
                    "type": "code",
                    "displayName": "Tooltip",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "section": "additionalActions",
                    "placeholder": "Enter tooltip text"
                }
            },
            "general": {
                "tooltip": {
                    "type": "code",
                    "displayName": "Tooltip",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "others": {
                "showOnDesktop": {
                    "type": "toggle",
                    "displayName": "Show on desktop"
                },
                "showOnMobile": {
                    "type": "toggle",
                    "displayName": "Show on mobile"
                }
            },
            "events": {
                "onClick": {
                    "displayName": "On click"
                },
                "onHover": {
                    "displayName": "On hover"
                }
            },
            "styles": {
                "type": {
                    "type": "switch",
                    "displayName": "Type",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "options": [
                        {
                            "displayName": "Solid",
                            "value": "primary"
                        },
                        {
                            "displayName": "Outline",
                            "value": "outline"
                        }
                    ],
                    "accordian": "button"
                },
                "backgroundColor": {
                    "type": "color",
                    "displayName": "Background",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "conditionallyRender": {
                        "key": "type",
                        "value": "primary"
                    },
                    "accordian": "button"
                },
                "textColor": {
                    "type": "color",
                    "displayName": "Text color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "borderColor": {
                    "type": "color",
                    "displayName": "Border color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "loaderColor": {
                    "type": "color",
                    "displayName": "Loader color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "icon": {
                    "type": "icon",
                    "displayName": "Icon",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "accordian": "button",
                    "visibility": false
                },
                "iconColor": {
                    "type": "color",
                    "displayName": "Icon color",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "accordian": "button",
                    "visibility": false
                },
                "direction": {
                    "type": "switch",
                    "displayName": "",
                    "validation": {
                        "schema": {
                            "type": "string"
                        }
                    },
                    "showLabel": false,
                    "isIcon": true,
                    "options": [
                        {
                            "displayName": "alignleftinspector",
                            "value": "left",
                            "iconName": "alignleftinspector"
                        },
                        {
                            "displayName": "alignrightinspector",
                            "value": "right",
                            "iconName": "alignrightinspector"
                        }
                    ],
                    "accordian": "button"
                },
                "borderRadius": {
                    "type": "numberInput",
                    "displayName": "Border radius",
                    "validation": {
                        "validation": {
                            "schema": {
                                "type": "union",
                                "schemas": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "number"
                                    }
                                ]
                            }
                        },
                        "defaultValue": false
                    },
                    "accordian": "button"
                },
                "boxShadow": {
                    "type": "boxShadow",
                    "displayName": "Box shadow",
                    "validation": {
                        "schema": {
                            "type": "union",
                            "schemas": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ]
                        }
                    },
                    "accordian": "button",
                    "conditionallyRender": {
                        "key": "type",
                        "value": "primary"
                    }
                },
                "padding": {
                    "type": "switch",
                    "displayName": "Padding",
                    "validation": {
                        "schema": {
                            "type": "union",
                            "schemas": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ]
                        }
                    },
                    "options": [
                        {
                            "displayName": "Default",
                            "value": "default"
                        },
                        {
                            "displayName": "None",
                            "value": "none"
                        }
                    ],
                    "accordian": "container"
                }
            },
            "validate": true,
            "generalStyles": {
                "boxShadow": {
                    "type": "boxShadow",
                    "displayName": "Box Shadow"
                }
            },
            "definition": {
                "properties": {
                    "text": {
                        "value": ""
                    },
                    "visibility": {
                        "value": "{{true}}"
                    },
                    "disabledState": {
                        "value": "{{!components.toggleswitch1.value}}"
                    },
                    "loadingState": {
                        "value": "{{components.toggleswitch2.value}}"
                    },
                    "tooltip": {
                        "value": ""
                    }
                },
                "styles": {
                    "textColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderColor": {
                        "value": "{{`#${variables.borderColor}`}}",
                        "fxActive": true
                    },
                    "loaderColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderRadius": {
                        "value": "{{50}}"
                    },
                    "backgroundColor": {
                        "value": "{{(listItem[10] ?? \"#ffffff\")}}",
                        "fxActive": true
                    },
                    "iconColor": {
                        "value": "#FFFFFF"
                    },
                    "direction": {
                        "value": "left"
                    },
                    "padding": {
                        "value": "default"
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000090"
                    },
                    "icon": {
                        "value": "IconAlignBoxBottomLeft"
                    },
                    "iconVisibility": {
                        "value": false
                    },
                    "type": {
                        "value": "primary"
                    }
                },
                "generalStyles": {
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000040"
                    }
                },
                "validation": {},
                "others": {
                    "showOnDesktop": {
                        "value": "{{true}}"
                    },
                    "showOnMobile": {
                        "value": "{{false}}"
                    }
                },
                "general": {}
            },
            "name": "button11",
            "displayName": "Button",
            "description": "Trigger actions: queries, alerts, set variables etc.",
            "component": "Button",
            "defaultSize": {
                "width": 4,
                "height": 40
            },
            "exposedVariables": {
                "buttonText": "Button",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false
            },
            "actions": [
                {
                    "handle": "click",
                    "displayName": "Click"
                },
                {
                    "handle": "setText",
                    "displayName": "Set text",
                    "params": [
                        {
                            "handle": "text",
                            "displayName": "Text",
                            "defaultValue": "New Text"
                        }
                    ]
                },
                {
                    "handle": "setVisibility",
                    "displayName": "Set visibility",
                    "params": [
                        {
                            "handle": "disable",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "setDisable",
                    "displayName": "Set disable",
                    "params": [
                        {
                            "handle": "disable",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "setLoading",
                    "displayName": "Set loading",
                    "params": [
                        {
                            "handle": "loading",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "disable",
                    "displayName": "Disable(deprecated)",
                    "params": [
                        {
                            "handle": "disable",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "visibility",
                    "displayName": "Visibility(deprecated)",
                    "params": [
                        {
                            "handle": "visible",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                },
                {
                    "handle": "loading",
                    "displayName": "Loading(deprecated)",
                    "params": [
                        {
                            "handle": "loading",
                            "displayName": "Value",
                            "defaultValue": "{{false}}",
                            "type": "toggle"
                        }
                    ]
                }
            ],
            "parent": "e9e243bb-1e30-4427-9983-33848b0d608a"
        },

        'listview1':  {
            component: {
                "properties": {
                    "data": {
                        "type": "code",
                        "displayName": "List data",
                        "validation": {
                            "schema": {
                                "type": "union",
                                "schemas": [
                                    {
                                        "type": "array",
                                        "element": {
                                            "type": "object"
                                        }
                                    },
                                    {
                                        "type": "array",
                                        "element": {
                                            "type": "string"
                                        }
                                    }
                                ]
                            },
                            "defaultValue": "[{text: 'Sample text 1'}]"
                        }
                    },
                    "mode": {
                        "type": "select",
                        "displayName": "Mode",
                        "options": [
                            {
                                "name": "list",
                                "value": "list"
                            },
                            {
                                "name": "grid",
                                "value": "grid"
                            }
                        ],
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "list"
                        }
                    },
                    "columns": {
                        "type": "number",
                        "displayName": "Columns",
                        "validation": {
                            "schema": {
                                "type": "number"
                            },
                            "defaultValue": 3
                        },
                        "conditionallyRender": {
                            "key": "mode",
                            "value": "grid"
                        }
                    },
                    "rowHeight": {
                        "type": "code",
                        "displayName": "Row height",
                        "validation": {
                            "schema": {
                                "type": "number"
                            },
                            "defaultValue": 100
                        }
                    },
                    "showBorder": {
                        "type": "code",
                        "displayName": "Show bottom border",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "conditionallyRender": {
                            "key": "mode",
                            "value": "list"
                        }
                    },
                    "enablePagination": {
                        "type": "toggle",
                        "displayName": "Enable pagination",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        }
                    },
                    "rowsPerPage": {
                        "type": "code",
                        "displayName": "Rows per page",
                        "validation": {
                            "schema": {
                                "type": "number"
                            },
                            "defaultValue": 10
                        }
                    }
                },
                "general": {
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    }
                },
                "others": {
                    "showOnDesktop": {
                        "type": "toggle",
                        "displayName": "Show on desktop"
                    },
                    "showOnMobile": {
                        "type": "toggle",
                        "displayName": "Show on mobile"
                    }
                },
                "events": {
                    "onRowClicked": {
                        "displayName": "Row clicked (Deprecated)"
                    },
                    "onRecordClicked": {
                        "displayName": "Record clicked"
                    }
                },
                "styles": {
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        }
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#dadcde"
                        }
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        }
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        }
                    },
                    "borderRadius": {
                        "type": "number",
                        "displayName": "Border radius",
                        "validation": {
                            "schema": {
                                "type": "number"
                            },
                            "defaultValue": 4
                        }
                    }
                },
                "validate": true,
                "generalStyles": {
                    "boxShadow": {
                        "type": "boxShadow",
                        "displayName": "Box Shadow"
                    }
                },
                "definition": {
                    "properties": {
                        "data": {
                            "value": "{{queries.generateColorCodes.data}}"
                        },
                        "mode": {
                            "value": "list"
                        },
                        "columns": {
                            "value": "{{3}}"
                        },
                        "rowHeight": {
                            "value": "100"
                        },
                        "visible": {
                            "value": "{{true}}"
                        },
                        "showBorder": {
                            "value": "{{false}}"
                        },
                        "rowsPerPage": {
                            "value": "{{10}}"
                        },
                        "enablePagination": {
                            "value": "{{false}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "{{`#${variables.backgroundColor}`}}",
                            "fxActive": true
                        },
                        "borderColor": {
                            "value": "#ffffff00"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "borderRadius": {
                            "value": "{{10}}"
                        }
                    },
                    "generalStyles": {
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000040"
                        }
                    },
                    "validation": {},
                    "others": {
                        "showOnDesktop": {
                            "value": "{{true}}"
                        },
                        "showOnMobile": {
                            "value": "{{false}}"
                        }
                    },
                    "general": {}
                },
                "name": "listview1",
                "displayName": "List View",
                "description": "List multiple items",
                "defaultSize": {
                    "width": 30,
                    "height": 300
                },
                "defaultChildren": [
                    {
                        "componentName": "Image",
                        "layout": {
                            "top": 15,
                            "left": 3,
                            "height": 100
                        },
                        "properties": [
                            "source"
                        ],
                        "accessorKey": "imageURL"
                    },
                    {
                        "componentName": "Text",
                        "layout": {
                            "top": 50,
                            "left": 11,
                            "height": 30
                        },
                        "properties": [
                            "text"
                        ],
                        "accessorKey": "text"
                    },
                    {
                        "componentName": "Button",
                        "layout": {
                            "top": 50,
                            "left": 26,
                            "height": 30
                        },
                        "incrementWidth": 2,
                        "properties": [
                            "text"
                        ],
                        "accessorKey": "buttonText"
                    }
                ],
                "component": "Listview",
                "exposedVariables": {
                    "data": [
                        {}
                    ]
                },
                "parent": null
            }

        }
    },

}


export default {
    builderDemo: {
        plugins: [
            {
                name: 'Button',
                displayName: 'Button',
                description: 'Trigger actions: queries, alerts, set variables etc.',
                component: 'Button',
                defaultSize: {
                    width: 4,
                    height: 40,
                },
                others: {
                    showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                    showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                },
                properties: {
                    text: {
                        type: 'code',
                        displayName: 'Label',
                        validation: {
                            schema: { type: 'string' },
                        },
                    },
                    loadingState: {
                        type: 'toggle',
                        displayName: 'Loading state',
                        validation: { schema: { type: 'boolean' } },
                        section: 'additionalActions',
                    },
                    visibility: {
                        type: 'toggle',
                        displayName: 'Visibility',
                        validation: { schema: { type: 'boolean' } },
                        section: 'additionalActions',
                    },
                    disabledState: {
                        type: 'toggle',
                        displayName: 'Disable',
                        validation: { schema: { type: 'boolean' } },
                        section: 'additionalActions',
                    },
                    tooltip: {
                        type: 'code',
                        displayName: 'Tooltip',
                        validation: { schema: { type: 'string' } },
                        section: 'additionalActions',
                        placeholder: 'Enter tooltip text',
                    },
                },
                events: {
                    onClick: { displayName: 'On click' },
                    onHover: { displayName: 'On hover' },
                },
                styles: {
                    type: {
                        type: 'switch',
                        displayName: 'Type',
                        validation: { schema: { type: 'string' } },
                        options: [
                            { displayName: 'Solid', value: 'primary' },
                            { displayName: 'Outline', value: 'outline' },
                        ],
                        accordian: 'button',
                    },
                    backgroundColor: {
                        type: 'color',
                        displayName: 'Background',
                        validation: {
                            schema: { type: 'string' },
                            defaultValue: false,
                        },
                        conditionallyRender: {
                            key: 'type',
                            value: 'primary',
                        },
                        accordian: 'button',
                    },
                    textColor: {
                        type: 'color',
                        displayName: 'Text color',
                        validation: {
                            schema: { type: 'string' },
                            defaultValue: false,
                        },
                        accordian: 'button',
                    },
                    borderColor: {
                        type: 'color',
                        displayName: 'Border color',
                        validation: {
                            schema: { type: 'string' },
                            defaultValue: false,
                        },
                        accordian: 'button',
                    },
                    loaderColor: {
                        type: 'color',
                        displayName: 'Loader color',
                        validation: {
                            schema: { type: 'string' },
                            defaultValue: false,
                        },
                        accordian: 'button',
                    },

                    icon: {
                        type: 'icon',
                        displayName: 'Icon',
                        validation: { schema: { type: 'string' } },
                        accordian: 'button',

                        visibility: false,
                    },
                    iconColor: {
                        type: 'color',
                        displayName: 'Icon color',
                        validation: { schema: { type: 'string' } },
                        accordian: 'button',
                        visibility: false,
                    },

                    direction: {
                        type: 'switch',
                        displayName: '',
                        validation: { schema: { type: 'string' } },
                        showLabel: false,
                        isIcon: true,
                        options: [
                            { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                            { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                        ],
                        accordian: 'button',
                    },
                    borderRadius: {
                        type: 'numberInput',
                        displayName: 'Border radius',
                        validation: {
                            validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                            defaultValue: false,
                        },
                        accordian: 'button',
                    },
                    boxShadow: {
                        type: 'boxShadow',
                        displayName: 'Box shadow',
                        validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                        accordian: 'button',
                        conditionallyRender: {
                            key: 'type',
                            value: 'primary',
                        },
                    },

                    padding: {
                        type: 'switch',
                        displayName: 'Padding',
                        validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                        options: [
                            { displayName: 'Default', value: 'default' },
                            { displayName: 'None', value: 'none' },
                        ],
                        accordian: 'container',
                    },
                },
                exposedVariables: {
                    buttonText: 'Button',
                    isVisible: true,
                    isDisabled: false,
                    isLoading: false,
                },
                actions: [
                    {
                        handle: 'click',
                        displayName: 'Click',
                    },
                    {
                        handle: 'setText',
                        displayName: 'Set text',
                        params: [{ handle: 'text', displayName: 'Text', defaultValue: 'New Text' }],
                    },
                    {
                        handle: 'setVisibility',
                        displayName: 'Set visibility',
                        params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                    },
                    {
                        handle: 'setDisable',
                        displayName: 'Set disable',
                        params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                    },
                    {
                        handle: 'setLoading',
                        displayName: 'Set loading',
                        params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                    },
                    {
                        handle: 'disable',
                        displayName: 'Disable(deprecated)',
                        params: [{ handle: 'disable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                    },
                    {
                        handle: 'visibility',
                        displayName: 'Visibility(deprecated)',
                        params: [{ handle: 'visible', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                    },
                    {
                        handle: 'loading',
                        displayName: 'Loading(deprecated)',
                        params: [{ handle: 'loading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                    },
                ],
                definition: {
                    others: {
                        showOnDesktop: { value: '{{true}}' },
                        showOnMobile: { value: '{{false}}' },
                    },
                    properties: {
                        text: { value: `Button` },
                        visibility: { value: '{{true}}' },
                        disabledState: { value: '{{false}}' },
                        loadingState: { value: '{{false}}' },
                        tooltip: { value: '' },
                    },
                    events: [],
                    styles: {
                        textColor: { value: '#FFFFFF' },
                        borderColor: { value: '#4368E3' },
                        loaderColor: { value: '#FFFFFF' },
                        borderRadius: { value: '{{6}}' },
                        backgroundColor: { value: '#4368E3' },
                        iconColor: { value: '#FFFFFF' },
                        direction: { value: 'left' },
                        padding: { value: 'default' },
                        boxShadow: { value: '0px 0px 0px 0px #00000090' },
                        icon: { value: 'IconAlignBoxBottomLeft' },
                        iconVisibility: { value: false },
                        type: { value: 'primary' },
                    },
                },
            },
        ],
        componentToRender: {
            props: {
                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                "key": 0.41741643641899184,
                "obj": {
                    "properties": {
                        "text": "",
                        "visibility": true,
                        "disabledState": false,
                        "loadingState": false,
                        "tooltip": ""
                    },
                    "styles": {
                        "boxShadow": "0px 0px 0px 0px #00000090",
                        "textColor": "#fff",
                        "borderColor": "#ffffff00",
                        "loaderColor": "#fff",
                        "borderRadius": 50,
                        "backgroundColor": "#0000ff",
                        "iconColor": "#FFFFFF",
                        "direction": "left",
                        "padding": "default",
                        "icon": "IconAlignBoxBottomLeft",
                        "iconVisibility": false,
                        "type": "primary"
                    }
                },
                "parentId": "e9e243bb-1e30-4427-9983-33848b0d608a",
                "componentName": "button11"
            }
        }


    },


    builderDefaults: {
        homePage: {
            appIcon: {
                "iconList": [
                    "apps",
                    "archive",
                    "floppydisk",
                    "layers",
                    "folderupload",
                    "grid",
                    "home",
                    "sentfast",
                    "server",
                    "globe",
                    "share",
                    "shield",
                    "sun",
                    "table",
                    "menuhome",
                    "draghandle"

                ],
                "defaultIcon": "apps"
            }
        },
        editor: {
            inspector: {
                definitions: {
                    typeMapping: {
                        text: 'Text',
                        string: 'Text',
                        color: 'Color',
                        json: 'Json',
                        code: 'Code',
                        toggle: 'Toggle',
                        select: 'Select',
                        alignButtons: 'AlignButtons',
                    },
                    headerOptions: [
                        {
                            label: 'Rename',
                            value: 'rename',
                        },
                        {
                            label: 'Duplicate',
                            value: 'duplicate',
                        },
                        {
                            label: 'Delete',
                            value: 'delete',
                        },
                    ]
                }
            },
            widgetManager: {
                widgets: [
                    {
                        name: 'BoundedBox',
                        displayName: 'Bounded Box',
                        description: 'An infinitely customizable image annotation widget',
                        component: 'BoundedBox',
                        defaultSize: {
                            width: 30,
                            height: 420,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            imageUrl: {
                                type: 'code',
                                displayName: 'Image URL',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: `https://exaple.com/photos/three-cars.jpg`,
                                },
                            },

                            defaultValue: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'array', element: { type: 'object' } }] },
                                    defaultValue: "{{[{type: 'RECTANGLE',width: 40,height:24, x:41,y:62,text:'Car'}]}}",
                                },
                            },
                            selector: {
                                type: 'select',
                                displayName: 'Selector',
                                options: [
                                    { name: 'Rectangle', value: 'RECTANGLE' },
                                    { name: 'Point', value: 'POINT' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'RECTANGLE',
                                },
                            },
                            labels: {
                                type: 'code',
                                displayName: 'List of labels',
                                validation: {
                                    schema: { type: 'array' },
                                    element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: `{{['Car', 'Tree']}}`,
                                },
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                        },
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            annotations: [
                                {
                                    type: 'RECTANGLE',
                                    x: 41,
                                    y: 62,
                                    width: 40,
                                    height: 24,
                                    text: 'Car',
                                    id: 'ce103db2-b2a6-46f5-a4f0-5f4eaa6f3663',
                                },
                                {
                                    type: 'RECTANGLE',
                                    x: 41,
                                    y: 12,
                                    width: 40,
                                    height: 24,
                                    text: 'Tree',
                                    id: 'b1a7315e-2b15-4bc8-a1c6-a042dab44f27',
                                },
                            ],
                        },
                        actions: [],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                defaultValue: {
                                    value:
                                        "{{[\t{type: 'RECTANGLE',width: 40,height:24, x:41,y:62,text:'Car'},{type: 'RECTANGLE',width: 40,height:24, x:41,y:12,text:'Tree'}\t]}}",
                                },
                                imageUrl: {
                                    value: `https://burst.shopifycdn.com/photos/three-cars-are-parked-on-stone-paved-street.jpg?width=746&format=pjpg&exif=1&iptc=1`,
                                },
                                selector: { value: `RECTANGLE` },
                                labels: { value: `{{['Tree', 'Car', 'Stree light']}}` },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },

                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'Button',
                        displayName: 'Button',
                        description: 'Trigger actions: queries, alerts, set variables etc.',
                        component: 'Button',
                        defaultSize: {
                            width: 4,
                            height: 40,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            text: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' } },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onClick: { displayName: 'On click' },
                            onHover: { displayName: 'On hover' },
                        },
                        styles: {
                            type: {
                                type: 'switch',
                                displayName: 'Type',
                                validation: { schema: { type: 'string' } },
                                options: [
                                    { displayName: 'Solid', value: 'primary' },
                                    { displayName: 'Outline', value: 'outline' },
                                ],
                                accordian: 'button',
                            },
                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                                conditionallyRender: {
                                    key: 'type',
                                    value: 'primary',
                                },
                                accordian: 'button',
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                                accordian: 'button',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                                accordian: 'button',
                            },
                            loaderColor: {
                                type: 'color',
                                displayName: 'Loader color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                                accordian: 'button',
                            },

                            icon: {
                                type: 'icon',
                                displayName: 'Icon',
                                validation: { schema: { type: 'string' } },
                                accordian: 'button',

                                visibility: false,
                            },
                            iconColor: {
                                type: 'color',
                                displayName: 'Icon color',
                                validation: { schema: { type: 'string' } },
                                accordian: 'button',
                                visibility: false,
                            },

                            direction: {
                                type: 'switch',
                                displayName: '',
                                validation: { schema: { type: 'string' } },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'button',
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: {
                                    validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                    defaultValue: false,
                                },
                                accordian: 'button',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'button',
                                conditionallyRender: {
                                    key: 'type',
                                    value: 'primary',
                                },
                            },

                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'container',
                            },
                        },
                        exposedVariables: {
                            buttonText: 'Button',
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'click',
                                displayName: 'Click',
                            },
                            {
                                handle: 'setText',
                                displayName: 'Set text',
                                params: [{ handle: 'text', displayName: 'Text', defaultValue: 'New Text' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'disable',
                                displayName: 'Disable(deprecated)',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'visibility',
                                displayName: 'Visibility(deprecated)',
                                params: [{ handle: 'visible', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'loading',
                                displayName: 'Loading(deprecated)',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                text: { value: `Button` },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                tooltip: { value: '' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '#FFFFFF' },
                                borderColor: { value: '#4368E3' },
                                loaderColor: { value: '#FFFFFF' },
                                borderRadius: { value: '{{6}}' },
                                backgroundColor: { value: '#4368E3' },
                                iconColor: { value: '#FFFFFF' },
                                direction: { value: 'left' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                                icon: { value: 'IconAlignBoxBottomLeft' },
                                iconVisibility: { value: false },
                                type: { value: 'primary' },
                            },
                        },
                    },
                    {
                        name: 'ButtonGroup',
                        displayName: 'Button Group',
                        description: 'Group of buttons',
                        component: 'ButtonGroup',
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Button group',
                                },
                            },
                            values: {
                                type: 'code',
                                displayName: 'values',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } }],
                                    },
                                    defaultValue: '[]',
                                },
                            },
                            labels: {
                                type: 'code',
                                displayName: 'Labels',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } }],
                                    },
                                    defaultValue: '[]',
                                },
                            },
                            defaultSelected: {
                                type: 'code',
                                displayName: 'Default selected',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } }],
                                    },
                                    defaultValue: '[1]',
                                },
                            },
                            multiSelection: {
                                type: 'toggle',
                                displayName: 'Enable multiple selection',

                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        defaultSize: {
                            width: 12,
                            height: 80,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {
                            onClick: { displayName: 'On click' },
                        },
                        styles: {
                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            borderRadius: {
                                type: 'number',
                                displayName: 'Border radius',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: false,
                                },
                            },
                            selectedTextColor: {
                                type: 'color',
                                displayName: 'Selected text colour',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff',
                                },
                            },
                            selectedBackgroundColor: {
                                type: 'color',
                                displayName: 'Selected background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#007bff',
                                },
                            },
                        },
                        exposedVariables: {
                            selected: [1],
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: `Button group` },
                                defaultSelected: { value: '{{[1]}}' },
                                values: { value: '{{[1,2,3]}}' },
                                labels: { value: '{{[]}}' },
                                multiSelection: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                backgroundColor: { value: '' },
                                textColor: { value: '' },
                                visibility: { value: '{{true}}' },
                                borderRadius: { value: '{{4}}' },
                                disabledState: { value: '{{false}}' },
                                selectedTextColor: { value: '' },
                                selectedBackgroundColor: { value: '' },
                            },
                        },
                    },
                    {
                        name: 'Chart',
                        displayName: 'Chart',
                        description: 'Visualize data',
                        component: 'Chart',
                        defaultSize: {
                            width: 20,
                            height: 400,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            title: {
                                type: 'code',
                                displayName: 'Title',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'This title can be changed',
                                },
                            },
                            data: {
                                type: 'json',
                                displayName: 'Data',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'array' }] },
                                    defaultValue: '',
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            markerColor: {
                                type: 'color',
                                displayName: 'Marker color',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: '#CDE1F8',
                                },
                            },
                            showAxes: {
                                type: 'toggle',
                                displayName: 'Show axes',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            showGridLines: {
                                type: 'toggle',
                                displayName: 'Show grid lines',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            type: {
                                type: 'select',
                                displayName: 'Chart type',
                                options: [
                                    { name: 'Line', value: 'line' },
                                    { name: 'Bar', value: 'bar' },
                                    { name: 'Pie', value: 'pie' },
                                ],
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'boolean' }, { type: 'number' }],
                                    },
                                    defaultValue: 'line',
                                },
                            },
                            jsonDescription: {
                                type: 'json',
                                displayName: 'Json Description',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'object' }],
                                    },
                                    defaultValue: '{ "data": [ { "x": [ "Jan", "Feb", "Mar" ], "y": [ 100, 80, 40 ], "type": "bar" } ] }',
                                },
                            },
                            plotFromJson: {
                                type: 'toggle',
                                displayName: 'Use Plotly JSON schema',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            barmode: {
                                type: 'select',
                                displayName: 'Bar mode',
                                options: [
                                    { name: 'Stack', value: 'stack' },
                                    { name: 'Group', value: 'group' },
                                    { name: 'Overlay', value: 'overlay' },
                                    { name: 'Relative', value: 'relative' },
                                ],
                                validation: {
                                    schema: {
                                        schemas: { type: 'string' },
                                    },
                                    defaultValue: 'group',
                                },
                            },
                        },
                        actions: [
                            {
                                handle: 'clearClickedPoint',
                                displayName: 'Clear clicked point',
                            },
                        ],
                        events: {
                            onClick: { displayName: 'On data point click' },
                            onDoubleClick: { displayName: 'On double click' },
                        },
                        styles: {
                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background color',
                                validation: { schema: { type: 'string' }, defaultValue: '#fff' },
                            },
                            padding: {
                                type: 'code',
                                displayName: 'Padding',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'number' }, { type: 'string' }],
                                    },
                                    defaultValue: 50,
                                },
                            },
                            borderRadius: {
                                type: 'number',
                                displayName: 'Border radius',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 4,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            show: null,
                            chartTitle: null,
                            xAxisTitle: null,
                            yAxisTitle: null,
                            clickedDataPoint: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                title: { value: 'This title can be changed' },
                                markerColor: { value: '#CDE1F8' },
                                showAxes: { value: '{{true}}' },
                                showGridLines: { value: '{{true}}' },
                                plotFromJson: { value: '{{false}}' },
                                loadingState: { value: `{{false}}` },
                                barmode: { value: `group` },
                                jsonDescription: {
                                    value: `{
              "data": [
                  {
                      "x": [
                          "Jan",
                          "Feb",
                          "Mar"
                      ],
                      "y": [
                          100,
                          80,
                          40
                      ],
                      "type": "bar"
                  }
              ]
          }`,
                                },
                                type: { value: `line` },
                                data: {
                                    value: `[
    { "x": "Jan", "y": 100},
    { "x": "Feb", "y": 80},
    { "x": "Mar", "y": 40}
  ]`,
                                },
                            },
                            events: [],
                            styles: {
                                backgroundColor: { value: '#fff' },
                                padding: { value: '50' },
                                borderRadius: { value: '{{4}}' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'Calendar',
                        displayName: 'Calendar',
                        description: 'Display calendar events',
                        component: 'Calendar',
                        defaultSize: {
                            width: 30,
                            height: 600,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            dateFormat: { type: 'code', displayName: 'Date format' },
                            defaultDate: { type: 'code', displayName: 'Default date' },
                            events: { type: 'code', displayName: 'Events' },
                            resources: { type: 'code', displayName: 'Resources' },
                            defaultView: { type: 'code', displayName: 'Default view' },
                            startTime: {
                                type: 'code',
                                displayName: 'Start time on week and day view',
                            },
                            endTime: { type: 'code', displayName: 'End time on week and day view' },
                            displayToolbar: { type: 'toggle', displayName: 'Show toolbar' },
                            displayViewSwitcher: {
                                type: 'toggle',
                                displayName: 'Show view switcher',
                            },
                            highlightToday: { type: 'toggle', displayName: 'Highlight today' },
                            showPopOverOnEventClick: {
                                type: 'toggle',
                                displayName: 'Show popover when event is clicked',
                            },
                        },
                        events: {
                            onCalendarEventSelect: { displayName: 'On Event Select' },
                            onCalendarSlotSelect: { displayName: 'On Slot Select' },
                            onCalendarNavigate: { displayName: 'On Date Navigate' },
                            onCalendarViewChange: { displayName: 'On View Change' },
                        },
                        styles: {
                            visibility: { type: 'toggle', displayName: 'Visibility' },
                            cellSizeInViewsClassifiedByResource: {
                                type: 'select',
                                displayName: 'Cell size in views classified by resource',
                                options: [
                                    { name: 'Compact', value: 'compact' },
                                    { name: 'Spacious', value: 'spacious' },
                                ],
                            },
                            weekDateFormat: {
                                type: 'code',
                                displayName: 'Header date format on week view',
                            },
                        },
                        exposedVariables: {
                            selectedEvent: {},
                            selectedSlots: {},
                            currentView: 'month',
                            currentDate: undefined,
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                dateFormat: {
                                    value: 'MM-DD-YYYY HH:mm:ss A Z',
                                },
                                defaultDate: {
                                    value: '{{moment().format("MM-DD-YYYY HH:mm:ss A Z")}}',
                                },
                                events: {
                                    value:
                                        "{{[\n\t\t{\n\t\t\t title: 'Sample event',\n\t\t\t start: `${moment().startOf('day').format('MM-DD-YYYY HH:mm:ss A Z')}`,\n\t\t\t end: `${moment().endOf('day').format('MM-DD-YYYY HH:mm:ss A Z')}`,\n\t\t\t allDay: false,\n\t\t\t color: '#4D72DA'\n\t\t}\n]}}",
                                },
                                resources: {
                                    value: '{{[]}}',
                                },
                                defaultView: {
                                    value: "{{'month'}}",
                                },
                                startTime: {
                                    value: "{{moment().startOf('day').format('MM-DD-YYYY HH:mm:ss A Z')}}",
                                },
                                endTime: {
                                    value: "{{moment().endOf('day').format('MM-DD-YYYY HH:mm:ss A Z')}}",
                                },
                                displayToolbar: {
                                    value: true,
                                },
                                displayViewSwitcher: {
                                    value: true,
                                },
                                highlightToday: {
                                    value: true,
                                },
                                showPopOverOnEventClick: {
                                    value: false,
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                cellSizeInViewsClassifiedByResource: { value: 'spacious' },
                                weekDateFormat: { value: 'DD MMM' },
                            },
                        },
                    },
                    {
                        name: 'Checkbox',
                        displayName: 'Checkbox',
                        description: 'Single checkbox toggle',
                        component: 'Checkbox',
                        defaultSize: {
                            width: 6,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            defaultValue: {
                                type: 'switch',
                                displayName: 'Default state',
                                validation: { schema: { type: 'boolean' } },
                                options: [
                                    { displayName: 'On', value: '{{true}}' },
                                    { displayName: 'Off', value: '{{false}}' },
                                ],
                                accordian: 'label',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' } },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                            onCheck: { displayName: 'On check (Deprecated)' },
                            onUnCheck: { displayName: 'On uncheck (Deprecated)' },
                        },
                        styles: {
                            textColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'label',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            checkboxColor: {
                                type: 'color',
                                displayName: 'Checked color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            uncheckedColor: {
                                type: 'color',
                                displayName: 'Unchecked color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            handleColor: {
                                type: 'color',
                                displayName: 'Handle color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'switch',
                            },

                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' } },
                                options: [
                                    { displayName: 'Left', value: 'left' },
                                    { displayName: 'Right', value: 'right' },
                                ],
                                accordian: 'label',
                            },
                        },
                        exposedVariables: {
                            value: false,
                            label: 'Label',
                            isMandatory: false,
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'toggle',
                                displayName: 'toggle',
                            },
                            {
                                handle: 'setValue',
                                displayName: 'Set value',
                                params: [{ handle: 'value', displayName: 'value' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setChecked',
                                displayName: 'Set checked (Deprecated)',
                                params: [{ handle: 'status', displayName: 'status' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Label' },
                                defaultValue: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                tooltip: { value: '' },
                            },
                            events: [],
                            styles: {
                                disabledState: { value: '{{false}}' },
                                textColor: { value: '#1B1F24' },
                                checkboxColor: { value: '#4368E3' },
                                uncheckedColor: { value: '#E4E7EB' },
                                borderColor: { value: '#CCD1D5' },
                                handleColor: { value: '#FFFFFF' },
                                alignment: { value: 'right' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                            },
                            validation: {
                                mandatory: { value: '{{false}}' },
                                customRule: { value: null },
                            },
                        },
                    },
                    {
                        name: 'CircularProgressBar',
                        displayName: 'Circular Progressbar',
                        description: 'Show circular progress',
                        component: 'CircularProgressBar',
                        defaultSize: {
                            width: 7,
                            height: 50,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            text: {
                                type: 'code',
                                displayName: 'Text',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'text',
                                },
                            },
                            progress: {
                                type: 'code',
                                displayName: 'Progress',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 50,
                                },
                            },
                        },
                        events: {},
                        styles: {
                            color: {
                                type: 'color',
                                displayName: 'Color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#375FCF',
                                },
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text Color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff',
                                },
                            },
                            textSize: {
                                type: 'code',
                                displayName: 'Text size',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 16,
                                },
                            },
                            strokeWidth: {
                                type: 'code',
                                displayName: 'Stroke width',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 8,
                                },
                            },
                            counterClockwise: {
                                type: 'code',
                                displayName: 'Counter clockwise',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            circleRatio: {
                                type: 'code',
                                displayName: 'Circle ratio',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 1,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {},
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                text: {
                                    value: '',
                                },
                                progress: {
                                    value: '{{50}}',
                                },
                            },
                            events: [],
                            styles: {
                                color: { value: '' },
                                textColor: { value: '' },
                                textSize: { value: '{{16}}' },
                                strokeWidth: { value: '{{8}}' },
                                counterClockwise: { value: '{{false}}' },
                                circleRatio: { value: '{{1}}' },
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'CodeEditor',
                        displayName: 'Code Editor',
                        description: 'Edit source code',
                        component: 'CodeEditor',
                        defaultSize: {
                            width: 15,
                            height: 120,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            enableLineNumber: {
                                type: 'code',
                                displayName: 'Show line number',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            mode: {
                                type: 'code',
                                displayName: 'Mode',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'javascript',
                                },
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'placeholder',
                                },
                            },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 4,
                                },
                            },
                        },
                        exposedVariables: {
                            value: '',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                enableLineNumber: { value: '{{true}}' },
                                mode: { value: 'javascript' },
                                placeholder: { value: '' },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                borderRadius: { value: '{{4}}' },
                            },
                        },
                    },
                    {
                        name: 'ColorPicker',
                        displayName: 'Color Picker',
                        description: 'Choose colors from a palette',
                        component: 'ColorPicker',
                        properties: {
                            defaultColor: { type: 'color', displayName: 'Default color' },
                        },
                        defaultSize: {
                            width: 9,
                            height: 40,
                        },
                        actions: [
                            {
                                displayName: 'Set Color',
                                handle: 'setColor',
                                params: [{ handle: 'color', displayName: 'color', defaultValue: '#ffffff', type: 'color' }],
                            },
                        ],
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                        },
                        styles: {
                            visibility: { type: 'toggle', displayName: 'Visibility' },
                        },
                        exposedVariables: {
                            selectedColorHex: '#000000',
                            selectedColorRGB: 'rgb(0,0,0)',
                            selectedColorRGBA: 'rgba(0, 0, 0, 1)',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                defaultColor: {
                                    value: '#000000',
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Container',
                        displayName: 'Container',
                        description: 'Group components',
                        defaultSize: {
                            width: 5,
                            height: 200,
                        },
                        component: 'Container',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                section: 'additionalActions',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                section: 'additionalActions',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                section: 'additionalActions',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            showHeader: {
                                type: 'toggle',
                                displayName: 'Show header',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        defaultChildren: [
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 20,
                                    left: 1,
                                    height: 40,
                                },
                                displayName: 'ContainerText',
                                properties: ['text'],
                                accessorKey: 'text',
                                styles: ['fontWeight', 'textSize', 'textColor'],
                                defaultValue: {
                                    text: 'Container title',
                                    fontWeight: 'bold',
                                    textSize: 16,
                                    textColor: '#000',
                                },
                            },
                        ],
                        events: {},
                        styles: {
                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff',
                                },
                                accordian: 'container',
                            },
                            headerBackgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ddd',
                                },
                                accordian: 'header',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff',
                                },
                                accordian: 'container',
                            },
                            headerHeight: {
                                type: 'numberInput',
                                displayName: 'Height',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 80,
                                },
                                accordian: 'header',
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: 4,
                                },
                                accordian: 'container',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'container',
                            },
                        },
                        exposedVariables: {
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                showHeader: { value: `{{true}}` },
                                loadingState: { value: `{{false}}` },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                backgroundColor: { value: '#fff' },
                                headerBackgroundColor: { value: '#fff' },
                                borderRadius: { value: '4' },
                                borderColor: { value: '#fff' },
                                boxShadow: { value: '0px 0px 0px 0px #00000040' },
                            },
                        },
                    },
                    {
                        name: 'CustomComponent',
                        displayName: 'Custom Component',
                        description: 'Create React components',
                        component: 'CustomComponent',
                        properties: {
                            data: { type: 'code', displayName: 'Data', validation: { schema: { type: 'object' }, defaultValue: '{}' } },
                            code: { type: 'code', displayName: 'Code' },
                        },
                        defaultSize: {
                            width: 20,
                            height: 140,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                            },
                        },
                        exposedVariables: {
                            data: { value: `{{{ title: 'Hi! There', buttonText: 'Update Title'}}}` },
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                visible: { value: '{{true}}' },
                                data: {
                                    value: `{{{ title: 'Hi! There', buttonText: 'Update Title'}}}`,
                                },
                                code: {
                                    value: `import React from 'https://cdn.skypack.dev/react';
  import ReactDOM from 'https://cdn.skypack.dev/react-dom';
  import { Button, Container } from 'https://cdn.skypack.dev/@material-ui/core';
  const MyCustomComponent = ({data, updateData, runQuery}) => (
    <Container>
        <h1>{data.title}</h1>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {updateData({title: 'Hello World!!'})}}
        >
          {data.buttonText}
        </Button>
      </Container>
  );
  const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
  ReactDOM.render(<ConnectedComponent />, document.body);`,
                                    skipResolve: true,
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Datepicker',
                        displayName: 'Date Picker',
                        description: 'Choose date and time',
                        component: 'Datepicker',
                        defaultSize: {
                            width: 5,
                            height: 30,
                        },
                        validation: {
                            customRule: { type: 'code', displayName: 'Custom validation' },
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            defaultValue: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '01/01/2022',
                                },
                            },
                            format: {
                                type: 'code',
                                displayName: 'Format',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'DD/MM/YYYY',
                                },
                            },
                            enableTime: {
                                type: 'toggle',
                                displayName: 'Enable time selection?',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            enableDate: {
                                type: 'toggle',
                                displayName: 'Enable date selection?',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledDates: {
                                type: 'code',
                                displayName: 'Disabled dates',
                                validation: {
                                    schema: { type: 'array', element: { type: 'string' } },
                                    defaultValue: "['01/01/2022']",
                                },
                            },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                        },
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 4,
                                },
                            },
                        },
                        exposedVariables: {
                            value: '',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                customRule: { value: '' },
                            },
                            properties: {
                                defaultValue: { value: '01/01/2022' },
                                format: { value: 'DD/MM/YYYY' },
                                enableTime: { value: '{{false}}' },
                                enableDate: { value: '{{true}}' },
                                disabledDates: { value: '{{[]}}' },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                borderRadius: { value: '{{4}}' },
                            },
                        },
                    },
                    {
                        name: 'DateRangePicker',
                        displayName: 'Range Picker',
                        description: 'Choose date ranges',
                        component: 'DaterangePicker',
                        defaultSize: {
                            width: 10,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            defaultStartDate: {
                                type: 'code',
                                displayName: 'Default start date',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defautlValue: '01/04/2022',
                                },
                            },
                            defaultEndDate: {
                                type: 'code',
                                displayName: 'Default end date',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defautlValue: '10/04/2022',
                                },
                            },
                            format: {
                                type: 'code',
                                displayName: 'Format',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defautlValue: 'DD/MM/YYYY',
                                },
                            },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                        },
                        styles: {
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'number' }, { type: 'string' }],
                                    },
                                    defautlValue: 4,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defautlValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defautlValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            endDate: {},
                            startDate: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                defaultStartDate: { value: '01/04/2022' },
                                defaultEndDate: { value: '10/04/2022' },

                                format: { value: 'DD/MM/YYYY' },
                            },
                            events: [],
                            styles: {
                                borderRadius: { value: '4' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'horizontalDivider',
                        displayName: 'Horizontal Divider',
                        description: 'Separator between components',
                        component: 'Divider',
                        defaultSize: {
                            width: 10,
                            height: 10,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {},
                        events: {},
                        styles: {
                            dividerColor: {
                                type: 'color',
                                displayName: 'Divider color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {
                            value: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {},
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                dividerColor: { value: '#000000' },
                            },
                        },
                    },
                    {
                        name: 'DropdownLegacy',
                        displayName: 'Dropdown (Legacy)',
                        description: 'Single item selector',
                        defaultSize: {
                            width: 8,
                            height: 30,
                        },
                        component: 'DropDown',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        validation: {
                            customRule: { type: 'code', displayName: 'Custom validation' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select',
                                },
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',

                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select an option',
                                },
                            },
                            advanced: {
                                type: 'toggle',
                                displayName: 'Advanced',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: false,
                                },
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }],
                                    },
                                    defaultValue: 2,
                                },
                            },
                            values: {
                                type: 'code',
                                displayName: 'Option values',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: false,
                                },
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
                                    },
                                    defaultValue: "['one', 'two', 'three']",
                                },
                            },
                            display_values: {
                                type: 'code',
                                displayName: 'Option labels',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: false,
                                },
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
                                    },
                                    defaultValue: "['one', 'two', 'three']",
                                },
                            },

                            schema: {
                                type: 'code',
                                displayName: 'Schema',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: true,
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Options loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                            onSearchTextChanged: { displayName: 'On search text changed' },
                        },
                        styles: {
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'number' }, { type: 'string' }],
                                    },
                                    defaultValue: 4,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                                defaultValue: true,
                            },
                            selectedTextColor: {
                                type: 'color',
                                displayName: 'Selected text color',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: '#000000',
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            justifyContent: {
                                type: 'alignButtons',
                                displayName: 'Align Text',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'left',
                                },
                            },
                        },
                        exposedVariables: {
                            value: 2,
                            searchText: '',
                            label: 'Select',
                            optionLabels: ['one', 'two', 'three'],
                            selectedOptionLabel: 'two',
                        },
                        actions: [
                            {
                                handle: 'selectOption',
                                displayName: 'Select option',
                                params: [{ handle: 'select', displayName: 'Select' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                customRule: { value: null },
                            },
                            properties: {
                                advanced: { value: `{{false}}` },
                                schema: {
                                    value:
                                        "{{[\t{label: 'One',value: 1,disable: false,visible: true,default: true},{label: 'Two',value: 2,disable: false,visible: true},{label: 'Three',value: 3,disable: false,visible: true}\t]}}",
                                },

                                label: { value: 'Select' },
                                value: { value: '{{2}}' },
                                values: { value: '{{[1,2,3]}}' },
                                display_values: { value: '{{["one", "two", "three"]}}' },
                                loadingState: { value: '{{false}}' },
                                placeholder: { value: 'Select an option' },
                            },
                            events: [],
                            styles: {
                                borderRadius: { value: '4' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                justifyContent: { value: 'left' },
                            },
                        },
                    },
                    {
                        name: 'Dropdown',
                        displayName: 'Dropdown',
                        description: 'Single item selector',
                        defaultSize: {
                            width: 10,
                            height: 40,
                        },
                        component: 'DropdownV2',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select',
                                },
                                accordian: 'Data',
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select an option',
                                },
                                accordian: 'Data',
                            },
                            advanced: {
                                type: 'toggle',
                                displayName: 'Dynamic options',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                                accordian: 'Options',
                            },
                            schema: {
                                type: 'code',
                                displayName: 'Schema',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: true,
                                },
                                accordian: 'Options',
                            },
                            optionsLoadingState: {
                                type: 'toggle',
                                displayName: 'Options loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                                accordian: 'Options',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },

                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Enter tooltip text',
                                },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                            onSearchTextChanged: { displayName: 'On search text changed' },
                            onFocus: { displayName: 'On focus' },
                            onBlur: { displayName: 'On blur' },
                        },
                        styles: {
                            labelColor: {
                                type: 'color',
                                displayName: 'Color',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'label',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' }, defaultValue: 'side' },
                                options: [
                                    { displayName: 'Side', value: 'side' },
                                    { displayName: 'Top', value: 'top' },
                                ],
                                accordian: 'label',
                            },
                            direction: {
                                type: 'switch',
                                displayName: 'Direction',
                                validation: { schema: { type: 'string' }, defaultValue: 'left' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'label',
                                isFxNotRequired: true,
                            },
                            labelWidth: {
                                type: 'slider',
                                displayName: 'Width',
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            auto: {
                                type: 'checkbox',
                                displayName: 'auto',
                                showLabel: false,
                                validation: { schema: { type: 'boolean' } },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },

                            fieldBackgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: { schema: { type: 'string' }, defaultValue: '#fff' },
                                accordian: 'field',
                            },
                            fieldBorderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: { schema: { type: 'string' }, defaultValue: '#CCD1D5' },
                                accordian: 'field',
                            },
                            accentColor: {
                                type: 'color',
                                displayName: 'Accent',
                                validation: { schema: { type: 'string' }, defaultValue: '#4368E3' },
                                accordian: 'field',
                            },
                            selectedTextColor: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'field',
                            },
                            errTextColor: {
                                type: 'color',
                                displayName: 'Error text',
                                validation: { schema: { type: 'string' }, defaultValue: '#D72D39' },
                                accordian: 'field',
                            },
                            icon: {
                                type: 'icon',
                                displayName: 'Icon',
                                validation: { schema: { type: 'string' }, defaultValue: 'IconHome2' },
                                accordian: 'field',
                                visibility: false,
                            },
                            iconColor: {
                                type: 'color',
                                displayName: '',
                                showLabel: false,
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#6A727C',
                                },
                                accordian: 'field',
                            },
                            fieldBorderRadius: {
                                type: 'input',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: '6' },
                                accordian: 'field',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000040',
                                },
                                accordian: 'field',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 'default',
                                },
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'container',
                            },
                        },
                        exposedVariables: {
                            searchText: '',
                            label: 'Select',
                        },
                        actions: [
                            {
                                handle: 'selectOption',
                                displayName: 'Select option',
                                params: [{ handle: 'select', displayName: 'Select' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: `{{true}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                mandatory: { value: '{{false}}' },
                                customRule: { value: null },
                            },
                            properties: {
                                advanced: { value: `{{false}}` },
                                schema: {
                                    value:
                                        "{{[\t{label: 'option1',value: 1,disable: false,visible: true,default: true},{label: 'option2',value: 2,disable: false,visible: true},{label: 'option3',value: 3,disable: false,visible: true}\t]}}",
                                },
                                options: {
                                    value: [
                                        {
                                            label: 'option1',
                                            value: '1',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: false },
                                        },
                                        {
                                            label: 'option2',
                                            value: '2',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: true },
                                        },
                                        {
                                            label: 'option3',
                                            value: '3',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: false },
                                        },
                                    ],
                                },
                                label: { value: 'Select' },
                                optionsLoadingState: { value: '{{false}}' },
                                placeholder: { value: 'Select an option' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                tooltip: { value: '' },
                            },
                            events: [],
                            styles: {
                                labelColor: { value: '#1B1F24' },
                                labelWidth: { value: '33' },
                                auto: { value: '{{true}}' },
                                fieldBorderRadius: { value: '6' },
                                selectedTextColor: { value: '#1B1F24' },
                                fieldBorderColor: { value: '#CCD1D5' },
                                errTextColor: { value: '#D72D39' },
                                fieldBackgroundColor: { value: '#fff' },
                                direction: { value: 'left' },
                                alignment: { value: 'side' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                                icon: { value: 'IconHome2' },
                                iconVisibility: { value: false },
                                iconColor: { value: '#6A727C' },
                                accentColor: { value: '#4368E3' },
                            },
                        },
                    },
                    {
                        name: 'FilePicker',
                        displayName: 'File Picker',
                        description: 'File Picker',
                        component: 'FilePicker',
                        defaultSize: {
                            width: 15,
                            height: 100,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        actions: [
                            {
                                handle: 'clearFiles',
                                displayName: 'Clear Files',
                            },
                        ],
                        properties: {
                            instructionText: {
                                type: 'code',
                                displayName: 'Instruction text',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Instruction text',
                                },
                            },
                            enableDropzone: {
                                type: 'code',
                                displayName: 'Use drop zone',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            enablePicker: {
                                type: 'code',
                                displayName: 'Use file picker',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            enableMultiple: {
                                type: 'code',
                                displayName: 'Pick multiple files',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            maxFileCount: {
                                type: 'code',
                                displayName: 'Max file count',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: 2,
                                },
                            },
                            fileType: {
                                type: 'code',
                                displayName: 'Accept file types',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'image/*',
                                },
                            },
                            maxSize: {
                                type: 'code',
                                displayName: 'Max size limit (Bytes)',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: 1048576,
                                },
                            },
                            minSize: {
                                type: 'code',
                                displayName: 'Min size limit (Bytes)',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: 50,
                                },
                            },
                            parseContent: {
                                type: 'toggle',
                                displayName: 'Parse content',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            parseFileType: {
                                type: 'select',
                                displayName: 'File type',
                                options: [
                                    { name: 'Autodetect from extension', value: 'auto-detect' },
                                    { name: 'CSV', value: 'csv' },
                                    { name: 'Microsoft Excel - xls', value: 'vnd.ms-excel' },
                                    {
                                        name: 'Microsoft Excel - xlsx',
                                        value: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                    },
                                ],
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'auto-detect',
                                },
                            },
                        },
                        events: {
                            onFileSelected: { displayName: 'On File Selected' },
                            onFileLoaded: { displayName: 'On File Loaded' },
                            onFileDeselected: { displayName: 'On File Deselected' },
                        },
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: 4,
                                },
                            },
                        },
                        exposedVariables: {
                            file: [{ name: '', content: '', dataURL: '', type: '', parsedData: '' }],
                            isParsing: false,
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                instructionText: { value: 'Drag and drop files here or click to select files' },
                                enableDropzone: { value: '{{true}}' },
                                enablePicker: { value: '{{true}}' },
                                maxFileCount: { value: '{{2}}' },
                                enableMultiple: { value: '{{false}}' },
                                fileType: { value: '{{"image/*"}}' },
                                maxSize: { value: '{{1048576}}' },
                                minSize: { value: '{{50}}' },
                                parseContent: { value: '{{false}}' },
                                parseFileType: { value: 'auto-detect' },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                borderRadius: { value: '{{4}}' },
                            },
                        },
                    },
                    {
                        name: 'Form',
                        displayName: 'Form',
                        description: 'Wrapper for multiple components',
                        defaultSize: {
                            width: 13,
                            height: 480,
                        },
                        defaultChildren: [
                            {
                                componentName: 'Text',
                                slotName: 'header',
                                layout: {
                                    top: 10,
                                    left: 1,
                                    height: 40,
                                },
                                properties: ['text'],
                                accessorKey: 'text',
                                styles: ['fontWeight', 'textSize', 'textColor'],
                                defaultValue: {
                                    text: 'Form title',
                                    textSize: 20,
                                    textColor: '#000',
                                },
                            },
                            {
                                componentName: 'Button',
                                slotName: 'footer',
                                layout: {
                                    top: 12,
                                    left: 32,
                                    height: 36,
                                },
                                properties: ['text'],
                                defaultValue: {
                                    text: 'Button2',
                                    padding: 'none',
                                },
                            },
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 40,
                                    left: 10,
                                    height: 30,
                                    width: 17,
                                },
                                properties: ['text'],
                                styles: [
                                    'textSize',
                                    'fontWeight',
                                    'fontStyle',
                                    'textColor',
                                    'isScrollRequired',
                                    'lineHeight',
                                    'textIndent',
                                    'textAlign',
                                    'verticalAlignment',
                                    'decoration',
                                    'transformation',
                                    'letterSpacing',
                                    'wordSpacing',
                                    'fontVariant',
                                    'backgroundColor',
                                    'borderColor',
                                    'borderRadius',
                                    'boxShadow',
                                    'padding',
                                ],
                                defaultValue: {
                                    text: 'User Details',
                                    fontWeight: 'bold',
                                    textSize: 18,
                                    textColor: '#000',
                                    backgroundColor: '#fff00000',
                                    textAlign: 'left',
                                    decoration: 'none',
                                    transformation: 'none',
                                    fontStyle: 'normal',
                                    lineHeight: 1.5,
                                    textIndent: '0',
                                    letterSpacing: '0',
                                    wordSpacing: '0',
                                    fontVariant: 'normal',
                                    verticalAlignment: 'top',
                                    padding: 'default',
                                    boxShadow: '0px 0px 0px 0px #00000090',
                                    borderRadius: '0',
                                    isScrollRequired: 'enabled',
                                },
                            },
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 90,
                                    left: 10,
                                    height: 30,
                                },
                                properties: ['text'],
                                styles: [
                                    'textSize',
                                    'fontWeight',
                                    'fontStyle',
                                    'textColor',
                                    'isScrollRequired',
                                    'lineHeight',
                                    'textIndent',
                                    'textAlign',
                                    'verticalAlignment',
                                    'decoration',
                                    'transformation',
                                    'letterSpacing',
                                    'wordSpacing',
                                    'fontVariant',
                                    'backgroundColor',
                                    'borderColor',
                                    'borderRadius',
                                    'boxShadow',
                                    'padding',
                                ],
                                defaultValue: {
                                    text: 'Name',
                                    fontWeight: 'normal',
                                    textSize: 14,
                                    textColor: '#000',
                                    backgroundColor: '#fff00000',
                                    textAlign: 'left',
                                    decoration: 'none',
                                    transformation: 'none',
                                    fontStyle: 'normal',
                                    lineHeight: 1.5,
                                    textIndent: '0',
                                    letterSpacing: '0',
                                    wordSpacing: '0',
                                    fontVariant: 'normal',
                                    verticalAlignment: 'top',
                                    padding: 'default',
                                    boxShadow: '0px 0px 0px 0px #00000090',
                                    borderRadius: '0',
                                    isScrollRequired: 'enabled',
                                },
                            },
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 160,
                                    left: 10,
                                    height: 30,
                                },
                                properties: ['text'],
                                styles: [
                                    'textSize',
                                    'fontWeight',
                                    'fontStyle',
                                    'textColor',
                                    'isScrollRequired',
                                    'lineHeight',
                                    'textIndent',
                                    'textAlign',
                                    'verticalAlignment',
                                    'decoration',
                                    'transformation',
                                    'letterSpacing',
                                    'wordSpacing',
                                    'fontVariant',
                                    'backgroundColor',
                                    'borderColor',
                                    'borderRadius',
                                    'boxShadow',
                                    'padding',
                                ],
                                defaultValue: {
                                    text: 'Age',
                                    fontWeight: 'normal',
                                    textSize: 14,
                                    textColor: '#000',
                                    backgroundColor: '#fff00000',
                                    textAlign: 'left',
                                    decoration: 'none',
                                    transformation: 'none',
                                    fontStyle: 'normal',
                                    lineHeight: 1.5,
                                    textIndent: '0',
                                    letterSpacing: '0',
                                    wordSpacing: '0',
                                    fontVariant: 'normal',
                                    verticalAlignment: 'top',
                                    padding: 'default',
                                    boxShadow: '0px 0px 0px 0px #00000090',
                                    borderRadius: '0',
                                    isScrollRequired: 'enabled',
                                },
                            },
                            {
                                componentName: 'TextInput',
                                layout: {
                                    top: 120,
                                    left: 10,
                                    height: 30,
                                    width: 25,
                                },
                                properties: ['placeholder', 'label'],
                                defaultValue: {
                                    placeholder: 'Enter your name',
                                    label: '',
                                },
                            },
                            {
                                componentName: 'NumberInput',
                                layout: {
                                    top: 190,
                                    left: 10,
                                    height: 30,
                                    width: 25,
                                },
                                properties: ['value', 'label'],
                                defaultValue: {
                                    value: 24,
                                    label: '',
                                },
                            },
                            {
                                componentName: 'Button',
                                layout: {
                                    top: 240,
                                    left: 10,
                                    height: 30,
                                    width: 10,
                                },
                                properties: ['text'],
                                defaultValue: {
                                    text: 'Submit',
                                },
                            },
                        ],
                        component: 'Form',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            buttonToSubmit: {
                                type: 'select',
                                displayName: 'Button to submit form',
                                options: [{ name: 'None', value: 'none' }],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'none',
                                },
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: false,
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                section: 'additionalActions',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            advanced: {
                                type: 'toggle',
                                displayName: ' Use custom schema',
                            },
                            JSONSchema: {
                                type: 'code',
                                displayName: 'JSON Schema',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: true,
                                },
                            },
                            showHeader: { type: 'toggle', displayName: 'Header' },
                            showFooter: { type: 'toggle', displayName: 'Footer' },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                section: 'additionalActions',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                section: 'additionalActions',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        events: {
                            onSubmit: { displayName: 'On submit' },
                            onInvalid: { displayName: 'On invalid' },
                        },
                        styles: {
                            headerBackgroundColor: {
                                type: 'color',
                                displayName: 'Header background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            footerBackgroundColor: {
                                type: 'color',
                                displayName: 'Footer background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            headerHeight: {
                                type: 'code',
                                displayName: 'Header height',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '80px',
                                },
                            },
                            footerHeight: {
                                type: 'code',
                                displayName: 'Footer height',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '80px',
                                },
                            },
                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: 0,
                                },
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff',
                                },
                            },
                        },
                        exposedVariables: {
                            data: {},
                            isValid: true,
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'submitForm',
                                displayName: 'Submit Form',
                            },
                            {
                                handle: 'resetForm',
                                displayName: 'Reset Form',
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Set Visibility', defaultValue: '{{true}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set Disable',
                                params: [{ handle: 'setDisable', displayName: 'Set Disable', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set Loading',
                                params: [{ handle: 'setLoading', displayName: 'Set Loading', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                loadingState: { value: '{{false}}' },
                                advanced: { value: '{{false}}' },
                                JSONSchema: {
                                    value:
                                        "{{ {title: 'User registration form', properties: {firstname: {type: 'textinput',value: 'Maria',label:'First name', validation:{maxLength:6}, styles: {backgroundColor: '#f6f5ff',textColor: 'black'},},lastname:{type: 'textinput',value: 'Doe', label:'Last name', styles: {backgroundColor: '#f6f5ff',textColor: 'black'},},age:{type:'number', label:'Age'},}, submitButton: {value: 'Submit', styles: {backgroundColor: '#3a433b',borderColor:'#595959'}}} }}",
                                },
                                showHeader: { value: '{{false}}' },
                                showFooter: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                backgroundColor: { value: '#fff' },
                                borderRadius: { value: '0' },
                                borderColor: { value: '#fff' },
                                headerHeight: { value: '60px' },
                                footerHeight: { value: '60px' },
                            },
                        },
                    },
                    {
                        name: 'Html',
                        displayName: 'HTML Viewer',
                        description: 'View HTML content',
                        component: 'Html',
                        defaultSize: {
                            width: 10,
                            height: 310,
                        },
                        properties: {
                            rawHtml: {
                                type: 'code',
                                displayName: 'Raw HTML',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: `<body><div><h1>Hello World</h1></div></body>`,
                                },
                            },
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {},
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                rawHtml: {
                                    value: `<body><main><section class="hero" style="height:306px;display: flex;
            justify-content: center;padding:0 1px;align-items: center;text-align:center">You can build your custom HTML-CSS template here</section></main></body>`,
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Icon',
                        displayName: 'Icon',
                        description: 'Icon',
                        defaultSize: {
                            width: 5,
                            height: 48,
                        },
                        component: 'Icon',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            icon: {
                                type: 'iconPicker',
                                displayName: 'Icon',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'IconHome2',
                                },
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: 'Tooltip text' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Show loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                        },
                        events: {
                            onClick: { displayName: 'On click' },
                            onHover: { displayName: 'On hover' },
                        },
                        styles: {
                            iconColor: {
                                type: 'color',
                                displayName: 'Color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000',
                                },
                                accordian: 'Icon',
                            },
                            iconAlign: {
                                type: 'alignButtons',
                                displayName: 'Alignment',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'center',
                                },
                                accordian: 'Icon',
                            },
                        },
                        exposedVariables: {},
                        actions: [
                            {
                                handle: 'click',
                                displayName: 'Click',
                            },
                            {
                                displayName: 'Set Visibility',
                                handle: 'setVisibility',
                                params: [{ handle: 'value', displayName: 'Value', defaultValue: '{{true}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                icon: { value: 'IconHome2' },
                                loadingState: { value: `{{false}}` },
                                disabledState: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                            },
                            events: [],
                            styles: {
                                iconColor: { value: '#000' },
                                iconAlign: { value: 'center' },
                            },
                        },
                    },
                    {
                        name: 'Iframe',
                        displayName: 'Iframe',
                        description: 'Embed external content',
                        defaultSize: {
                            width: 10,
                            height: 310,
                        },
                        component: 'IFrame',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            source: {
                                type: 'code',
                                displayName: 'URL',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'https://tooljet.io/',
                                },
                            },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {},
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                source: { value: 'https://tooljet.io/' },
                                visible: { value: '{{true}}' },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'Image',
                        displayName: 'Image',
                        description: 'Show image files',
                        defaultSize: {
                            width: 10,
                            height: 240,
                        },
                        component: 'Image',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            imageFormat: {
                                type: 'switch',
                                displayName: 'Image Format',
                                options: [
                                    { displayName: 'Image URL', value: 'imageUrl' },
                                    { displayName: 'JS Object', value: 'jsObject' },
                                ],
                                isFxNotRequired: true,
                                defaultValue: { value: 'imageUrl' },
                                fullWidth: true,
                                showLabel: false,
                            },
                            source: {
                                type: 'code',
                                displayName: 'Source URL',
                                conditionallyRender: {
                                    key: 'imageFormat',
                                    value: 'imageUrl',
                                },
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'https://www.svgrepo.com/image.svg',
                                },
                                showLabel: false,
                            },
                            jsSchema: {
                                type: 'code',
                                displayName: 'JS Object',
                                conditionallyRender: {
                                    key: 'imageFormat',
                                    value: 'jsObject',
                                },
                                validation: {
                                    schema: { type: 'object' },
                                    defaultValue: "{ name: string, type: 'image/*', sizeBytes: number, base64Data: string }",
                                },
                                showLabel: false,
                            },
                            alternativeText: {
                                type: 'code',
                                displayName: 'Alternative',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'this is an image',
                                },
                            },
                            zoomButtons: {
                                type: 'toggle',
                                displayName: 'Zoom button',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            rotateButton: {
                                type: 'toggle',
                                displayName: 'Rotate button',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Show loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: 'Tooltip text' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onClick: { displayName: 'On click' },
                        },
                        styles: {
                            imageFit: {
                                type: 'select',
                                displayName: 'Image fit',
                                options: [
                                    { name: 'Contain', value: 'contain' },
                                    { name: 'Fill', value: 'fill' },
                                    { name: 'Cover', value: 'cover' },
                                    { name: 'Scale down', value: 'scale-down' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'contain',
                                },
                                accordian: 'Image',
                            },
                            imageShape: {
                                type: 'select',
                                displayName: 'Shape',
                                options: [
                                    { name: 'None', value: 'none' },
                                    { name: 'Circle', value: 'circle' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'none',
                                },
                                accordian: 'Image',
                            },
                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffff',
                                },
                                accordian: 'Container',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                                accordian: 'Container',
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 6 },
                                accordian: 'Container',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000090',
                                },
                                accordian: 'Container',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'Custom', value: 'custom' },
                                ],
                                validation: { schema: { type: 'string' }, defaultValue: 'default' },
                                accordian: 'Container',
                                isFxNotRequired: true,
                            },
                            customPadding: {
                                type: 'numberInput',
                                displayName: 'Padding',
                                conditionallyRender: {
                                    key: 'padding',
                                    value: 'custom',
                                },
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 0 },
                                accordian: 'Container',
                                showLabel: false,
                            },
                        },
                        exposedVariables: {},
                        actions: [
                            {
                                handle: 'setImageURL',
                                displayName: 'Set image URL',
                                params: [{ handle: 'url', displayName: 'URL', defaultValue: 'New URL' }],
                            },
                            {
                                handle: 'clearImage',
                                displayName: 'Clear image',
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: `{{true}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                imageFormat: { value: 'imageUrl' },
                                source: { value: 'https://www.svgrepo.com/show/34217/image.svg' },
                                jsSchema: {
                                    value:
                                        "{{{ name: 'DemoImage', type: 'image/svg+xml', sizeBytes: 3050, base64Data: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxIiB5PSI0LjUiIHN0eWxlPSJmaWxsOiNFQ0YwRjE7IiB3aWR0aD0iNTUiIGhlaWdodD0iNDIiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM1NDVFNzM7IiBkPSJNNTcsNDcuNUgwdi00NGg1N1Y0Ny41eiBNMiw0NS41aDUzdi00MEgyVjQ1LjV6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cmVjdCB4PSI1IiB5PSI4LjUiIHN0eWxlPSJmaWxsOiM1NDVFNzM7IiB3aWR0aD0iNDciIGhlaWdodD0iMzQiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNFQ0YwRjE7IiBkPSJNNTMsNDMuNUg0di0zNmg0OVY0My41eiBNNiw0MS41aDQ1di0zMkg2VjQxLjV6Ii8+DQoJCTwvZz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRjNENTVBOyIgY3g9IjE1IiBjeT0iMTcuMDY5IiByPSI0LjU2OSIvPg0KCQk8cG9seWdvbiBzdHlsZT0iZmlsbDojMTFBMDg1OyIgcG9pbnRzPSI1MSwzMi42MTEgNTAsMzEuNSAzOCwyMC41IDI3LjUsMzIgMzIuOTgzLDM3LjQ4MyAzNyw0MS41IDUxLDQxLjUgCQkiLz4NCgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzI2Qjk5OTsiIHBvaW50cz0iNiw0MS41IDM3LDQxLjUgMzIuOTgzLDM3LjQ4MyAyMi4wMTcsMjYuNTE3IDYsNDAuNSAJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNDhBMERDOyIgZD0iTTU1LjA0NSw0NS42MTFjLTAuMDUtMy45MzUtMy4xNjItNy4xMTEtNi45OTktNy4xMTFjLTIuNTY4LDAtNC44MDYsMS40MjYtNi4wMjUsMy41NDYNCgkJCQljLTAuNDIxLTAuMTQxLTAuODctMC4yMi0xLjMzNy0wLjIyYy0yLjA2MywwLTMuNzg1LDEuNDkyLTQuMjA4LDMuNDg0Yy0xLjc1NCwwLjg2NS0yLjk3NSwyLjcwNi0yLjk3NSw0LjgzMQ0KCQkJCWMwLDIuOTQ3LDIuMzQzLDUuMzU5LDUuMjA4LDUuMzU5aDEwLjc3NWMwLjA2MSwwLDAuMTE5LTAuMDA3LDAuMTgtMC4wMDljMC4wNiwwLjAwMiwwLjExOSwwLjAwOSwwLjE4LDAuMDA5aDQuMzENCgkJCQljMi42NjcsMCw0Ljg0OS0yLjI0NSw0Ljg0OS00Ljk4OUM1OSw0OC4wODEsNTcuMjg4LDQ2LjA0Niw1NS4wNDUsNDUuNjExeiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0IxRDNFRjsiIGQ9Ik01NC4xNTEsNTYuNWgtNC4zMWMtMC4wNjMsMC0wLjEyNi0wLjAwNC0wLjE4OC0wLjAwOGMtMC4wNDgsMC4wMDQtMC4xMDksMC4wMDgtMC4xNzIsMC4wMDgNCgkJCQlIMzguNzA4Yy0zLjQyMywwLTYuMjA4LTIuODUzLTYuMjA4LTYuMzU4YzAtMi4yNjIsMS4yMDktNC4zNzIsMy4xMTYtNS41MDNjMC42ODYtMi4yMzUsMi43NDYtMy44MTMsNS4wNjYtMy44MTMNCgkJCQljMC4yOTYsMCwwLjU5MiwwLjAyNSwwLjg4NCwwLjA3NmMxLjQ5NS0yLjExNiwzLjkxNC0zLjQwMiw2LjQ3OS0zLjQwMmM0LjEwMiwwLDcuNTI0LDMuMjI1LDcuOTU0LDcuMzMyDQoJCQkJYzIuMzU4LDAuODA2LDQsMy4wNzksNCw1LjY3OUM2MCw1My44MTMsNTcuMzc2LDU2LjUsNTQuMTUxLDU2LjV6IE00OS42MTQsNTQuNDkxbDAuMTg2LDAuMDA2bDQuMzUyLDAuMDAzDQoJCQkJYzIuMTIyLDAsMy44NDktMS43OSwzLjg0OS0zLjk4OWMwLTEuOTE3LTEuMzIzLTMuNTY0LTMuMTQ2LTMuOTE5bC0wLjc5OS0wLjE1NWwtMC4wMTEtMC44MTMNCgkJCQljLTAuMDQ0LTMuMzc2LTIuNzM0LTYuMTIzLTUuOTk5LTYuMTIzYy0yLjEzNSwwLTQuMDYzLDEuMTM5LTUuMTU4LDMuMDQ1bC0wLjQwOSwwLjcxMWwtMC43NzctMC4yNjENCgkJCQljLTAuMzMyLTAuMTEyLTAuNjc1LTAuMTY5LTEuMDE5LTAuMTY5Yy0xLjU0LDAtMi44OTgsMS4xMzMtMy4yMjksMi42OTJsLTAuMTAyLDAuNDc1bC0wLjQzNSwwLjIxNA0KCQkJCWMtMS40NjksMC43MjUtMi40MTcsMi4yNjktMi40MTcsMy45MzVjMCwyLjQwMywxLjg4OCw0LjM1OCw0LjIwOCw0LjM1OEw0OS42MTQsNTQuNDkxeiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+' }}}",
                                },
                                alternativeText: { value: '' },
                                zoomButtons: { value: '{{false}}' },
                                rotateButton: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                disabledState: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                            },
                            events: [],
                            styles: {
                                imageFit: { value: 'contain' },
                                imageShape: { value: 'none' },
                                backgroundColor: { value: '#FFFFFF' },
                                borderColor: { value: '' },
                                borderRadius: { value: '{{6}}' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                                padding: { value: 'default' },
                                customPadding: { value: '{{0}}' },
                            },
                        },
                    },
                    {
                        name: 'Modal',
                        displayName: 'Modal',
                        description: 'Show pop-up windows',
                        component: 'ModalV2',
                        defaultSize: {
                            width: 10,
                            height: 34,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Modal trigger visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledTrigger: {
                                type: 'toggle',
                                displayName: 'Disable modal trigger',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            disabledModal: {
                                type: 'toggle',
                                displayName: 'Disable modal window',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            useDefaultButton: {
                                type: 'toggle',
                                displayName: 'Use default trigger button',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            triggerButtonLabel: {
                                type: 'code',
                                displayName: 'Trigger button label',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'Launch Modal',
                                },
                            },

                            // Data Accordion
                            showHeader: { type: 'toggle', displayName: 'Header', accordian: 'Data' },
                            showFooter: { type: 'toggle', displayName: 'Footer', accordian: 'Data' },

                            size: {
                                type: 'select',
                                displayName: 'Width',
                                accordian: 'Data',
                                options: [
                                    { name: 'small', value: 'sm' },
                                    { name: 'medium', value: 'lg' },
                                    { name: 'large', value: 'xl' },
                                    { name: 'fullscreen', value: 'fullscreen' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'lg',
                                },
                            },
                            modalHeight: {
                                type: 'numberInput',
                                displayName: 'Height',
                                accordian: 'Data',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 400 },
                            },
                            headerHeight: {
                                type: 'numberInput',
                                displayName: 'Header height',
                                accordian: 'Data',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 80 },
                            },
                            footerHeight: {
                                type: 'numberInput',
                                displayName: 'Footer height',
                                accordian: 'Data',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 80 },
                            },
                            hideOnEsc: { type: 'toggle', displayName: 'Close on escape key', section: 'additionalActions' },
                            closeOnClickingOutside: { type: 'toggle', displayName: 'Close on clicking outside', section: 'additionalActions' },
                            hideCloseButton: { type: 'toggle', displayName: 'Hide close button', section: 'additionalActions' },
                        },
                        events: {
                            onOpen: { displayName: 'On open' },
                            onClose: { displayName: 'On close' },
                        },
                        defaultChildren: [
                            {
                                componentName: 'Text',
                                slotName: 'header',
                                layout: {
                                    top: 21,
                                    left: 1,
                                    height: 40,
                                },
                                displayName: 'ModalHeaderTitle',
                                properties: ['text'],
                                accessorKey: 'text',
                                styles: ['fontWeight', 'textSize', 'textColor'],
                                defaultValue: {
                                    text: 'Modal title',
                                    textSize: 20,
                                    textColor: '#000',
                                },
                            },
                            {
                                componentName: 'Button',
                                slotName: 'footer',
                                layout: {
                                    top: 24,
                                    left: 22,
                                    height: 36,
                                },
                                displayName: 'ModalFooterCancel',
                                properties: ['text'],
                                styles: ['type', 'borderColor', 'padding'],
                                defaultValue: {
                                    text: 'Button1',
                                    type: 'outline',
                                    borderColor: '#CCD1D5',
                                },
                            },
                            {
                                componentName: 'Button',
                                slotName: 'footer',
                                layout: {
                                    top: 24,
                                    left: 32,
                                    height: 36,
                                },
                                displayName: 'ModalFooterConfirm',
                                properties: ['text'],
                                defaultValue: {
                                    text: 'Button2',
                                    padding: 'none',
                                },
                            },
                        ],
                        styles: {
                            headerBackgroundColor: {
                                type: 'color',
                                displayName: 'Header background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            footerBackgroundColor: {
                                type: 'color',
                                displayName: 'Footer background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            bodyBackgroundColor: {
                                type: 'color',
                                displayName: 'Body background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            triggerButtonBackgroundColor: {
                                type: 'color',
                                displayName: 'Trigger button background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                            },
                            triggerButtonTextColor: {
                                type: 'color',
                                displayName: 'Trigger button text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            show: false,
                            isDisabledModal: false,
                            isDisabledTrigger: false,
                            isVisible: true,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'open',
                                displayName: 'Open',
                            },
                            {
                                handle: 'close',
                                displayName: 'Close',
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: '{{true}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisableTrigger',
                                displayName: 'Set disable trigger',
                                params: [{ handle: 'setDisableTrigger', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisableModal',
                                displayName: 'Set disable modal',
                                params: [{ handle: 'setDisableModal', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                loadingState: { value: `{{false}}` },
                                visibility: { value: '{{true}}' },
                                disabledTrigger: { value: '{{false}}' },
                                disabledModal: { value: '{{false}}' },
                                useDefaultButton: { value: `{{true}}` },
                                triggerButtonLabel: { value: `Launch Modal` },
                                size: { value: 'lg' },
                                showHeader: { value: '{{true}}' },
                                showFooter: { value: '{{true}}' },
                                hideCloseButton: { value: '{{false}}' },
                                hideOnEsc: { value: '{{true}}' },
                                closeOnClickingOutside: { value: '{{false}}' },
                                modalHeight: { value: 400 },
                                headerHeight: { value: 80 },
                                footerHeight: { value: 80 },
                            },
                            events: [],
                            styles: {
                                headerBackgroundColor: { value: '#ffffffff' },
                                footerBackgroundColor: { value: '#ffffffff' },
                                bodyBackgroundColor: { value: '#ffffffff' },
                                triggerButtonBackgroundColor: { value: '#4D72FA' },
                                triggerButtonTextColor: { value: '#ffffffff' },
                            },
                        },
                    },
                    {
                        name: 'ModalLegacy',
                        displayName: 'Modal (Legacy)',
                        description: 'Show pop-up windows',
                        component: 'Modal',
                        defaultSize: {
                            width: 10,
                            height: 34,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            title: {
                                type: 'code',
                                displayName: 'Title',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'This title can be changed',
                                },
                            },
                            titleAlignment: {
                                type: 'select',
                                displayName: 'Title alignment',
                                options: [
                                    { name: 'left', value: 'left' },
                                    { name: 'center', value: 'center' },
                                    { name: 'right', value: 'right' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'left',
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            useDefaultButton: {
                                type: 'toggle',
                                displayName: 'Use default trigger button',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            triggerButtonLabel: {
                                type: 'code',
                                displayName: 'Trigger button label',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'Launch Modal',
                                },
                            },
                            hideTitleBar: { type: 'toggle', displayName: 'Hide title bar' },
                            hideCloseButton: { type: 'toggle', displayName: 'Hide close button' },
                            hideOnEsc: { type: 'toggle', displayName: 'Close on escape key' },
                            closeOnClickingOutside: { type: 'toggle', displayName: 'Close on clicking outside' },

                            size: {
                                type: 'select',
                                displayName: 'Modal size',
                                options: [
                                    { name: 'small', value: 'sm' },
                                    { name: 'medium', value: 'lg' },
                                    { name: 'large', value: 'xl' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'lg',
                                },
                            },
                            modalHeight: {
                                type: 'code',
                                displayName: 'Modal height',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '400px',
                                },
                            },
                        },
                        events: {
                            onOpen: { displayName: 'On open' },
                            onClose: { displayName: 'On close' },
                        },
                        styles: {
                            headerBackgroundColor: {
                                type: 'color',
                                displayName: 'Header background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            headerTextColor: {
                                type: 'color',
                                displayName: 'Header title color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            bodyBackgroundColor: {
                                type: 'color',
                                displayName: 'Body background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffffffff',
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            triggerButtonBackgroundColor: {
                                type: 'color',
                                displayName: 'Trigger button background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                            },
                            triggerButtonTextColor: {
                                type: 'color',
                                displayName: 'Trigger button text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            show: false,
                        },
                        actions: [
                            {
                                handle: 'open',
                                displayName: 'Open',
                            },
                            {
                                handle: 'close',
                                displayName: 'Close',
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                title: { value: 'This title can be changed' },
                                titleAlignment: { value: 'left' },
                                loadingState: { value: `{{false}}` },
                                useDefaultButton: { value: `{{true}}` },
                                triggerButtonLabel: { value: `Launch Modal` },
                                size: { value: 'lg' },
                                hideTitleBar: { value: '{{false}}' },
                                hideCloseButton: { value: '{{false}}' },
                                hideOnEsc: { value: '{{true}}' },
                                closeOnClickingOutside: { value: '{{false}}' },
                                modalHeight: { value: '400px' },
                            },
                            events: [],
                            styles: {
                                headerBackgroundColor: { value: '#ffffffff' },
                                headerTextColor: { value: '#000000' },
                                bodyBackgroundColor: { value: '#ffffffff' },
                                disabledState: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                                triggerButtonBackgroundColor: { value: '#4D72FA' },
                                triggerButtonTextColor: { value: '#ffffffff' },
                            },
                        },
                    },
                    {
                        name: 'MultiselectLegacy',
                        displayName: 'Multiselect (Legacy)',
                        description: 'Multiple item selector',
                        defaultSize: {
                            width: 12,
                            height: 30,
                        },
                        component: 'Multiselect',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        actions: [
                            {
                                handle: 'selectOption',
                                displayName: 'Select Option',
                                params: [
                                    {
                                        handle: 'option',
                                        displayName: 'Option',
                                    },
                                ],
                            },
                            {
                                handle: 'deselectOption',
                                displayName: 'Deselect Option',
                                params: [
                                    {
                                        handle: 'option',
                                        displayName: 'Option',
                                    },
                                ],
                            },
                            {
                                handle: 'clearSelections',
                                displayName: 'Clear selections',
                            },
                        ],
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select',
                                },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                    defaultValue: "['two', 'three']",
                                },
                            },
                            values: {
                                type: 'code',
                                displayName: 'Option values',
                                validation: {
                                    schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                    defaultValue: "['one', 'two', 'three']",
                                },
                            },
                            display_values: {
                                type: 'code',
                                displayName: 'Option labels',
                                validation: {
                                    schema: { type: 'array', element: { type: 'string' } },
                                    defaultValue: "['one', 'two', 'three']",
                                },
                            },
                            showAllOption: {
                                type: 'toggle',
                                displayName: 'Enable select All option',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                            onSearchTextChanged: { displayName: 'On search text changed' },
                        },
                        styles: {
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 4,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            values: {},
                            searchText: '',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Select' },
                                value: { value: '{{[2,3]}}' },
                                values: { value: '{{[1,2,3]}}' },
                                display_values: { value: '{{["one", "two", "three"]}}' },
                                visible: { value: '{{true}}' },
                                showAllOption: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                borderRadius: { value: '4' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'Multiselect',
                        displayName: 'Multiselect',
                        description: 'Multiple item selector',
                        defaultSize: {
                            width: 10,
                            height: 40,
                        },
                        component: 'MultiselectV2',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },
                        actions: [
                            {
                                handle: 'selectOptions',
                                displayName: 'Select Options',
                                params: [
                                    {
                                        handle: 'option',
                                        displayName: 'Option',
                                    },
                                ],
                            },
                            {
                                handle: 'deselectOptions',
                                displayName: 'Deselect Options',
                                params: [
                                    {
                                        handle: 'option',
                                        displayName: 'Option',
                                    },
                                ],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: `{{true}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Label',
                                },
                                accordian: 'Data',
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select the options',
                                },
                                accordian: 'Data',
                            },
                            advanced: {
                                type: 'toggle',
                                displayName: 'Dynamic options',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                accordian: 'Options',
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: false,
                                },
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }],
                                    },
                                },
                                accordian: 'Options',
                            },
                            schema: {
                                type: 'code',
                                displayName: 'Schema',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: true,
                                },
                                accordian: 'Options',
                            },
                            showAllOption: {
                                type: 'toggle',
                                displayName: 'Enable select all option',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                                accordian: 'Options',
                            },
                            optionsLoadingState: {
                                type: 'toggle',
                                displayName: 'Options loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                                accordian: 'Options',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: '' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                            onSearchTextChanged: { displayName: 'On search text changed' },
                            onFocus: { displayName: 'On focus' },
                            onBlur: { displayName: 'On blur' },
                        },

                        styles: {
                            labelColor: {
                                type: 'color',
                                displayName: 'Color',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'label',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' }, defaultValue: 'side' },
                                options: [
                                    { displayName: 'Side', value: 'side' },
                                    { displayName: 'Top', value: 'top' },
                                ],
                                accordian: 'label',
                            },
                            direction: {
                                type: 'switch',
                                displayName: 'Direction',
                                validation: { schema: { type: 'string' }, defaultValue: 'left' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'label',
                                isFxNotRequired: true,
                            },
                            labelWidth: {
                                type: 'slider',
                                displayName: 'Width',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            auto: {
                                type: 'checkbox',
                                displayName: 'auto',
                                showLabel: false,
                                validation: { schema: { type: 'boolean' } },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },

                            fieldBackgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: { schema: { type: 'string' }, defaultValue: '#fff' },
                                accordian: 'field',
                            },

                            fieldBorderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: { schema: { type: 'string' }, defaultValue: '#CCD1D5' },
                                accordian: 'field',
                            },
                            accentColor: {
                                type: 'color',
                                displayName: 'Accent',
                                validation: { schema: { type: 'string' }, defaultValue: '#4368E3' },
                                accordian: 'field',
                            },
                            selectedTextColor: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'field',
                            },
                            errTextColor: {
                                type: 'color',
                                displayName: 'Error Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#D72D39' },
                                accordian: 'field',
                            },
                            icon: {
                                type: 'icon',
                                displayName: 'Icon',
                                validation: { schema: { type: 'string' }, defaultValue: 'IconHome2' },
                                accordian: 'field',
                                visibility: false,
                            },
                            iconColor: {
                                type: 'color',
                                displayName: 'Icon color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#6A727C',
                                },
                                accordian: 'field',
                                showLabel: false,
                            },
                            fieldBorderRadius: {
                                type: 'input',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: '6' },
                                accordian: 'field',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box Shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000090',
                                },
                                accordian: 'field',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 'default',
                                },
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'container',
                            },
                        },
                        exposedVariables: {
                            searchText: '',
                        },

                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                mandatory: { value: false },
                                customRule: { value: null },
                            },
                            properties: {
                                label: { value: 'Select' },
                                values: { value: ['1', '2'] },
                                advanced: { value: `{{false}}` },
                                showAllOption: { value: '{{false}}' },
                                optionsLoadingState: { value: '{{false}}' },
                                placeholder: { value: 'Select the options' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                schema: {
                                    value:
                                        "{{[\t{label: 'option1',value: 1,disable: false,visible: true,default: true},{label: 'option2',value: 2,disable: false,visible: true},{label: 'option3',value: 3,disable: false,visible: true}\t]}}",
                                },
                                options: {
                                    value: [
                                        {
                                            label: 'option1',
                                            value: '1',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: false },
                                        },
                                        {
                                            label: 'option2',
                                            value: '2',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: true },
                                        },
                                        {
                                            label: 'option3',
                                            value: '3',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: false },
                                        },
                                    ],
                                },
                                tooltip: { value: '' },
                            },
                            events: [],
                            styles: {
                                labelColor: { value: '#1B1F24' },
                                labelWidth: { value: '33' },
                                auto: { value: '{{true}}' },
                                fieldBorderRadius: { value: '6' },
                                selectedTextColor: { value: '#1B1F24' },
                                fieldBorderColor: { value: '#CCD1D5' },
                                errTextColor: { value: '#D72D39' },
                                fieldBackgroundColor: { value: '#fff' },
                                direction: { value: 'left' },
                                alignment: { value: 'side' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                                icon: { value: 'IconHome2' },
                                iconVisibility: { value: false },
                                iconColor: { value: '#6A727C' },
                                accentColor: { value: '#4368E3' },
                            },
                        },
                    },
                    {
                        name: 'NumberInput',
                        displayName: 'Number Input',
                        description: 'Numeric input field',
                        component: 'NumberInput',
                        defaultSize: {
                            width: 10,
                            height: 40,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: { schema: { type: 'string' }, defaultValue: 'Label' },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 0,
                                },
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Enter your input',
                                },
                            },
                            decimalPlaces: {
                                type: 'code',
                                displayName: 'Decimal places',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 2,
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: 'Tooltip text' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                            onFocus: { displayName: 'On focus' },
                            onBlur: { displayName: 'On blur' },
                            onEnterPressed: { displayName: 'On enter pressed' },
                        },
                        styles: {
                            color: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'label',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' }, defaultValue: 'side' },
                                options: [
                                    { displayName: 'Side', value: 'side' },
                                    { displayName: 'Top', value: 'top' },
                                ],
                                accordian: 'label',
                            },
                            direction: {
                                type: 'switch',
                                displayName: '',
                                validation: { schema: { type: 'string' }, defaultValue: 'left' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'label',
                                isFxNotRequired: true,
                            },
                            width: {
                                type: 'slider',
                                displayName: 'Width',
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            auto: {
                                type: 'checkbox',
                                displayName: 'auto',
                                showLabel: false,
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },

                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: { schema: { type: 'string' }, defaultValue: '#fff' },
                                accordian: 'field',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: { schema: { type: 'string' }, defaultValue: '#CCD1D5' },
                                accordian: 'field',
                            },
                            accentColor: {
                                type: 'color',
                                displayName: 'Accent',
                                validation: { schema: { type: 'string' }, defaultValue: '#4368E3' },
                                accordian: 'field',
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'field',
                            },
                            errTextColor: {
                                type: 'color',
                                displayName: 'Error text',
                                validation: { schema: { type: 'string' }, defaultValue: '#D72D39' },
                                accordian: 'field',
                            },
                            icon: {
                                type: 'icon',
                                displayName: 'Icon',
                                validation: { schema: { type: 'string' }, defaultValue: 'IconHome2' },
                                accordian: 'field',
                                visibility: false,
                            },
                            iconColor: {
                                type: 'color',
                                displayName: 'Icon color',
                                validation: { schema: { type: 'string' }, defaultValue: '#CFD3D859' },
                                accordian: 'field',
                                visibility: false,
                                showLabel: false,
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 6 },
                                accordian: 'field',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box Shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000040',
                                },
                                accordian: 'field',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 'default',
                                },
                                isFxNotRequired: true,
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'container',
                            },
                        },
                        actions: [
                            {
                                handle: 'setText',
                                displayName: 'Set text',
                                params: [{ handle: 'text', displayName: 'text', defaultValue: '100' }],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                            {
                                handle: 'setFocus',
                                displayName: 'Set focus',
                            },
                            {
                                handle: 'setBlur',
                                displayName: 'Set blur',
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        exposedVariables: {
                            value: 0,
                            isMandatory: false,
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            regex: { type: 'code', displayName: 'Regex', placeholder: '^d+$' },
                            minValue: { type: 'code', displayName: 'Min value', placeholder: 'Enter min value' },
                            maxValue: { type: 'code', displayName: 'Max value', placeholder: 'Enter max value' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                mandatory: { value: '{{false}}' },
                                regex: { value: '' },
                                minValue: { value: '' },
                                maxValue: { value: '' },
                                customRule: { value: '' },
                            },
                            properties: {
                                value: { value: '0' },
                                label: { value: 'Label' },
                                maxValue: { value: '' },
                                minValue: { value: '' },
                                placeholder: { value: '0' },
                                decimalPlaces: { value: '{{2}}' },
                                tooltip: { value: '' },
                                visibility: { value: '{{true}}' },
                                loadingState: { value: '{{false}}' },
                                disabledState: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                borderRadius: { value: '{{6}}' },
                                backgroundColor: { value: '#fff' },
                                borderColor: { value: '#CCD1D5' },
                                accentColor: { value: '#4368E3' },
                                errTextColor: { value: '#D72D39' },
                                textColor: { value: '#1B1F24' },
                                color: { value: '#1B1F24' },
                                iconColor: { value: '#CFD3D859' },
                                direction: { value: 'left' },
                                width: { value: '{{33}}' },
                                alignment: { value: 'side' },
                                auto: { value: '{{true}}' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000040' },
                                icon: { value: 'IconHome2' },
                                iconVisibility: { value: false },
                            },
                        },
                    },
                    {
                        name: 'Kanban',
                        displayName: 'Kanban',
                        description: 'Task management board',
                        component: 'Kanban',
                        defaultSize: {
                            width: 40,
                            height: 490,
                        },
                        defaultChildren: [
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 20,
                                    left: 4,
                                    height: 30,
                                },
                                properties: ['text'],
                                accessorKey: 'text',
                                styles: ['fontWeight', 'textSize', 'textColor'],
                                defaultValue: {
                                    text: '{{cardData.title}}',
                                    fontWeight: 'bold',
                                    textSize: 16,
                                    textColor: '#000',
                                },
                            },
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 50,
                                    left: 4,
                                    height: 30,
                                },
                                properties: ['text'],
                                accessorKey: 'text',
                                styles: ['textSize', 'textColor'],
                                defaultValue: {
                                    text: '{{cardData.description}}',
                                    textSize: 14,
                                    textColor: '#000',
                                },
                            },
                        ],
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            columnData: { type: 'code', displayName: 'Column data' },
                            cardData: { type: 'code', displayName: 'Card data' },
                            cardWidth: {
                                type: 'code',
                                displayName: 'Card width',
                                validation: {
                                    schema: { type: 'number' },
                                },
                            },
                            cardHeight: {
                                type: 'code',
                                displayName: 'Card height',
                                validation: {
                                    schema: { type: 'number' },
                                },
                            },
                            enableAddCard: { type: 'toggle', displayName: 'Enable add card' },
                            showDeleteButton: { type: 'toggle', displayName: 'Show delete button' },
                        },
                        events: {
                            onUpdate: { displayName: 'On update' },
                            onAddCardClick: { displayName: 'On add card click' },
                            onCardRemoved: { displayName: 'Card removed' },
                            onCardAdded: { displayName: 'Card added' },
                            onCardMoved: { displayName: 'Card moved' },
                            onCardSelected: { displayName: 'Card selected' },
                        },
                        styles: {
                            disabledState: { type: 'toggle', displayName: 'Disable' },
                            visibility: { type: 'toggle', displayName: 'Visibility' },
                            accentColor: { type: 'color', displayName: 'Accent color' },
                        },
                        actions: [
                            {
                                handle: 'addCard',
                                displayName: 'Add Card',
                                params: [
                                    {
                                        handle: 'cardDetails',
                                        displayName: 'Card Details',
                                        defaultValue: `{{{ id: "c11", title: "Title 11", description: "Description 11", columnId: "r3" }}}`,
                                    },
                                ],
                            },
                            {
                                handle: 'deleteCard',
                                displayName: 'Delete Card',
                                params: [{ handle: 'id', displayName: 'Card Id', defaultValue: `{{components.kanban1?.lastSelectedCard?.id}}` }],
                            },
                            {
                                handle: 'moveCard',
                                displayName: 'Move Card',
                                params: [
                                    { handle: 'cardId', displayName: 'Card Id', defaultValue: `{{components.kanban1?.lastSelectedCard?.id}}` },
                                    { handle: 'columnId', displayName: 'Destination Column Id', defaultValue: '' },
                                ],
                            },
                            {
                                handle: 'updateCardData',
                                displayName: 'Update Card Data',
                                params: [
                                    { handle: 'id', displayName: 'Card Id', defaultValue: `{{components.kanban1?.lastSelectedCard?.id}}` },
                                    {
                                        handle: 'value',
                                        displayName: 'Value',
                                        defaultValue: `{{{...components.kanban1?.lastSelectedCard, title: 'New Title'}}}`,
                                    },
                                ],
                            },
                        ],
                        exposedVariables: {
                            updatedCardData: {},
                            lastAddedCard: {},
                            lastRemovedCard: {},
                            lastCardMovement: {},
                            lastSelectedCard: {},
                            lastUpdatedCard: {},
                            lastCardUpdate: [],
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                columnData: {
                                    value:
                                        '{{[{ "id": "r1", "title": "To Do" },{ "id": "r2", "title": "In Progress" },{ "id": "r3", "title": "Done" }]}}',
                                },
                                cardData: {
                                    value:
                                        '{{[{ id: "c1", title: "Title 1", description: "Description 1", columnId: "r1" },{ id: "c2", title: "Title 2", description: "Description 2", columnId: "r1" },{ id: "c3", title: "Title 3", description: "Description 3",columnId: "r2" },{ id: "c4", title: "Title 4", description: "Description 4",columnId: "r3" },{ id: "c5", title: "Title 5", description: "Description 5",columnId: "r3" }, { id: "c6", title: "Title 6", description: "Description 6", columnId: "r1" },{ id: "c7", title: "Title 7", description: "Description 7", columnId: "r1" },{ id: "c8", title: "Title 8", description: "Description 8",columnId: "r2" },{ id: "c9", title: "Title 9", description: "Description 9",columnId: "r3" },{ id: "c10", title: "Title 10", description: "Description 10",columnId: "r3" }]}}',
                                },
                                cardWidth: {
                                    value: '{{302}}',
                                },
                                cardHeight: {
                                    value: '{{100}}',
                                },
                                enableAddCard: {
                                    value: `{{true}}`,
                                },
                                showDeleteButton: {
                                    value: `{{true}}`,
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                accentColor: { value: '#4d72fa' },
                            },
                        },
                    },
                    {
                        name: 'KanbanBoard',
                        displayName: 'Kanban Board',
                        description: 'Task management board',
                        component: 'KanbanBoard',
                        defaultSize: {
                            width: 40,
                            height: 490,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            columns: { type: 'code', displayName: 'Columns' },
                            cardData: { type: 'code', displayName: 'Card Data' },
                            enableAddCard: { type: 'toggle', displayName: 'Enable Add Card' },
                        },
                        events: {
                            onCardAdded: { displayName: 'Card added' },
                            onCardRemoved: { displayName: 'Card removed' },
                            onCardMoved: { displayName: 'Card moved' },
                            onCardSelected: { displayName: 'Card selected' },
                            onCardUpdated: { displayName: 'Card updated' },
                        },
                        styles: {
                            disabledState: { type: 'toggle', displayName: 'Disable' },
                            visibility: { type: 'toggle', displayName: 'Visibility' },
                            width: { type: 'number', displayName: 'Width' },
                            minWidth: { type: 'number', displayName: 'Min Width' },
                            accentColor: { type: 'color', displayName: 'Accent color' },
                        },
                        exposedVariables: {
                            columns: {},
                            lastAddedCard: {},
                            lastRemovedCard: {},
                            lastCardMovement: {},
                            lastUpdatedCard: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                columns: {
                                    value: '{{[{ "id": "1", "title": "to do" },{ "id": "2", "title": "in progress" }]}}',
                                },
                                cardData: {
                                    value:
                                        '{{[{ id: "01", title: "one", columnId: "1" },{ id: "02", title: "two", columnId: "1" },{ id: "03", title: "three", columnId: "2" }]}}',
                                },
                                enableAddCard: {
                                    value: `{{true}}`,
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                width: { value: '{{400}}' },
                                minWidth: { value: '{{200}}' },
                                textColor: { value: '' },
                            },
                        },
                    },
                    {
                        name: 'Pagination',
                        displayName: 'Pagination',
                        description: 'Navigate pages',
                        component: 'Pagination',
                        defaultSize: {
                            width: 10,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            numberOfPages: {
                                type: 'code',
                                displayName: 'Number of pages',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: '{{5}}',
                                },
                            },
                            defaultPageIndex: {
                                type: 'code',
                                displayName: 'Default page index',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: '{{1}}',
                                },
                            },
                        },
                        validation: {},
                        events: {
                            onPageChange: { displayName: 'On page change' },
                        },
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            totalPages: null,
                            currentPageIndex: null,
                        },
                        definition: {
                            validation: {},
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                numberOfPages: {
                                    value: '{{5}}',
                                },
                                defaultPageIndex: {
                                    value: '{{1}}',
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'PasswordInput',
                        displayName: 'Password Input',
                        description: 'Secure text input',
                        component: 'PasswordInput',
                        defaultSize: {
                            width: 10,
                            height: 40,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: { schema: { type: 'string' }, defaultValue: 'Label' },
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Password',
                                },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'default value',
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: 'Tooltip text' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            regex: {
                                type: 'code',
                                displayName: 'Regex',
                                placeholder: '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$',
                            },
                            minLength: { type: 'code', displayName: 'Min length', placeholder: 'Enter min length' },
                            maxLength: { type: 'code', displayName: 'Max length', placeholder: 'Enter max length' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                            onFocus: { displayName: 'On focus' },
                            onBlur: { displayName: 'On blur' },
                            onEnterPressed: { displayName: 'On enter pressed' },
                        },
                        styles: {
                            color: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'label',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' }, defaultValue: 'side' },
                                options: [
                                    { displayName: 'Side', value: 'side' },
                                    { displayName: 'Top', value: 'top' },
                                ],
                                accordian: 'label',
                            },
                            direction: {
                                type: 'switch',
                                displayName: '',
                                validation: { schema: { type: 'string' }, defaultValue: 'left' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'label',
                                isFxNotRequired: true,
                            },
                            width: {
                                type: 'slider',
                                displayName: 'Width',
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            auto: {
                                type: 'checkbox',
                                displayName: 'auto',
                                showLabel: false,
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },

                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: { schema: { type: 'string' }, defaultValue: '#fff' },
                                accordian: 'field',
                            },
                            accentColor: {
                                type: 'color',
                                displayName: 'Accent',
                                validation: { schema: { type: 'string' }, defaultValue: '#4368E3' },
                                accordian: 'field',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: { schema: { type: 'string' }, defaultValue: '#CCD1D5' },
                                accordian: 'field',
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'field',
                            },
                            errTextColor: {
                                type: 'color',
                                displayName: 'Error text',
                                validation: { schema: { type: 'string' }, defaultValue: '#D72D39' },
                                accordian: 'field',
                            },
                            icon: {
                                type: 'icon',
                                displayName: 'Icon',
                                validation: { schema: { type: 'string' }, defaultValue: 'IconLock' },
                                accordian: 'field',
                                visibility: false,
                            },
                            iconColor: {
                                type: 'color',
                                displayName: 'Icon color',
                                validation: { schema: { type: 'string' }, defaultValue: '#CFD3D859' },
                                accordian: 'field',
                                visibility: false,
                                showLabel: false,
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 6 },
                                accordian: 'field',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000040',
                                },
                                accordian: 'field',
                            },

                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 'default',
                                },
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                isFxNotRequired: true,
                                accordian: 'container',
                            },
                        },
                        exposedVariables: {
                            value: '',
                            isMandatory: false,
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'setText',
                                displayName: 'Set text',
                                params: [{ handle: 'text', displayName: 'text', defaultValue: 'New Text' }],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                            {
                                handle: 'setFocus',
                                displayName: 'Set focus',
                            },
                            {
                                handle: 'setBlur',
                                displayName: 'Set blur',
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                placeholder: { value: 'Password' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                tooltip: { value: '' },
                                label: { value: 'Label' },
                                value: { value: '' },
                            },
                            validation: {
                                mandatory: { value: false },
                                regex: { value: '' },
                                minLength: { value: '' },
                                maxLength: { value: '' },
                                customRule: { value: '' },
                            },
                            events: [],
                            styles: {
                                borderRadius: { value: '{{6}}' },
                                backgroundColor: { value: '#fff' },
                                borderColor: { value: '#CCD1D5' },
                                accentColor: { value: '#4368E3' },
                                errTextColor: { value: '#D72D39' },
                                textColor: { value: '#1B1F24' },
                                iconColor: { value: '#CFD3D859' },
                                direction: { value: 'left' },
                                width: { value: '{{33}}' },
                                alignment: { value: 'side' },
                                color: { value: '#1B1F24' },
                                auto: { value: '{{true}}' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000040' },
                                icon: { value: 'IconLock' },
                                iconVisibility: { value: true },
                            },
                        },
                    },
                    {
                        name: 'RadioButtonLegacy',
                        displayName: 'Radio Button (Legacy)',
                        description: 'Select one from multiple choices',
                        component: 'RadioButton',
                        defaultSize: {
                            width: 6,
                            height: 60,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select',
                                },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
                                    defaultValue: true,
                                },
                            },
                            values: {
                                type: 'code',
                                displayName: 'Option values',
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
                                    },
                                    defaultValue: [true, false],
                                },
                            },
                            display_values: {
                                type: 'code',
                                displayName: 'Option labels',
                                validation: {
                                    schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                    defaultValue: ['yes', 'no'],
                                },
                            },
                        },
                        events: {
                            onSelectionChange: { displayName: 'On select' },
                        },
                        styles: {
                            textColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            activeColor: {
                                type: 'color',
                                displayName: 'Active color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        actions: [
                            {
                                handle: 'selectOption',
                                displayName: 'Select Option',
                                params: [
                                    {
                                        handle: 'option',
                                        displayName: 'Option',
                                    },
                                ],
                            },
                        ],
                        exposedVariables: {
                            value: true,
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Select' },
                                value: { value: '{{true}}' },
                                values: { value: '{{[true,false]}}' },
                                display_values: { value: '{{["yes", "no"]}}' },
                                visible: { value: '{{true}}' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '' },
                                activeColor: { value: '' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'RadioButton',
                        displayName: 'Radio Button',
                        description: 'Select one from multiple choices',
                        component: 'RadioButtonV2',
                        defaultSize: {
                            width: 12,
                            height: 43,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        validation: {
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select',
                                },
                                accordian: 'Data',
                            },
                            advanced: {
                                type: 'toggle',
                                displayName: 'Dynamic options',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                                accordian: 'Options',
                            },
                            schema: {
                                type: 'code',
                                displayName: 'Schema',
                                conditionallyRender: {
                                    key: 'advanced',
                                    value: true,
                                },
                                accordian: 'Options',
                            },
                            optionsLoadingState: {
                                type: 'toggle',
                                displayName: 'Options loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                                accordian: 'Options',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },

                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Enter tooltip text',
                                },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onSelectionChange: { displayName: 'On select' },
                        },
                        styles: {
                            labelColor: {
                                type: 'color',
                                displayName: 'Color',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'label',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' }, defaultValue: 'side' },
                                options: [
                                    { displayName: 'Side', value: 'side' },
                                    { displayName: 'Top', value: 'top' },
                                ],
                                accordian: 'label',
                            },
                            direction: {
                                type: 'switch',
                                displayName: 'Direction',
                                validation: { schema: { type: 'string' }, defaultValue: 'left' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'label',
                            },
                            labelWidth: {
                                type: 'slider',
                                displayName: 'Width',
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            auto: {
                                type: 'checkbox',
                                displayName: 'auto',
                                showLabel: false,
                                validation: { schema: { type: 'boolean' } },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            switchOnBackgroundColor: {
                                type: 'color',
                                displayName: 'Checked background',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                                tip: 'Checked background',
                                tooltipStyle: {},
                                tooltipPlacement: 'bottom',
                            },
                            switchOffBackgroundColor: {
                                type: 'color',
                                displayName: 'Unchecked background',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                                tip: 'Unchecked background',
                                tooltipStyle: {},
                                tooltipPlacement: 'bottom',
                            },
                            handleColor: {
                                type: 'color',
                                displayName: 'Handle color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            optionsTextColor: {
                                type: 'color',
                                displayName: 'Text',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 'default',
                                },
                                isFxNotRequired: true,
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'container',
                            },
                        },
                        actions: [
                            {
                                handle: 'selectOption',
                                displayName: 'Select option',
                                params: [{ handle: 'option', displayName: 'Option' }],
                            },
                            {
                                handle: 'deselectOption',
                                displayName: 'Deselect option',
                                params: [{ handle: 'option', displayName: 'Option' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: `{{true}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        exposedVariables: {
                            label: 'Select',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                mandatory: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Select' },
                                value: { value: '{{"2"}}' },
                                advanced: { value: `{{false}}` },
                                options: {
                                    value: [
                                        {
                                            label: 'option1',
                                            value: '1',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: false },
                                        },
                                        {
                                            label: 'option2',
                                            value: '2',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: true },
                                        },
                                        {
                                            label: 'option3',
                                            value: '3',
                                            disable: { value: false },
                                            visible: { value: true },
                                            default: { value: false },
                                        },
                                    ],
                                },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                optionsLoadingState: { value: '{{false}}' },
                                optionVisibility: { value: '{{[true, true, true]}}' },
                                optionDisable: { value: '{{[false, false, false]}}' },
                                schema: {
                                    value:
                                        "{{[\t{label: 'option1',value: '1',disable: false,visible: true,default: true},{label: 'option2',value: '2',disable: false,visible: true},{label: 'option3',value: '3',disable: false,visible: true}\t]}}",
                                },
                            },
                            events: [],
                            styles: {
                                labelColor: { value: '#11181C' },
                                direction: { value: 'left' },
                                alignment: { value: 'side' },
                                auto: { value: '{{false}}' },
                                labelWidth: { value: '20' },
                                borderColor: { value: '#FFFFFF' },
                                switchOffBackgroundColor: { value: '#FFFFFF' },
                                switchOnBackgroundColor: { value: '#4368E3' },
                                handleColor: { value: '#FFFFFF' },
                                optionsTextColor: { value: '#11181C' },
                                padding: { value: 'default' },
                            },
                        },
                    },
                    {
                        name: 'RangeSlider',
                        displayName: 'Range Slider',
                        description: 'Adjust value range',
                        component: 'RangeSlider',
                        defaultSize: {
                            width: 9,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            min: {
                                type: 'number',
                                displayName: 'Min',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 0,
                                },
                            },
                            max: {
                                type: 'number',
                                displayName: 'Max',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 100,
                                },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Value',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'array', element: { type: 'number' } }, { type: 'number' }],
                                    },
                                    defaultValue: 50,
                                },
                            },
                            enableTwoHandle: {
                                type: 'toggle',
                                displayName: 'Two handles',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                        },
                        styles: {
                            lineColor: {
                                type: 'color',
                                displayName: 'Line color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#375FCF',
                                },
                            },
                            handleColor: {
                                type: 'color',
                                displayName: 'Handle color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#375FCF',
                                },
                            },
                            trackColor: {
                                type: 'color',
                                displayName: 'Track color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#375FCF',
                                },
                            },
                            visibility: {
                                type: 'code',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {
                            value: null,
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: true },
                                showOnMobile: { value: false },
                            },
                            properties: {
                                min: {
                                    value: '{{0}}',
                                },
                                max: {
                                    value: '{{100}}',
                                },
                                value: {
                                    value: '{{50}}',
                                },
                                enableTwoHandle: { value: false },
                            },
                            events: [],
                            styles: {
                                lineColor: { value: '' },
                                handleColor: { value: '' },
                                trackColor: { value: '' },
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'RichTextEditor',
                        displayName: 'Text Editor',
                        description: 'Rich text editor',
                        component: 'RichTextEditor',
                        defaultSize: {
                            width: 16,
                            height: 210,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Placeholder text',
                                },
                            },
                            defaultValue: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Default text',
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Show loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            value: '',
                        },
                        actions: [
                            {
                                handle: 'setValue',
                                displayName: 'Set value',
                                params: [{ handle: 'value', displayName: 'Value', defaultValue: 'New text' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: `{{true}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                placeholder: { value: 'Placeholder text' },
                                defaultValue: { value: '' },
                                loadingState: { value: `{{false}}` },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },

                    {
                        name: 'PDF',
                        displayName: 'PDF',
                        description: 'Embed PDF documents',
                        component: 'PDF',
                        properties: {
                            url: {
                                type: 'code',
                                displayName: 'File URL',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/general.pdf',
                                },
                            },
                            scale: {
                                type: 'toggle',
                                displayName: 'Scale page to width',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                            },
                            pageControls: {
                                type: 'toggle',
                                displayName: 'Show page controls',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                            },
                            showDownloadOption: {
                                type: 'toggle',
                                displayName: 'Show download button',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                            },
                        },
                        defaultSize: {
                            width: 20,
                            height: 640,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                            },
                        },
                        exposedVariables: {},
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                url: {
                                    value:
                                        'https://upload.wikimedia.org/wikipedia/commons/e/ee/Guideline_No._GD-Ed-2214_Marman_Clamp_Systems_Design_Guidelines.pdf',
                                },
                                scale: {
                                    value: '{{true}}',
                                },
                                pageControls: {
                                    value: `{{true}}`,
                                },
                                showDownloadOption: {
                                    value: `{{true}}`,
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },

                    {
                        name: 'QrScanner',
                        displayName: 'QR Scanner',
                        description: 'Scan QR codes and hold its data',
                        component: 'QrScanner',
                        defaultSize: {
                            width: 10,
                            height: 300,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {},
                        events: {
                            onDetect: { displayName: 'On detect' },
                        },
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            lastDetectedValue: '',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{true}}' },
                            },
                            properties: {},
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'StarRating',
                        displayName: 'Rating',
                        description: 'Star rating',
                        component: 'StarRating',
                        defaultSize: {
                            width: 10,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Select your rating',
                                },
                            },
                            maxRating: {
                                type: 'code',
                                displayName: 'Number of stars',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 5,
                                },
                            },
                            defaultSelected: {
                                type: 'code',
                                displayName: 'Default no of selected stars',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 5,
                                },
                            },
                            allowHalfStar: {
                                type: 'toggle',
                                displayName: 'Enable half star',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            tooltips: {
                                type: 'code',
                                displayName: 'Tooltips',
                                validation: {
                                    schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                    defaultValue: '[]',
                                },
                            },
                        },
                        events: {
                            onChange: { displayName: 'On Change' },
                        },
                        styles: {
                            textColor: {
                                type: 'color',
                                displayName: 'Star color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#ffb400',
                                },
                            },
                            labelColor: {
                                type: 'color',
                                displayName: 'Label color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            value: 0,
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Select your rating' },
                                maxRating: { value: '5' },
                                defaultSelected: { value: '5' },
                                allowHalfStar: { value: '{{false}}' },
                                visible: { value: '{{true}}' },
                                tooltips: { value: '{{[]}}' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '#ffb400' },
                                labelColor: { value: '' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'Spinner',
                        displayName: 'Spinner',
                        description: 'Indicate loading state',
                        component: 'Spinner',
                        defaultSize: {
                            width: 4,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {},
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            colour: {
                                type: 'color',
                                displayName: 'Colour',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#0565ff',
                                },
                            },
                            size: {
                                type: 'select',
                                displayName: 'Size',
                                options: [
                                    { name: 'small', value: 'sm' },
                                    { name: 'large', value: 'lg' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'sm',
                                },
                            },
                        },
                        exposedVariables: {},
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {},
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                size: { value: 'sm' },
                                colour: { value: '#0565ff' },
                            },
                        },
                    },
                    {
                        name: 'Statistics',
                        displayName: 'Statistics',
                        description: 'Show key metrics',
                        component: 'Statistics',
                        defaultSize: {
                            width: 9,
                            height: 152,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            primaryValueLabel: {
                                type: 'code',
                                displayName: 'Primary value label',
                                validation: { schema: { type: 'string' }, defaultValue: 'This months earnings' },
                            },
                            primaryValue: {
                                type: 'code',
                                displayName: 'Primary value',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '682.3',
                                },
                            },
                            hideSecondary: {
                                type: 'toggle',
                                displayName: 'Hide secondary value',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                            },
                            secondaryValueLabel: {
                                type: 'code',
                                displayName: 'Secondary value label',
                                validation: { schema: { type: 'string' }, defaultValue: 'Last month' },
                            },
                            secondaryValue: {
                                type: 'code',
                                displayName: 'Secondary value',
                                validation: { schema: { type: 'string' }, defaultValue: '2.85' },
                            },
                            secondarySignDisplay: {
                                type: 'code',
                                displayName: 'Secondary sign display',

                                validation: { schema: { type: 'string' }, defaultValue: 'positive' },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                            },
                        },
                        events: {},
                        styles: {
                            primaryLabelColour: {
                                type: 'color',
                                displayName: 'Primary label colour',
                                validation: { schema: { type: 'string' }, defaultValue: '#8092AB' },
                            },
                            primaryTextColour: {
                                type: 'color',
                                displayName: 'Primary text  colour',
                                validation: { schema: { type: 'string' }, defaultValue: '#000000' },
                            },
                            secondaryLabelColour: {
                                type: 'color',
                                displayName: 'Secondary label colour',
                                validation: { schema: { type: 'string' }, defaultValue: '#8092AB' },
                            },
                            secondaryTextColour: {
                                type: 'color',
                                displayName: 'Secondary text colour',
                                validation: { schema: { type: 'string' }, defaultValue: '#36AF8B' },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                            },
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                primaryValueLabel: { value: 'This months earnings' },
                                primaryValue: { value: '682.3' },
                                secondaryValueLabel: { value: 'Last month' },
                                secondaryValue: { value: '2.85' },
                                secondarySignDisplay: { value: 'positive' },
                                loadingState: { value: `{{false}}` },
                            },
                            events: [],
                            styles: {
                                primaryLabelColour: { value: '#8092AB' },
                                primaryTextColour: { value: '#000000' },
                                secondaryLabelColour: { value: '#8092AB' },
                                secondaryTextColour: { value: '#36AF8B' },
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Steps',
                        displayName: 'Steps',
                        description: 'Step-by-step navigation aid',
                        component: 'Steps',
                        properties: {
                            steps: {
                                type: 'code',
                                displayName: 'Steps',
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: { type: 'object', object: { id: { type: 'number' } } },
                                    },
                                    defaultValue: `[{ name: 'step 1'}, {name: 'step 2'}]`,
                                },
                            },
                            currentStep: {
                                type: 'code',
                                displayName: 'Current step',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 1,
                                },
                            },
                            stepsSelectable: {
                                type: 'toggle',
                                displayName: 'Steps selectable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        defaultSize: {
                            width: 22,
                            height: 38,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {
                            onSelect: { displayName: 'On select' },
                        },
                        styles: {
                            color: {
                                type: 'color',
                                displayName: 'Color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            theme: {
                                type: 'select',
                                displayName: 'Theme',
                                options: [
                                    { name: 'titles', value: 'titles' },
                                    { name: 'numbers', value: 'numbers' },
                                    { name: 'plain', value: 'plain' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'titles',
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {
                            currentStepId: '3',
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                steps: {
                                    value: `{{ [{ name: 'step 1', tooltip: 'some tooltip', id: 1},{ name: 'step 2', tooltip: 'some tooltip', id: 2},{ name: 'step 3', tooltip: 'some tooltip', id: 3},{ name: 'step 4', tooltip: 'some tooltip', id: 4},{ name: 'step 5', tooltip: 'some tooltip', id: 5}]}}`,
                                },
                                currentStep: { value: '{{3}}' },
                                stepsSelectable: { value: true },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                theme: { value: 'titles' },
                                color: { value: '' },
                                textColor: { value: '' },
                            },
                        },
                    },
                    {
                        name: 'SvgImage',
                        displayName: 'Svg Image',
                        description: 'Display SVG graphics',
                        component: 'SvgImage',
                        properties: {
                            data: {
                                type: 'code',
                                displayName: 'Svg  data',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue:
                                        "<svg xmlns='http://www.w3.org/2000/svg' class='icon' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><rect x='4' y='4' width='6' height='6' rx='1' /><rect x='4' y='14' width='6' height='6' rx='1' /><rect x='14' y='14' width='6' height='6' rx='1' /><line x1='14' y1='7' x2='20' y2='7' /><line x1='17' y1='4' x2='17' y2='10' /></svg>",
                                },
                            },
                        },
                        defaultSize: {
                            width: 4,
                            height: 50,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {
                            value: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                data: {
                                    value:
                                        '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><line x1="14" y1="7" x2="20" y2="7" /><line x1="17" y1="4" x2="17" y2="10" /></svg>',
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Table',
                        displayName: 'Table',
                        description: 'Display paginated tabular data',
                        component: 'Table',
                        properties: {
                            title: {
                                type: 'string',
                                displayName: 'Title',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            data: {
                                type: 'code',
                                displayName: 'Table data',
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: { type: 'object' },
                                    },
                                    defaultValue: "[{ id: 1, name: 'Sarah', email: 'sarah@mail.com' }]",
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            columns: {
                                type: 'array',
                                displayName: 'Table Columns',
                            },
                            useDynamicColumn: {
                                type: 'toggle',
                                displayName: 'Use dynamic column',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            columnData: {
                                type: 'code',
                                displayName: 'Column data',
                                validation: {
                                    schema: { type: 'array', element: { type: 'object' } },
                                    defaultValue:
                                        "{{[{name: 'email', key: 'email', id: '1'}, {name: 'Full name', key: 'name', id: '2', isEditable: true}]}}}",
                                },
                            },
                            rowsPerPage: {
                                type: 'code',
                                displayName: 'Number of rows per page',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 10,
                                },
                            },

                            enableNextButton: {
                                type: 'toggle',
                                displayName: 'Enable next page button',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            enabledSort: {
                                type: 'toggle',
                                displayName: 'Enable column sorting',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            hideColumnSelectorButton: {
                                type: 'toggle',
                                displayName: 'Hide column selector button',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            enablePrevButton: {
                                type: 'toggle',
                                displayName: 'Enable previous page button',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                            },
                            totalRecords: {
                                type: 'code',
                                displayName: 'Total records server side',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 10,
                                },
                            },
                            enablePagination: {
                                type: 'toggle',
                                displayName: 'Enable pagination',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            serverSidePagination: {
                                type: 'clientServerSwitch',
                                displayName: 'Type',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                options: [
                                    { displayName: 'Client side', value: 'clientSide' },
                                    { displayName: 'Server side', value: 'serverSide' },
                                ],
                            },
                            serverSideSearch: {
                                type: 'clientServerSwitch',
                                displayName: 'Type',
                                options: [
                                    { displayName: 'Client side', value: 'clientSide' },
                                    { displayName: 'Server side', value: 'serverSide' },
                                ],
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            serverSideSort: {
                                type: 'clientServerSwitch',
                                displayName: 'Type',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                options: [
                                    { displayName: 'Client side', value: 'clientSide' },
                                    { displayName: 'Server side', value: 'serverSide' },
                                ],
                            },
                            serverSideFilter: {
                                type: 'clientServerSwitch',
                                displayName: 'Type',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                options: [
                                    { displayName: 'Client side', value: 'clientSide' },
                                    { displayName: 'Server side', value: 'serverSide' },
                                ],
                                defaultValue: 'clientSide',
                            },
                            actionButtonBackgroundColor: {
                                type: 'color',
                                displayName: 'Background color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#375FCF',
                                },
                            },
                            actionButtonTextColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff',
                                },
                            },
                            displaySearchBox: {
                                type: 'toggle',
                                displayName: 'Show search',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            showDownloadButton: {
                                type: 'toggle',
                                displayName: 'Show download button',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            showFilterButton: {
                                type: 'toggle',
                                displayName: 'Enable filtering',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            showBulkUpdateActions: {
                                type: 'toggle',
                                displayName: 'Show update buttons',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            allowSelection: {
                                type: 'toggle',
                                displayName: 'Allow selection',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            showBulkSelector: {
                                type: 'toggle',
                                displayName: 'Bulk selection',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            highlightSelectedRow: {
                                type: 'toggle',
                                displayName: 'Highlight selected row',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            defaultSelectedRow: {
                                type: 'code',
                                displayName: 'Default selected row',
                                validation: {
                                    schema: {
                                        type: 'object',
                                    },
                                    defaultValue: { id: 1 },
                                },
                            },

                            showAddNewRowButton: {
                                type: 'toggle',
                                displayName: 'Show add new row button',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            selectRowOnCellEdit: {
                                type: 'toggle',
                                displayName: 'Select row on cell edit',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                            },
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop ' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        defaultSize: {
                            width: 35,
                            height: 456,
                        },
                        events: {
                            onRowHovered: { displayName: 'Row hovered' },
                            onRowClicked: { displayName: 'Row clicked' },
                            onBulkUpdate: { displayName: 'Save changes' },
                            onPageChanged: { displayName: 'Page changed' },
                            onSearch: { displayName: 'Search' },
                            onCancelChanges: { displayName: 'Cancel changes' },
                            onSort: { displayName: 'Sort applied' },
                            onCellValueChanged: { displayName: 'Cell value changed' },
                            onFilterChanged: { displayName: 'Filter changed' },
                            onNewRowsAdded: { displayName: 'Add new rows' },
                            onTableDataDownload: { displayName: 'Download data' },
                        },
                        styles: {
                            textColor: {
                                type: 'color',
                                displayName: 'Text Color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000',
                                },
                                accordian: 'Data',
                            },
                            columnHeaderWrap: {
                                type: 'switch',
                                displayName: 'Column header',
                                validation: { schema: { type: 'string' } },
                                accordian: 'Data',
                                options: [
                                    { displayName: 'Fixed', value: 'fixed' },
                                    { displayName: 'Wrap', value: 'wrap' },
                                ],
                            },
                            headerCasing: {
                                type: 'switch',
                                displayName: 'Header casing',
                                validation: { schema: { type: 'string' } },
                                accordian: 'Data',
                                options: [
                                    { displayName: 'AA', value: 'uppercase' },
                                    { displayName: 'As typed', value: 'none' },
                                ],
                            },
                            tableType: {
                                type: 'select',
                                displayName: 'Row style',
                                options: [
                                    { name: 'Regular', value: 'table-classic' },
                                    { name: 'Bordered', value: 'table-bordered' },
                                    { name: 'Striped', value: 'table-striped' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'table-classic',
                                },
                                accordian: 'Data',
                            },
                            cellSize: {
                                type: 'select',
                                displayName: 'Cell height',
                                options: [
                                    { name: 'Regular', value: 'regular' },
                                    { name: 'Condensed', value: 'condensed' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'regular',
                                },
                                accordian: 'Data',
                            },
                            contentWrap: {
                                type: 'toggle',
                                showLabel: false,
                                toggleLabel: 'Content wrap',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'boolean' }] },
                                },
                                accordian: 'Data',
                            },
                            maxRowHeight: {
                                type: 'switch',
                                displayName: 'Max row height',
                                validation: { schema: { type: 'string' } },
                                accordian: 'Data',
                                options: [
                                    { displayName: 'Auto', value: 'auto' },
                                    { displayName: 'Custom', value: 'custom' },
                                ],
                                conditionallyRender: {
                                    key: 'contentWrap',
                                    value: true,
                                },
                            },
                            maxRowHeightValue: {
                                type: 'tableRowHeightInput',
                                isFxNotRequired: true,
                                showLabel: false,
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                },
                                accordian: 'Data',
                                conditionallyRender: [
                                    {
                                        key: 'maxRowHeight',
                                        value: 'custom',
                                    },
                                    {
                                        key: 'contentWrap',
                                        value: true,
                                    },
                                ],
                            },
                            actionButtonRadius: {
                                type: 'numberInput',
                                displayName: 'Button radius',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'boolean' }] },
                                },
                                accordian: 'Action button',
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'Container',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: false,
                                },
                                accordian: 'Container',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box Shadow',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'Container',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'Container',
                            },
                        },
                        exposedVariables: {
                            selectedRow: {},
                            changeSet: {},
                            dataUpdates: [],
                            pageIndex: 1,
                            searchText: '',
                            selectedRows: [],
                            filters: [],
                        },
                        actions: [
                            {
                                handle: 'setPage',
                                displayName: 'Set page',
                                params: [
                                    {
                                        handle: 'page',
                                        displayName: 'Page',
                                        defaultValue: '{{1}}',
                                    },
                                ],
                            },
                            {
                                handle: 'selectRow',
                                displayName: 'Select row',
                                params: [
                                    { handle: 'key', displayName: 'Key' },
                                    { handle: 'value', displayName: 'Value' },
                                ],
                            },
                            {
                                handle: 'deselectRow',
                                displayName: 'Deselect row',
                            },
                            {
                                handle: 'discardChanges',
                                displayName: 'Discard Changes',
                            },
                            {
                                handle: 'discardNewlyAddedRows',
                                displayName: 'Discard newly added rows',
                            },
                            {
                                displayName: 'Download table data',
                                handle: 'downloadTableData',
                                params: [
                                    {
                                        handle: 'type',
                                        displayName: 'Type',
                                        options: [
                                            { name: 'Download as Excel', value: 'xlsx' },
                                            { name: 'Download as CSV', value: 'csv' },
                                            { name: 'Download as PDF', value: 'pdf' },
                                        ],
                                        defaultValue: `{{Download as Excel}}`,
                                        type: 'select',
                                    },
                                ],
                            },
                            {
                                handle: 'selectAllRows',
                                displayName: 'Select all rows',
                            },
                            {
                                handle: 'deselectAllRows',
                                displayName: 'Deselect all rows',
                            },
                            {
                                handle: 'setFilters',
                                displayName: 'Set filters',
                                params: [{ handle: 'parameters', displayName: 'Parameters' }],
                            },
                            {
                                handle: 'clearFilters',
                                displayName: 'Clear filters',
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                title: { value: 'Table' },
                                visible: { value: '{{true}}' },
                                loadingState: { value: '{{false}}' },
                                data: {
                                    value:
                                        "{{ [ \n\t\t{ id: 1, name: 'Olivia Nguyen', email: 'olivia.nguyen@example.com', date: '15/05/2022', phone: 9876543210, interest: ['Reading', 'Traveling','Photography'], photo: 'https://reqres.in/img/faces/7-image.jpg' }, \n\t\t{ id: 2, name: 'Liam Patel', email: 'liam.patel@example.com', date: '20/09/2021', phone: 8765432109, interest: ['Cooking','Gardening','Hiking'], photo: 'https://reqres.in/img/faces/5-image.jpg' }, \n\t\t{ id: 3, name: 'Sophia Reyes', email: 'sophia.reyes@example.com', date: '01/01/2023', phone: 7654321098, interest: ['Music','Dancing','Crafting'], photo: 'https://reqres.in/img/faces/3-image.jpg' }, \n\t\t{ id: 4, name: 'Jacob Hernandez', email: 'jacob.hernandez@example.com', date: '10/11/2022', phone: 6543210987, interest: ['Reading', 'Traveling', 'Volunteering'], photo: 'https://reqres.in/img/faces/1-image.jpg' }, \n\t\t{ id: 5, name: 'William Sanchez', email: 'william.sanchez@example.com', date: '07/01/2021', phone: 4321098765, interest: ['Music', 'Dancing', 'Hiking'], photo: 'https://reqres.in/img/faces/4-image.jpg' }, \n\t\t{ id: 6, name: 'Ethan Morales', email: 'ethan.morales@example.com', date: '05/11/2021', phone: 2109876543, interest: ['Cooking', 'Traveling', 'Photography'], photo: 'https://reqres.in/img/faces/6-image.jpg' }, \n\t\t{ id: 7, name: 'Mia Tiana', email: 'mia.tiana@example.com', date: '21/11/2022', phone: 1098705217, interest: ['Music', 'Gardening', 'Hiking'], photo: 'https://reqres.in/img/faces/2-image.jpg' }, \n\t\t{ id: 8, name: 'Lucas Ramirez', email: 'lucas.ramirez@example.com', date: '31/03/2023', phone: 9876543210, interest: ['Reading', 'Dancing', 'Crafting'], photo: 'https://reqres.in/img/faces/9-image.jpg' }, \n\t\t{ id: 9, name: 'Alexander Vela', email: 'alexander.vela@example.com', date: '07/09/2022', phone: 7654321098, interest: ['Music','Gardening','Photography'], photo: 'https://reqres.in/img/faces/8-image.jpg' }, \n\t\t{ id: 10, name: 'Michael Reyes', email: 'michael.reyes@example.com', date: '25/12/2021', phone: 5432109876, interest: ['Cooking','Crafting','Volunteering'], photo: 'https://reqres.in/img/faces/10-image.jpg' } \n] }}",
                                },
                                useDynamicColumn: { value: '{{false}}' },
                                columnData: {
                                    value:
                                        "{{[{name: 'email', key: 'email', id: '1'}, {name: 'Full name', key: 'name', id: '2', isEditable: true}]}}",
                                },
                                rowsPerPage: { value: '{{10}}' },
                                serverSidePagination: { value: '{{false}}' },
                                enableNextButton: { value: '{{true}}' },
                                enablePrevButton: { value: '{{true}}' },
                                totalRecords: { value: '{{10}}' },
                                enablePagination: { value: '{{true}}' },
                                serverSideSort: { value: '{{false}}' },
                                serverSideFilter: { value: '{{false}}' },
                                displaySearchBox: { value: '{{true}}' },
                                showDownloadButton: { value: '{{true}}' },
                                showFilterButton: { value: '{{true}}' },
                                autogenerateColumns: { value: true, generateNestedColumns: true },
                                isAllColumnsEditable: { value: '{{false}}' },
                                columns: {
                                    value: [
                                        {
                                            name: 'id',
                                            key: 'id',
                                            id: 'e3ecbf7fa52c4d7210a93edb8f43776267a489bad52bd108be9588f790126737',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnSize: 30,
                                            columnType: 'string',
                                        },
                                        {
                                            name: 'photo',
                                            key: 'photo',
                                            id: 'f23b7d134b2e490ea41e3bb8eeb8c8e37472af243bf6b70d5af294482097e3a2',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnType: 'image',
                                            objectFit: 'contain',
                                            borderRadius: '100',
                                            columnSize: 70,
                                        },
                                        {
                                            name: 'name',
                                            key: 'name',
                                            id: '5d2a3744a006388aadd012fcc15cc0dbcb5f9130e0fbb64c558561c97118754a',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnSize: 130,
                                            columnType: 'string',
                                        },
                                        {
                                            name: 'email',
                                            key: 'email',
                                            id: 'afc9a5091750a1bd4760e38760de3b4be11a43452ae8ae07ce2eebc569fe9a7f',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnSize: 230,
                                            columnType: 'string',
                                        },
                                        {
                                            name: 'date',
                                            key: 'date',
                                            id: '27b75c8af9d34d1eaa1f9bb7f8f9f7b0abf1823e799748c8bb57e74f53b2c1dc',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnType: 'datepicker',
                                            isTimeChecked: false,
                                            dateFormat: 'DD/MM/YYYY',
                                            parseDateFormat: 'DD/MM/YYYY',
                                            isDateSelectionEnabled: true,
                                            columnSize: 130,
                                        },
                                        {
                                            name: 'mobile_number',
                                            key: 'mobile_number',
                                            id: '9c2e3c40572a4aefb8e179ee39a0e1ac9dc2b2e6634be56e1c05be13c3d1de56',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnType: 'number',
                                            columnSize: 140,
                                        },
                                        {
                                            name: 'interest',
                                            key: 'interest',
                                            id: 'f23b7d134b2e490ea41e3bb8eeb8c8e37472af243bf6b70d5af294482097e3a1',
                                            autogenerated: true,
                                            fxActiveFields: [],
                                            columnType: 'newMultiSelect',
                                            columnSize: 300,
                                            options: [
                                                {
                                                    label: 'Reading',
                                                    value: 'Reading',
                                                },
                                                {
                                                    label: 'Traveling',
                                                    value: 'Traveling',
                                                },
                                                {
                                                    label: 'Photography',
                                                    value: 'Photography',
                                                },
                                                {
                                                    label: 'Music',
                                                    value: 'Music',
                                                },
                                                {
                                                    label: 'Cooking',
                                                    value: 'Cooking',
                                                },
                                                {
                                                    label: 'Crafting',
                                                    value: 'Crafting',
                                                },
                                                {
                                                    label: 'Voluntering',
                                                    value: 'Voluntering',
                                                },
                                                {
                                                    label: 'Garndening',
                                                    value: 'Garndening',
                                                },
                                                {
                                                    label: 'Dancing',
                                                    value: 'Dancing',
                                                },
                                                {
                                                    label: 'Hiking',
                                                    value: 'Hiking',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                showBulkUpdateActions: { value: '{{true}}' },
                                showBulkSelector: { value: '{{false}}' },
                                highlightSelectedRow: { value: '{{false}}' },
                                columnSizes: { value: '{{({})}}' },
                                actions: { value: [] },
                                enabledSort: { value: '{{true}}' },
                                hideColumnSelectorButton: { value: '{{false}}' },
                                defaultSelectedRow: { value: '{{{"id":1}}}' },
                                showAddNewRowButton: { value: '{{true}}' },
                                allowSelection: { value: '{{true}}' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '#000' },
                                columnHeaderWrap: { value: 'fixed' },
                                headerCasing: { value: 'uppercase' },
                                actionButtonRadius: { value: '0' },
                                cellSize: { value: 'regular' },
                                borderRadius: { value: '8' },
                                tableType: { value: 'table-classic' },
                                maxRowHeight: { value: 'auto' },
                                maxRowHeightValue: { value: '{{0}}' }, // Setting it here as 0 since TableRowHeightInput component will set the value
                                contentWrap: { value: '{{true}}' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                                padding: { value: 'default' },
                            },
                        },
                    },
                    {
                        name: 'Tabs',
                        displayName: 'Tabs',
                        description: 'Organize content in tabs',
                        defaultSize: {
                            width: 30,
                            height: 300,
                        },
                        defaultChildren: [
                            {
                                componentName: 'Image',
                                layout: {
                                    top: 60,
                                    left: 17,
                                    height: 100,
                                },
                                tab: 0,
                                properties: ['source'],
                                defaultValue: {
                                    source: 'https://uploads-ssl.webflow.com/6266634263b9179f76b2236e/62666392f32677b5cb2fb84b_logo.svg',
                                },
                            },
                            {
                                componentName: 'Text',
                                layout: {
                                    top: 100,
                                    left: 5,
                                    height: 50,
                                    width: 34,
                                },
                                tab: 1,
                                properties: ['text'],
                                defaultValue: {
                                    text: 'Open-source low-code framework to build & deploy internal tools within minutes.',
                                },
                            },
                            {
                                componentName: 'Table',
                                layout: {
                                    top: 0,
                                    left: 1,
                                    width: 41,
                                    height: 250,
                                },
                                tab: 2,
                            },
                        ],
                        component: 'Tabs',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            tabs: {
                                type: 'code',
                                displayName: 'Tabs',
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: {
                                            type: 'object',
                                            object: {
                                                id: {
                                                    type: 'union',
                                                    schemas: [{ type: 'string' }, { type: 'number' }],
                                                },
                                            },
                                        },
                                    },
                                    defaultValue: [
                                        { title: 'Home', id: '0' },
                                        { title: 'Profile', id: '1' },
                                        { title: 'Settings', id: '2' },
                                    ],
                                },
                            },
                            defaultTab: {
                                type: 'code',
                                displayName: 'Default tab',
                                validation: {
                                    schema: {
                                        type: 'union',
                                        schemas: [{ type: 'string' }, { type: 'number' }],
                                    },
                                    defaultValue: '0',
                                },
                            },
                            hideTabs: {
                                type: 'toggle',
                                displayName: 'Hide tabs',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            renderOnlyActiveTab: {
                                type: 'toggle',
                                displayName: 'Render only active tab',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                        },
                        events: { onTabSwitch: { displayName: 'On tab switch' } },
                        styles: {
                            highlightColor: {
                                type: 'color',
                                displayName: 'Highlight color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#375FCF',
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: {
                                        type: 'boolean',
                                    },
                                    defaultValue: false,
                                },
                            },
                            tabWidth: {
                                type: 'select',
                                displayName: 'Tab width',
                                options: [
                                    { name: 'Auto', value: 'auto' },
                                    { name: 'Equally split', value: 'split' },
                                ],
                            },
                        },
                        actions: [
                            {
                                handle: 'setTab',
                                displayName: 'Set current tab',
                                params: [
                                    {
                                        handle: 'id',
                                        displayName: 'Id',
                                    },
                                ],
                            },
                        ],
                        exposedVariables: { currentTab: '' },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                tabs: {
                                    value:
                                        "{{[ \n\t\t{ title: 'Home', id: '0' }, \n\t\t{ title: 'Profile', id: '1' }, \n\t\t{ title: 'Settings', id: '2' } \n ]}}",
                                },
                                defaultTab: { value: '0' },
                                hideTabs: { value: false },
                                renderOnlyActiveTab: { value: false },
                            },
                            events: [],
                            styles: {
                                highlightColor: { value: '#375FCF' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                tabWidth: { value: 'auto' },
                            },
                        },
                    },
                    {
                        name: 'Tags',
                        displayName: 'Tags',
                        description: 'Display tag labels',
                        component: 'Tags',
                        defaultSize: {
                            width: 8,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            data: {
                                type: 'code',
                                displayName: 'Tags',
                                validation: {
                                    schema: {
                                        type: 'array',
                                        element: {
                                            type: 'object',
                                            object: { title: { type: 'string' }, color: { type: 'string' }, textColor: { type: 'string' } },
                                        },
                                    },
                                    defaultValue:
                                        "{{ [{ title: 'success', color: '#2fb344', textColor: '#fff' }, { title: 'info', color: '#206bc4', textColor: '#fff'  }] }}",
                                },
                            },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {},
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                data: {
                                    value:
                                        "{{ [ \n\t\t{ title: 'success', color: '#2fb344', textColor: '#fff' }, \n\t\t{ title: 'info', color: '#206bc4', textColor: '#fff'  }, \n\t\t{ title: 'warning', color: '#f59f00', textColor: '#fff'  }, \n\t\t{ title: 'danger', color: '#d63939', textColor: '#fff' } ] }}",
                                },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Text',
                        displayName: 'Text',
                        description: 'Display text or HTML',
                        component: 'Text',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            textFormat: {
                                type: 'switch',
                                displayName: 'Text Format',
                                options: [
                                    { displayName: 'Plain text', value: 'plainText' },
                                    { displayName: 'Markdown', value: 'markdown' },
                                    { displayName: 'HTML', value: 'html' },
                                ],
                                isFxNotRequired: true,
                                defaultValue: { value: 'plainText' },
                                fullWidth: true,
                            },
                            text: {
                                type: 'code',
                                displayName: 'TextComponentTextInput', // Keeping this name unique so that we can filter it in Codehinter
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Hello, there!',
                                },
                                showLabel: false,
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Show loading state',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: 'Tooltip text' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        defaultSize: {
                            width: 6,
                            height: 40,
                        },
                        events: {
                            onClick: { displayName: 'On click' },
                            onHover: { displayName: 'On hover' },
                        },
                        styles: {
                            textSize: {
                                type: 'numberInput',
                                displayName: 'Size',
                                validation: {
                                    schema: [{ type: 'string' }, { type: 'number' }],
                                    defaultValue: 14,
                                },
                                accordian: 'Text',
                            },
                            fontWeight: {
                                type: 'select',
                                displayName: 'Weight',
                                options: [
                                    { name: 'normal', value: 'normal' },
                                    { name: 'bold', value: 'bold' },
                                    { name: 'lighter', value: 'lighter' },
                                    { name: 'bolder', value: 'bolder' },
                                ],
                                accordian: 'Text',
                            },
                            fontStyle: {
                                type: 'switch',
                                displayName: 'Style',
                                options: [
                                    { displayName: 'Normal', value: 'normal', iconName: 'minus' },
                                    { displayName: 'Oblique', value: 'oblique', iconName: 'oblique' },
                                    { displayName: 'Italic', value: 'italic', iconName: 'italic' },
                                ],
                                isIcon: true,
                                accordian: 'Text',
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'Text',
                            },
                            isScrollRequired: {
                                type: 'switch',
                                displayName: 'Scroll',
                                options: [
                                    { displayName: 'Enable', value: 'enabled' },
                                    { displayName: 'Disable', value: 'disabled' },
                                ],
                                accordian: 'Text',
                            },
                            lineHeight: { type: 'numberInput', displayName: 'Line height', accordian: 'Text' },
                            textIndent: { type: 'numberInput', displayName: 'Text indent', accordian: 'Text' },
                            textAlign: {
                                type: 'alignButtons',
                                displayName: 'Alignment',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'left',
                                },
                                accordian: 'Text',
                            },
                            verticalAlignment: {
                                type: 'switch',
                                displayName: '',
                                validation: { schema: { type: 'string' }, defaultValue: 'center' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignverticallytop', value: 'top', iconName: 'alignverticallytop' },
                                    { displayName: 'alignverticallycenter', value: 'center', iconName: 'alignverticallycenter' },
                                    { displayName: 'alignverticallybottom', value: 'bottom', iconName: 'alignverticallybottom' },
                                ],
                                accordian: 'Text',
                                isFxNotRequired: true,
                            },
                            decoration: {
                                type: 'switch',
                                displayName: 'Decoration',
                                isIcon: true,
                                options: [
                                    { displayName: 'none', value: 'none', iconName: 'minus' },
                                    { displayName: 'underline', value: 'underline', iconName: 'underline' },
                                    { displayName: 'overline', value: 'overline', iconName: 'overline' },
                                    { displayName: 'line-through', value: 'line-through', iconName: 'linethrough' },
                                ],
                                accordian: 'Text',
                            },
                            transformation: {
                                type: 'switch',
                                displayName: 'Transformation',
                                isIcon: true,
                                options: [
                                    { displayName: 'none', value: 'none', iconName: 'minus' },
                                    { displayName: 'uppercase', value: 'uppercase', iconName: 'uppercase' },
                                    { displayName: 'lowercase', value: 'lowercase', iconName: 'lowercase' },
                                    { displayName: 'capitalize', value: 'capitalize', iconName: 'capitalize' },
                                ],
                                accordian: 'Text',
                            },
                            letterSpacing: { type: 'numberInput', displayName: 'Letter spacing', accordian: 'Text' },
                            wordSpacing: { type: 'numberInput', displayName: 'Word spacing', accordian: 'Text' },
                            fontVariant: {
                                type: 'select',
                                displayName: 'Font variant',
                                options: [
                                    { name: 'normal', value: 'normal' },
                                    { name: 'small-caps', value: 'small-caps' },
                                    { name: 'initial', value: 'initial' },
                                    { name: 'inherit', value: 'inherit' },
                                ],
                                accordian: 'Text',
                            },

                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#fff00000',
                                },
                                accordian: 'Container',
                                colorPickerPosition: 'top',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                                accordian: 'Container',
                                colorPickerPosition: 'top',
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 6 },
                                accordian: 'Container',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000090',
                                },
                                accordian: 'Container',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: { schema: { type: 'string' }, defaultValue: 'default' },
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'Container',
                                isFxNotRequired: true,
                            },
                        },
                        exposedVariables: {
                            text: 'Hello, there!',
                        },
                        actions: [
                            {
                                handle: 'setText',
                                displayName: 'Set text',
                                params: [{ handle: 'text', displayName: 'Text', defaultValue: 'New text' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'setVisibility', displayName: 'Value', defaultValue: `{{true}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                textFormat: { value: 'html' },
                                text: { value: `Hello {{globals.currentUser.firstName}}👋` },
                                loadingState: { value: `{{false}}` },
                                disabledState: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                            },
                            events: [],
                            styles: {
                                backgroundColor: { value: '#fff00000' },
                                textColor: { value: '#000000' },
                                textSize: { value: '{{14}}' },
                                textAlign: { value: 'left' },
                                fontWeight: { value: 'normal' },
                                decoration: { value: 'none' },
                                transformation: { value: 'none' },
                                fontStyle: { value: 'normal' },
                                lineHeight: { value: '{{1.5}}' },
                                textIndent: { value: '{{0}}' },
                                letterSpacing: { value: '{{0}}' },
                                wordSpacing: { value: '{{0}}' },
                                fontVariant: { value: 'normal' },
                                verticalAlignment: { value: 'center' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                                borderColor: { value: '' },
                                borderRadius: { value: '{{6}}' },
                                isScrollRequired: { value: 'enabled' },
                            },
                        },
                    },
                    {
                        name: 'Textarea',
                        displayName: 'Text Area',
                        description: 'Multi-line text input',
                        component: 'TextArea',
                        defaultSize: {
                            width: 6,
                            height: 100,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'default text',
                                },
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Placeholder text',
                                },
                            },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                            borderRadius: {
                                type: 'code',
                                displayName: 'Border radius',
                                validation: {
                                    schema: { type: 'number' },
                                    defaultValue: 4,
                                },
                            },
                        },
                        exposedVariables: {
                            value:
                                'ToolJet is an open-source low-code platform for building and deploying internal tools with minimal engineering efforts 🚀',
                        },
                        actions: [
                            {
                                handle: 'setText',
                                displayName: 'Set Text',
                                params: [{ handle: 'text', displayName: 'text', defaultValue: 'New Text' }],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                value: {
                                    value:
                                        'ToolJet is an open-source low-code platform for building and deploying internal tools with minimal engineering efforts 🚀',
                                },
                                placeholder: { value: 'Placeholder text' },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                borderRadius: { value: '{{4}}' },
                            },
                        },
                    },
                    {
                        name: 'TextInput',
                        displayName: 'Text Input',
                        description: 'User text input field',
                        component: 'TextInput',
                        defaultSize: {
                            width: 10,
                            height: 40,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: { schema: { type: 'string' }, defaultValue: 'Label' },
                            },
                            placeholder: {
                                type: 'code',
                                displayName: 'Placeholder',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'Enter your input',
                                },
                            },
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: {
                                        type: 'string',
                                    },
                                    defaultValue: 'Default value',
                                },
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' }, defaultValue: false },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' }, defaultValue: 'Tooltip text' },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            regex: { type: 'code', displayName: 'Regex', placeholder: '^[a-zA-Z0-9_ -]{3,16}$' },
                            minLength: { type: 'code', displayName: 'Min length', placeholder: 'Enter min length' },
                            maxLength: { type: 'code', displayName: 'Max length', placeholder: 'Enter max length' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                            onEnterPressed: { displayName: 'On enter pressed' },
                            onFocus: { displayName: 'On focus' },
                            onBlur: { displayName: 'On blur' },
                        },
                        styles: {
                            color: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'label',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' }, defaultValue: 'side' },
                                options: [
                                    { displayName: 'Side', value: 'side' },
                                    { displayName: 'Top', value: 'top' },
                                ],
                                accordian: 'label',
                            },
                            direction: {
                                type: 'switch',
                                displayName: '',
                                validation: { schema: { type: 'string' }, defaultValue: 'left' },
                                showLabel: false,
                                isIcon: true,
                                options: [
                                    { displayName: 'alignleftinspector', value: 'left', iconName: 'alignleftinspector' },
                                    { displayName: 'alignrightinspector', value: 'right', iconName: 'alignrightinspector' },
                                ],
                                accordian: 'label',
                                isFxNotRequired: true,
                            },
                            width: {
                                type: 'slider',
                                displayName: 'Width',
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },
                            auto: {
                                type: 'checkbox',
                                displayName: 'auto',
                                showLabel: false,
                                validation: { schema: { type: 'boolean' }, defaultValue: true },
                                accordian: 'label',
                                conditionallyRender: {
                                    key: 'alignment',
                                    value: 'side',
                                },
                                isFxNotRequired: true,
                            },

                            backgroundColor: {
                                type: 'color',
                                displayName: 'Background',
                                validation: { schema: { type: 'string' }, defaultValue: '#fff' },
                                accordian: 'field',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border',
                                validation: { schema: { type: 'string' }, defaultValue: '#CCD1D5' },
                                accordian: 'field',
                            },
                            accentColor: {
                                type: 'color',
                                displayName: 'Accent',
                                validation: { schema: { type: 'string' }, defaultValue: '#4368E3' },
                                accordian: 'field',
                            },
                            textColor: {
                                type: 'color',
                                displayName: 'Text',
                                validation: { schema: { type: 'string' }, defaultValue: '#1B1F24' },
                                accordian: 'field',
                            },
                            errTextColor: {
                                type: 'color',
                                displayName: 'Error text',
                                validation: { schema: { type: 'string' }, defaultValue: '#D72D39' },
                                accordian: 'field',
                            },
                            icon: {
                                type: 'icon',
                                displayName: 'Icon',
                                validation: { schema: { type: 'string' }, defaultValue: 'IconHome2' },
                                accordian: 'field',
                                visibility: false,
                            },
                            iconColor: {
                                type: 'color',
                                displayName: 'Icon color',
                                validation: { schema: { type: 'string' }, defaultValue: '#CFD3D859' },
                                accordian: 'field',
                                visibility: false,
                                showLabel: false,
                            },
                            borderRadius: {
                                type: 'numberInput',
                                displayName: 'Border radius',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }, defaultValue: 6 },
                                accordian: 'field',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box Shadow',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: '0px 0px 0px 0px #00000040',
                                },
                                accordian: 'field',
                            },
                            padding: {
                                type: 'switch',
                                displayName: 'Padding',
                                validation: {
                                    schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
                                    defaultValue: 'default',
                                },
                                isFxNotRequired: true,
                                options: [
                                    { displayName: 'Default', value: 'default' },
                                    { displayName: 'None', value: 'none' },
                                ],
                                accordian: 'container',
                            },
                        },
                        exposedVariables: {
                            value: '',
                            isMandatory: false,
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'setText',
                                displayName: 'Set text',
                                params: [{ handle: 'text', displayName: 'text', defaultValue: 'New text' }],
                            },
                            {
                                handle: 'clear',
                                displayName: 'Clear',
                            },
                            {
                                handle: 'setFocus',
                                displayName: 'Set focus',
                            },
                            {
                                handle: 'setBlur',
                                displayName: 'Set blur',
                            },
                            {
                                handle: 'disable',
                                displayName: 'Disable(deprecated)',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'visibility',
                                displayName: 'Visibility(deprecated)',
                                params: [{ handle: 'visibility', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        definition: {
                            validation: {
                                mandatory: { value: '{{false}}' },
                                regex: { value: '' },
                                minLength: { value: '' },
                                maxLength: { value: '' },
                                customRule: { value: '' },
                            },

                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                value: { value: '' },
                                label: { value: 'Label' },
                                placeholder: { value: 'Enter your input' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                tooltip: { value: '' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '#1B1F24' },
                                borderColor: { value: '#CCD1D5' },
                                accentColor: { value: '#4368E3' },
                                errTextColor: { value: '#D72D39' },
                                borderRadius: { value: '{{6}}' },
                                backgroundColor: { value: '#fff' },
                                iconColor: { value: '#CFD3D859' },
                                direction: { value: 'left' },
                                width: { value: '{{33}}' },
                                alignment: { value: 'side' },
                                color: { value: '#1B1F24' },
                                auto: { value: '{{true}}' },
                                padding: { value: 'default' },
                                boxShadow: { value: '0px 0px 0px 0px #00000040' },
                                icon: { value: 'IconHome2' },
                                iconVisibility: { value: false },
                            },
                        },
                    },
                    {
                        name: 'Timeline',
                        displayName: 'Timeline',
                        description: 'Show event timeline',
                        component: 'Timeline',
                        properties: {
                            data: {
                                type: 'code',
                                displayName: 'Timeline data',
                                validation: {
                                    schema: { type: 'array', element: { type: 'object' } },
                                    defaultValue: "[{title: 'Product Launched', date: '20/10/2021'}]",
                                },
                            },
                            hideDate: {
                                type: 'toggle',
                                displayName: 'Hide date',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        defaultSize: {
                            width: 20,
                            height: 270,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        events: {},
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' } },
                            },
                        },
                        exposedVariables: {
                            value: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                data: {
                                    value:
                                        "{{ [ \n\t\t{ title: 'Product Launched', subTitle: 'First version of our product released to public', date: '20/10/2021', iconBackgroundColor: '#4d72fa'},\n\t\t { title: 'First Signup', subTitle: 'Congratulations! We got our first signup', date: '22/10/2021', iconBackgroundColor: '#4d72fa'}, \n\t\t { title: 'First Payment', subTitle: 'Hurray! We got our first payment', date: '01/11/2021', iconBackgroundColor: '#4d72fa'} \n] }}",
                                },
                                hideDate: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                            },
                        },
                    },
                    {
                        name: 'Timer',
                        displayName: 'Timer',
                        description: 'Countdown or stopwatch',
                        component: 'Timer',
                        defaultSize: {
                            width: 11,
                            height: 128,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            value: {
                                type: 'code',
                                displayName: 'Default value',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '00:00:00:000',
                                },
                            },
                            type: {
                                type: 'select',
                                displayName: 'Timer type',
                                options: [
                                    { name: 'Count up', value: 'countUp' },
                                    { name: 'Count down', value: 'countDown' },
                                ],
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: 'countUp',
                                },
                            },
                        },
                        validation: {},
                        events: {
                            onStart: { displayName: 'On Start' },
                            onResume: { displayName: 'On Resume' },
                            onPause: { displayName: 'On Pause' },
                            onCountDownFinish: { displayName: 'On Count Down Finish' },
                            onReset: { displayName: 'On Reset' },
                        },
                        styles: {
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: false,
                                },
                            },
                        },
                        exposedVariables: {
                            value: '',
                        },
                        definition: {
                            validation: {},
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                value: {
                                    value: '00:00:00:000',
                                },
                                type: {
                                    value: 'countUp',
                                },
                            },
                            defaults: [
                                {
                                    type: 'countUp',
                                    value: '00:00:00:000',
                                    paramName: 'value',
                                },
                                {
                                    type: 'countDown',
                                    value: '00:00:10:000',
                                    paramName: 'value',
                                },
                            ],
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'ToggleSwitchLegacy',
                        displayName: 'Toggle Switch (Legacy)',
                        description: 'User-controlled on-off switch',
                        component: 'ToggleSwitch',
                        defaultSize: {
                            width: 6,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            defaultValue: {
                                type: 'toggle',
                                displayName: 'Default status',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                        },
                        styles: {
                            textColor: {
                                type: 'color',
                                displayName: 'Text color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            toggleSwitchColor: {
                                type: 'color',
                                displayName: 'Toggle switch color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: {
                                    schema: { type: 'boolean' },
                                },
                            },
                        },
                        exposedVariables: {
                            value: false,
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Toggle label' },
                                defaultValue: { value: '{{false}}' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '' },
                                toggleSwitchColor: { value: '' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'ToggleSwitch',
                        displayName: 'Toggle Switch',
                        description: 'User-controlled on-off switch',
                        component: 'ToggleSwitchV2',
                        defaultSize: {
                            width: 6,
                            height: 30,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },

                        validation: {
                            mandatory: { type: 'toggle', displayName: 'Make this field mandatory' },
                            customRule: {
                                type: 'code',
                                displayName: 'Custom validation',
                                placeholder: `{{components.text2.text=='yes'&&'valid'}}`,
                            },
                        },

                        properties: {
                            label: {
                                type: 'code',
                                displayName: 'Label',
                                validation: {
                                    schema: { type: 'string' },
                                },
                            },

                            defaultValue: {
                                type: 'switch',
                                displayName: 'Default state',
                                validation: { schema: { type: 'boolean' } },
                                options: [
                                    { displayName: 'On', value: '{{true}}' },
                                    { displayName: 'Off', value: '{{false}}' },
                                ],
                                accordian: 'label',
                            },
                            loadingState: {
                                type: 'toggle',
                                displayName: 'Loading state',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            disabledState: {
                                type: 'toggle',
                                displayName: 'Disable',
                                validation: { schema: { type: 'boolean' } },
                                section: 'additionalActions',
                            },
                            tooltip: {
                                type: 'code',
                                displayName: 'Tooltip',
                                validation: { schema: { type: 'string' } },
                                section: 'additionalActions',
                                placeholder: 'Enter tooltip text',
                            },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                        },
                        styles: {
                            textColor: {
                                type: 'color',
                                displayName: 'Text Color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'label',
                            },
                            borderColor: {
                                type: 'color',
                                displayName: 'Border color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            toggleSwitchColor: {
                                type: 'color',
                                displayName: 'Checked color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            uncheckedColor: {
                                type: 'color',
                                displayName: 'Unchecked color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            handleColor: {
                                type: 'color',
                                displayName: 'Handle color',
                                validation: {
                                    schema: { type: 'string' },
                                },
                                accordian: 'switch',
                            },
                            alignment: {
                                type: 'switch',
                                displayName: 'Alignment',
                                validation: { schema: { type: 'string' } },
                                options: [
                                    { displayName: 'Left', value: 'left' },
                                    { displayName: 'Right', value: 'right' },
                                ],
                                accordian: 'label',
                            },
                            boxShadow: {
                                type: 'boxShadow',
                                displayName: 'Box Shadow',
                                validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
                                accordian: 'switch',
                            },
                        },
                        exposedVariables: {
                            value: false,
                            label: 'Label',
                            isMandatory: false,
                            isVisible: true,
                            isDisabled: false,
                            isLoading: false,
                        },
                        actions: [
                            {
                                handle: 'toggle',
                                displayName: 'toggle',
                            },
                            {
                                handle: 'setValue',
                                displayName: 'Set value',
                                params: [{ handle: 'value', displayName: 'value' }],
                            },
                            {
                                handle: 'setVisibility',
                                displayName: 'Set visibility',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setDisable',
                                displayName: 'Set disable',
                                params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                            {
                                handle: 'setLoading',
                                displayName: 'Set loading',
                                params: [{ handle: 'loading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
                            },
                        ],
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            validation: {
                                mandatory: { value: '{{false}}' },
                                customRule: { value: null },
                            },
                            properties: {
                                label: { value: 'Label' },
                                defaultValue: { value: '{{false}}' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                                loadingState: { value: '{{false}}' },
                                tooltip: { value: '' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '#1B1F24' },
                                toggleSwitchColor: { value: '#4368E3' }, //keeping same key for backward comopatibility
                                uncheckedColor: { value: '#E4E7EB' },
                                borderColor: { value: '#E4E7EB' },
                                handleColor: { value: '#FFFFFF' },
                                alignment: { value: 'right' },
                                boxShadow: { value: '0px 0px 0px 0px #00000090' },
                            },
                        },
                    },
                    {
                        name: 'TreeSelect',
                        displayName: 'Tree Select',
                        description: 'Hierarchical item selector',
                        defaultSize: {
                            width: 12,
                            height: 200,
                        },
                        component: 'TreeSelect',
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {
                            label: { type: 'code', displayName: 'Title' },
                            data: { type: 'code', displayName: 'Structure' },
                            checkedData: { type: 'code', displayName: 'Checked values' },
                            expandedData: { type: 'code', displayName: 'Expanded values' },
                        },
                        events: {
                            onChange: { displayName: 'On change' },
                            onCheck: { displayName: 'On check' },
                            onUnCheck: { displayName: 'On uncheck' },
                        },
                        styles: {
                            textColor: { type: 'color', displayName: 'Text Color' },
                            checkboxColor: { type: 'color', displayName: 'Checkbox color' },
                            visibility: { type: 'toggle', displayName: 'Visibility' },
                            disabledState: { type: 'toggle', displayName: 'Disable' },
                        },
                        exposedVariables: {
                            checked: ['asia', 'china', 'beijing', 'shanghai', 'japan', 'india', 'delhi', 'mumbai', 'bengaluru'],
                            expanded: ['asia'],
                            checkedPathArray: [
                                ['asia'],
                                ['asia', 'china'],
                                ['asia', 'china', 'beijing'],
                                ['asia', 'china', 'shanghai'],
                                ['asia', 'japan'],
                                ['asia', 'india'],
                                ['asia', 'india', 'delhi'],
                                ['asia', 'india', 'mumbai'],
                                ['asia', 'india', 'bengaluru'],
                            ],
                            checkedPathStrings: [
                                'asia',
                                'asia-china',
                                'asia-china-beijing',
                                'asia-china-shanghai',
                                'asia-japan',
                                'asia-india',
                                'asia-india-delhi',
                                'asia-india-mumbai',
                                'asia-india-bengaluru',
                            ],
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {
                                label: { value: 'Countries' },
                                data: {
                                    value:
                                        '{{[{"label":"Asia","value":"asia","children":[{"label":"China","value":"china","children":[{"label":"Beijing","value":"beijing"},{"label":"Shanghai","value":"shanghai"}]},{"label":"Japan","value":"japan"},{"label":"India","value":"india","children":[{"label":"Delhi","value":"delhi"},{"label":"Mumbai","value":"mumbai"},{"label":"Bengaluru","value":"bengaluru"}]}]},{"label":"Europe","value":"europe","children":[{"label":"France","value":"france"},{"label":"Spain","value":"spain"},{"label":"England","value":"england"}]},{"label":"Africa","value":"africa"}]}}',
                                },
                                checkedData: { value: '{{["asia"]}}' },
                                expandedData: { value: '{{["asia"]}}' },
                            },
                            events: [],
                            styles: {
                                textColor: { value: '' },
                                checkboxColor: { value: '' },
                                visibility: { value: '{{true}}' },
                                disabledState: { value: '{{false}}' },
                            },
                        },
                    },
                    {
                        name: 'VerticalDivider',
                        displayName: 'Vertical Divider',
                        description: 'Vertical line separator',
                        component: 'VerticalDivider',
                        defaultSize: {
                            width: 2,
                            height: 100,
                        },
                        others: {
                            showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
                            showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
                        },
                        properties: {},
                        events: {},
                        styles: {
                            dividerColor: {
                                type: 'color',
                                displayName: 'Divider color',
                                validation: {
                                    schema: { type: 'string' },
                                    defaultValue: '#000000',
                                },
                            },
                            visibility: {
                                type: 'toggle',
                                displayName: 'Visibility',
                                validation: {
                                    schema: { type: 'boolean' },
                                    defaultValue: true,
                                },
                            },
                        },
                        exposedVariables: {
                            value: {},
                        },
                        definition: {
                            others: {
                                showOnDesktop: { value: '{{true}}' },
                                showOnMobile: { value: '{{false}}' },
                            },
                            properties: {},
                            events: [],
                            styles: {
                                visibility: { value: '{{true}}' },
                                dividerColor: { value: '#000000' },
                            },
                        },
                    }
                ],
                legacyItems: [
                    'ToggleSwitchLegacy',
                    'DropdownLegacy',
                    'MultiselectLegacy',
                    'RadioButtonLegacy',
                    'ModalLegacy',
                ],
                restrictedWidgetsObj: {
                    Form: ['Calendar', 'Kanban', 'Form', 'Tabs', 'Modal', 'Listview', 'Container'],
                    Kanban_card: ['Calendar', 'Kanban', 'Form', 'Tabs', 'Modal', 'Listview', 'Container', 'Table'],
                    Calendar: ['Calendar', 'Kanban'],
                    Container: ['Calendar', 'Kanban'],
                    Modal: ['Calendar', 'Kanban'],
                    Tabs: ['Calendar', 'Kanban'],
                    Kanban_popout: ['Calendar', 'Kanban'],
                    Listview: ['Calendar', 'Kanban'],
                },
                universalProps: {
                    properties: {},
                    general: {
                        tooltip: { type: 'code', displayName: 'Tooltip', validation: { schema: { type: 'string' } } },
                    },
                    others: {},
                    events: {},
                    styles: {},
                    validate: true,
                    generalStyles: {
                        boxShadow: { type: 'boxShadow', displayName: 'Box Shadow' },
                    },
                    definition: {
                        others: {},
                        events: [],
                        styles: {},
                        generalStyles: {
                            boxShadow: { value: '0px 0px 0px 0px #00000040' },
                        },
                    },
                }
            },
            actionTypes: [
                {
                    name: 'Show Alert',
                    id: 'show-alert',
                    options: [{ name: 'message', type: 'text', default: 'Message !' }],
                },
                {
                    name: 'Logout',
                    id: 'logout',
                },
                {
                    name: 'Run Query',
                    id: 'run-query',
                    options: [{ queryId: '' }],
                },
                {
                    name: 'Open Webpage',
                    id: 'open-webpage',
                    options: [{ name: 'url', type: 'text', default: 'https://example.com' }],
                },
                {
                    name: 'Go to app',
                    id: 'go-to-app',
                    options: [
                        { name: 'app', type: 'text', default: '' },
                        { name: 'queryParams', type: 'code', default: '[]' },
                    ],
                },
                {
                    name: 'Show Modal',
                    id: 'show-modal',
                    options: [{ name: 'modal', type: 'text', default: '' }],
                },
                {
                    name: 'Close Modal',
                    id: 'close-modal',
                    options: [{ name: 'modal', type: 'text', default: '' }],
                },
                {
                    name: 'Copy to clipboard',
                    id: 'copy-to-clipboard',
                    options: [{ name: 'copy-to-clipboard', type: 'text', default: '' }],
                },
                {
                    name: 'Set local storage',
                    id: 'set-localstorage-value',
                    options: [
                        { name: 'key', type: 'code', default: '' },
                        { name: 'value', type: 'code', default: '' },
                    ],
                },
                {
                    name: 'Generate file',
                    id: 'generate-file',
                    options: [
                        { name: 'fileType', type: 'text', default: '' },
                        { name: 'fileName', type: 'text', default: '' },
                        { name: 'data', type: 'code', default: '{{[]}}' },
                    ],
                },
                {
                    name: 'Set table page',
                    id: 'set-table-page',
                    options: [
                        {
                            name: 'table',
                            type: 'text',
                            default: '',
                        },
                        { name: 'pageIndex', type: 'text', default: '{{1}}' },
                    ],
                },
                {
                    name: 'Set variable',
                    id: 'set-custom-variable',
                    options: [
                        { name: 'key', type: 'code', default: '' },
                        { name: 'value', type: 'code', default: '' },
                    ],
                },
                {
                    name: 'Unset variable',
                    id: 'unset-custom-variable',
                    options: [{ name: 'key', type: 'code', default: '' }],
                },
                {
                    name: 'Switch page',
                    id: 'switch-page',
                    options: [{ name: 'page', type: 'text', default: '' }],
                },
                {
                    name: 'Set page variable',
                    id: 'set-page-variable',
                    options: [
                        { name: 'key', type: 'code', default: '' },
                        { name: 'value', type: 'code', default: '' },
                    ],
                },
                {
                    name: 'Unset page variable',
                    id: 'unset-page-variable',
                    options: [
                        { name: 'key', type: 'code', default: '' },
                        { name: 'value', type: 'code', default: '' },
                    ],
                },
                {
                    name: 'Control component',
                    id: 'control-component',
                    options: [
                        { name: 'component', type: 'text', default: '' },
                        { name: 'action', type: 'text', default: '' },
                    ],
                },
            ],
            queryManager: {},
            queryPanel: {},
            leftSidebar: {},
            codeBuilder: {},
            codeEditor: {},
            comment: {},
            viewer: {},
            commentNotifications: {},
            components: {},
            header: {},
        }
    },




    playgroundLayout: {
        props: {
            isLeftPanelCollapsed: false,
            isPlayground: false,
            isReversed: false,
            settings: {
                name: 'challenge-layout-settings',
            },
            collapsedWidth: 60,
        },
    },




    consumerApp: {
        app1: {
            "app": {
                definition: {
                    "type": "front-end",
                    "id": "fe295fa2-13da-4ec0-be19-3c890ebcf69d",
                    "name": "actors",
                    "slug": "fe295fa2-13da-4ec0-be19-3c890ebcf69d",
                    "isPublic": false,
                    "isMaintenanceOn": false,
                    "icon": "sun",
                    "organizationId": "4caee195-88d7-4d00-8d91-835782b7222c",
                    "currentVersionId": null,
                    "userId": "af677eca-497c-4b9d-a383-a5af45450892",
                    "workflowApiToken": null,
                    "workflowEnabled": false,
                    "isInitialisedFromPrompt": false,
                    "appGeneratedFromPrompt": false,
                    "appBuilderMode": "visual",
                    "aiGenerationMetadata": null,
                    "createdAt": "2025-06-19T05:07:06.110Z",
                    "creationMode": "DEFAULT",
                    "updatedAt": "2025-06-19T05:07:06.108Z",
                    "editingVersion": {
                        "id": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                        "name": "v1",
                        "definition": null,
                        "globalSettings": {
                            "hideHeader": false,
                            "appInMaintenance": false,
                            "canvasMaxWidth": 100,
                            "canvasMaxWidthType": "%",
                            "canvasMaxHeight": 2400,
                            "canvasBackgroundColor": "#edeff5",
                            "backgroundFxQuery": "",
                            "appMode": "auto"
                        },
                        "pageSettings": null,
                        "showViewerNavigation": true,
                        "homePageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                        "appId": "fe295fa2-13da-4ec0-be19-3c890ebcf69d",
                        "currentEnvironmentId": "38085a87-d031-4844-b36b-21007107d626",
                        "promotedFrom": null,
                        "createdAt": "2025-06-19T05:07:06.118Z",
                        "updatedAt": "2025-06-19T05:07:06.108Z"
                    },
                    "components": [
                        {
                            "id": "652735ad-d378-4c16-b6be-6f67fc003076",
                            "name": "rootPanel",
                            "type": "Container",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": null,
                            "properties": {
                                "visible": {
                                    "value": "{{true}}"
                                },
                                "loadingState": {
                                    "value": "{{false}}"
                                }
                            },
                            "general": {},
                            "styles": {
                                "backgroundColor": {
                                    "value": "#fff"
                                },
                                "borderRadius": {
                                    "value": "4"
                                },
                                "borderColor": {
                                    "value": "#fff"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {},
                            "createdAt": "2025-06-19T05:12:40.612Z",
                            "updatedAt": "2025-06-19T05:13:52.024Z",
                            "layouts": [
                                {
                                    "id": "29505df6-056f-422b-87e5-8de25af2e24b",
                                    "type": "mobile",
                                    "top": 120,
                                    "left": 16,
                                    "width": 5,
                                    "height": 200,
                                    "componentId": "652735ad-d378-4c16-b6be-6f67fc003076",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:12:40.612Z"
                                },
                                {
                                    "id": "ede89d86-795f-44ca-a2c8-a3c57628f41d",
                                    "type": "desktop",
                                    "top": 30,
                                    "left": 8,
                                    "width": 28,
                                    "height": 550,
                                    "componentId": "652735ad-d378-4c16-b6be-6f67fc003076",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:14:08.461Z"
                                }
                            ]
                        },
                        {
                            "id": "2b59618e-c0df-40ac-b6c2-7ad1ee83fdf3",
                            "name": "headerPanel",
                            "type": "Container",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": "652735ad-d378-4c16-b6be-6f67fc003076",
                            "properties": {
                                "visible": {
                                    "value": "{{true}}"
                                },
                                "loadingState": {
                                    "value": "{{false}}"
                                }
                            },
                            "general": {},
                            "styles": {
                                "backgroundColor": {
                                    "value": "#f8e71cff"
                                },
                                "borderRadius": {
                                    "value": "4"
                                },
                                "borderColor": {
                                    "value": "#fff"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {},
                            "createdAt": "2025-06-19T05:13:04.546Z",
                            "updatedAt": "2025-06-19T05:13:44.982Z",
                            "layouts": [
                                {
                                    "id": "6668ed89-64d3-41c7-bed0-c78996e32f67",
                                    "type": "mobile",
                                    "top": 80,
                                    "left": 22,
                                    "width": 5,
                                    "height": 200,
                                    "componentId": "2b59618e-c0df-40ac-b6c2-7ad1ee83fdf3",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:13:04.546Z"
                                },
                                {
                                    "id": "0591dbaa-6be2-488c-a0cc-becfbf674494",
                                    "type": "desktop",
                                    "top": 20,
                                    "left": 2,
                                    "width": 38,
                                    "height": 60,
                                    "componentId": "2b59618e-c0df-40ac-b6c2-7ad1ee83fdf3",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:13:33.156Z"
                                }
                            ]
                        },
                        {
                            "id": "66379ee5-ca5a-44bb-a1e0-e0b4ce4b8750",
                            "name": "menuPanel",
                            "type": "Container",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": "652735ad-d378-4c16-b6be-6f67fc003076",
                            "properties": {
                                "visible": {
                                    "value": "{{true}}"
                                },
                                "loadingState": {
                                    "value": "{{false}}"
                                }
                            },
                            "general": {},
                            "styles": {
                                "backgroundColor": {
                                    "value": "#f8e71cff"
                                },
                                "borderRadius": {
                                    "value": "4"
                                },
                                "borderColor": {
                                    "value": "#fff"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {},
                            "createdAt": "2025-06-19T05:13:55.911Z",
                            "updatedAt": "2025-06-19T05:14:29.666Z",
                            "layouts": [
                                {
                                    "id": "dec03396-6cb1-43ee-9547-1e08613bc797",
                                    "type": "desktop",
                                    "top": 110,
                                    "left": 2,
                                    "width": 11,
                                    "height": 410,
                                    "componentId": "66379ee5-ca5a-44bb-a1e0-e0b4ce4b8750",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:20:31.538Z"
                                },
                                {
                                    "id": "2d11b270-9055-41b9-83dd-f28862063ef7",
                                    "type": "mobile",
                                    "top": 260,
                                    "left": 12,
                                    "width": 5,
                                    "height": 200,
                                    "componentId": "66379ee5-ca5a-44bb-a1e0-e0b4ce4b8750",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:13:55.911Z"
                                }
                            ]
                        },
                        {
                            "id": "9a1f2ef0-3cce-45de-aa79-eb3a26931f6d",
                            "name": "menuList",
                            "type": "RadioButton",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": "66379ee5-ca5a-44bb-a1e0-e0b4ce4b8750",
                            "properties": {
                                "label": {
                                    "value": "Select"
                                },
                                "value": {
                                    "value": "{{button}}"
                                },
                                "values": {
                                    "value": "{{page.variables.vSearch.values}}"
                                },
                                "display_values": {
                                    "value": "{{page.variables.vSearch.values}}"
                                },
                                "visible": {
                                    "value": "{{true}}"
                                }
                            },
                            "general": {},
                            "styles": {
                                "textColor": {
                                    "value": ""
                                },
                                "activeColor": {
                                    "value": ""
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {},
                            "createdAt": "2025-06-19T05:16:56.722Z",
                            "updatedAt": "2025-06-19T07:15:43.868Z",
                            "layouts": [
                                {
                                    "id": "31e8cc18-7310-4b5f-8a46-c414933c024d",
                                    "type": "desktop",
                                    "top": 120,
                                    "left": 3,
                                    "width": 29,
                                    "height": 250,
                                    "componentId": "9a1f2ef0-3cce-45de-aa79-eb3a26931f6d",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T07:14:36.153Z"
                                },
                                {
                                    "id": "899ef591-d3a8-4e02-b05b-5b57d904279c",
                                    "type": "mobile",
                                    "top": 200,
                                    "left": 27,
                                    "width": 6,
                                    "height": 60,
                                    "componentId": "9a1f2ef0-3cce-45de-aa79-eb3a26931f6d",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:16:56.722Z"
                                }
                            ]
                        },
                        {
                            "id": "eccee300-c609-4d1d-8c72-d5561bd4239d",
                            "name": "textinput1",
                            "type": "TextInput",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": "66379ee5-ca5a-44bb-a1e0-e0b4ce4b8750",
                            "properties": {
                                "value": {
                                    "value": ""
                                },
                                "label": {
                                    "value": "Search"
                                },
                                "placeholder": {
                                    "value": "Enter your input"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                },
                                "loadingState": {
                                    "value": "{{false}}"
                                },
                                "tooltip": {
                                    "value": ""
                                }
                            },
                            "general": {},
                            "styles": {
                                "textColor": {
                                    "value": "#1B1F24"
                                },
                                "borderColor": {
                                    "value": "#CCD1D5"
                                },
                                "accentColor": {
                                    "value": "#4368E3"
                                },
                                "errTextColor": {
                                    "value": "#D72D39"
                                },
                                "borderRadius": {
                                    "value": "{{6}}"
                                },
                                "backgroundColor": {
                                    "value": "#fff"
                                },
                                "iconColor": {
                                    "value": "#CFD3D859"
                                },
                                "direction": {
                                    "value": "left"
                                },
                                "width": {
                                    "value": "{{33}}"
                                },
                                "alignment": {
                                    "value": "top"
                                },
                                "color": {
                                    "value": "#1B1F24"
                                },
                                "auto": {
                                    "value": "{{true}}"
                                },
                                "padding": {
                                    "value": "default"
                                },
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                },
                                "icon": {
                                    "value": "IconHome2"
                                },
                                "iconVisibility": {
                                    "value": false
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {
                                "mandatory": {
                                    "value": "{{false}}"
                                },
                                "regex": {
                                    "value": ""
                                },
                                "minLength": {
                                    "value": ""
                                },
                                "maxLength": {
                                    "value": ""
                                },
                                "customRule": {
                                    "value": ""
                                }
                            },
                            "createdAt": "2025-06-19T05:19:14.685Z",
                            "updatedAt": "2025-06-19T05:20:46.770Z",
                            "layouts": [
                                {
                                    "id": "27edb6d4-1bab-4a80-a92b-d83de2789472",
                                    "type": "mobile",
                                    "top": 150,
                                    "left": 19,
                                    "width": 10,
                                    "height": 40,
                                    "componentId": "eccee300-c609-4d1d-8c72-d5561bd4239d",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:19:14.685Z"
                                },
                                {
                                    "id": "b7b87d6f-c66f-4f6b-bc91-d470609fd803",
                                    "type": "desktop",
                                    "top": 20,
                                    "left": 1,
                                    "width": 39,
                                    "height": 50,
                                    "componentId": "eccee300-c609-4d1d-8c72-d5561bd4239d",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:21:33.509Z"
                                }
                            ]
                        },
                        {
                            "id": "f27da2b9-4da5-42d3-a131-c8d4845ad81a",
                            "name": "btnSelection",
                            "type": "Button",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": "652735ad-d378-4c16-b6be-6f67fc003076",
                            "properties": {
                                "text": {
                                    "value": "{{components.9a1f2ef0-3cce-45de-aa79-eb3a26931f6d.value}}"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                },
                                "loadingState": {
                                    "value": "{{false}}"
                                },
                                "tooltip": {
                                    "value": ""
                                }
                            },
                            "general": {},
                            "styles": {
                                "textColor": {
                                    "value": "#FFFFFF"
                                },
                                "borderColor": {
                                    "value": "#4368E3"
                                },
                                "loaderColor": {
                                    "value": "#FFFFFF"
                                },
                                "borderRadius": {
                                    "value": "{{6}}"
                                },
                                "backgroundColor": {
                                    "value": "#4368E3"
                                },
                                "iconColor": {
                                    "value": "#FFFFFF"
                                },
                                "direction": {
                                    "value": "left"
                                },
                                "padding": {
                                    "value": "default"
                                },
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000090"
                                },
                                "icon": {
                                    "value": "IconAlignBoxBottomLeft"
                                },
                                "iconVisibility": {
                                    "value": false
                                },
                                "type": {
                                    "value": "primary"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {},
                            "createdAt": "2025-06-19T05:42:55.069Z",
                            "updatedAt": "2025-06-19T07:15:01.165Z",
                            "layouts": [
                                {
                                    "id": "8fdc79be-918e-4054-a896-3cef85673c9a",
                                    "type": "mobile",
                                    "top": 290,
                                    "left": 29,
                                    "width": 4,
                                    "height": 40,
                                    "componentId": "f27da2b9-4da5-42d3-a131-c8d4845ad81a",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:42:55.069Z"
                                },
                                {
                                    "id": "6a1ef868-3e07-4ee3-b265-11c3319590ef",
                                    "type": "desktop",
                                    "top": 130,
                                    "left": 23,
                                    "width": 8,
                                    "height": 40,
                                    "componentId": "f27da2b9-4da5-42d3-a131-c8d4845ad81a",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T05:43:13.832Z"
                                }
                            ]
                        },
                        {
                            "id": "eb364eb7-989b-46f2-b393-eaed5fdeb75a",
                            "name": "button2",
                            "type": "Button",
                            "pageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "parent": "652735ad-d378-4c16-b6be-6f67fc003076",
                            "properties": {
                                "text": {
                                    "value": "Search"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                },
                                "loadingState": {
                                    "value": "{{false}}"
                                },
                                "tooltip": {
                                    "value": ""
                                }
                            },
                            "general": {},
                            "styles": {
                                "textColor": {
                                    "value": "#FFFFFF"
                                },
                                "borderColor": {
                                    "value": "#4368E3"
                                },
                                "loaderColor": {
                                    "value": "#FFFFFF"
                                },
                                "borderRadius": {
                                    "value": "{{6}}"
                                },
                                "backgroundColor": {
                                    "value": "#4368E3"
                                },
                                "iconColor": {
                                    "value": "#FFFFFF"
                                },
                                "direction": {
                                    "value": "left"
                                },
                                "padding": {
                                    "value": "default"
                                },
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000090"
                                },
                                "icon": {
                                    "value": "IconAlignBoxBottomLeft"
                                },
                                "iconVisibility": {
                                    "value": false
                                },
                                "type": {
                                    "value": "primary"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "displayPreferences": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "validation": {},
                            "createdAt": "2025-06-19T07:03:50.601Z",
                            "updatedAt": "2025-06-19T07:03:59.878Z",
                            "layouts": [
                                {
                                    "id": "6794887d-f5a9-44d1-b620-67dd5b0b0a3b",
                                    "type": "mobile",
                                    "top": 260,
                                    "left": 18,
                                    "width": 4,
                                    "height": 40,
                                    "componentId": "eb364eb7-989b-46f2-b393-eaed5fdeb75a",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T07:03:50.601Z"
                                },
                                {
                                    "id": "1040e4f7-44e1-435d-aee0-d4cb3f97760a",
                                    "type": "desktop",
                                    "top": 130,
                                    "left": 15,
                                    "width": 4,
                                    "height": 40,
                                    "componentId": "eb364eb7-989b-46f2-b393-eaed5fdeb75a",
                                    "dimensionUnit": "count",
                                    "updatedAt": "2025-06-19T07:03:54.066Z"
                                }
                            ]
                        }
                    ],
                    "pages": [
                        {
                            "id": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "name": "Home",
                            "handle": "home",
                            "index": 1,
                            "disabled": null,
                            "hidden": null,
                            "icon": null,
                            "createdAt": "2025-06-19T05:07:06.108Z",
                            "updatedAt": "2025-06-19T05:07:06.108Z",
                            "autoComputeLayout": true,
                            "appVersionId": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "pageGroupIndex": null,
                            "pageGroupId": null,
                            "isPageGroup": false
                        }
                    ],
                    "events": [
                        {
                            "id": "1f8db4ec-f0b9-44cd-b3b5-69e66ec1df33",
                            "name": "onClick",
                            "index": 0,
                            "event": {
                                "eventId": "onClick",
                                "message": "Hello world!",
                                "queryId": "f57a35e5-e24c-4d46-a49d-366f08e3934c",
                                "actionId": "run-query",
                                "alertType": "info",
                                "queryName": "searchList",
                                "runOnlyIf": "",
                                "parameters": {
                                    "inputVal": "{{components.eccee300-c609-4d1d-8c72-d5561bd4239d.value}}"
                                }
                            },
                            "sourceId": "eb364eb7-989b-46f2-b393-eaed5fdeb75a",
                            "target": "component",
                            "appVersionId": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "createdAt": "2025-06-19T07:04:01.339Z",
                            "updatedAt": "2025-06-19T07:05:53.445Z"
                        },
                        {
                            "id": "8cc59994-7add-4efb-88c4-185d1b257575",
                            "name": "onChange",
                            "index": 0,
                            "event": {
                                "eventId": "onChange",
                                "message": "Hello world!",
                                "queryId": "f57a35e5-e24c-4d46-a49d-366f08e3934c",
                                "actionId": "run-query",
                                "alertType": "info",
                                "queryName": "searchList",
                                "parameters": {
                                    "inputVal": "{{components.eccee300-c609-4d1d-8c72-d5561bd4239d.value}}"
                                }
                            },
                            "sourceId": "eccee300-c609-4d1d-8c72-d5561bd4239d",
                            "target": "component",
                            "appVersionId": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "createdAt": "2025-06-19T07:14:03.972Z",
                            "updatedAt": "2025-06-19T07:14:23.020Z"
                        }
                    ],
                    "dataQueries": [
                        {
                            "id": "c0c0db11-ad35-4e12-bb2e-92310760ad8c",
                            "name": "setList",
                            "options": {
                                "code": "function setListFn() {\n  actions.setPageVariable('vList', {\n    'labels': ['Button', 'Card', 'Badge'],\n    'values': ['button', 'card', 'badge']\n  });\n}\n\nsetListFn();\n",
                                "parameters": [],
                                "runOnPageLoad": false
                            },
                            "dataSourceId": "e050ffd3-e504-4879-a0df-fd6f9deee36e",
                            "appVersionId": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "createdAt": "2025-06-19T05:47:24.731Z",
                            "updatedAt": "2025-06-19T06:02:00.047Z"
                        },
                        {
                            "id": "f57a35e5-e24c-4d46-a49d-366f08e3934c",
                            "name": "searchList",
                            "options": {
                                "code": "function searchListFn() {\n\n  actions.setPageVariable('vSearch', {\n  \n    'values': page.variables.vList.values.filter(item => item.includes( parameters.inputVal ))\n  });\n\n}\n\nsearchListFn();\n",
                                "parameters": [
                                    {
                                        "name": "inputVal",
                                        "defaultValue": ""
                                    }
                                ]
                            },
                            "dataSourceId": "e050ffd3-e504-4879-a0df-fd6f9deee36e",
                            "appVersionId": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "createdAt": "2025-06-19T06:03:57.754Z",
                            "updatedAt": "2025-06-19T07:13:51.967Z"
                        }
                    ],
                    "dataSources": [
                        {
                            "id": "e050ffd3-e504-4879-a0df-fd6f9deee36e",
                            "name": "runjsdefault",
                            "kind": "runjs",
                            "type": "static",
                            "pluginId": null,
                            "appVersionId": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "organizationId": null,
                            "scope": "local",
                            "createdAt": "2025-06-19T05:47:24.613Z",
                            "updatedAt": "2025-06-19T05:47:24.613Z"
                        }
                    ],
                    "appVersions": [
                        {
                            "id": "35cadad8-b4b8-4ca9-b220-09b442031d8d",
                            "name": "v1",
                            "definition": null,
                            "globalSettings": {
                                "hideHeader": false,
                                "appInMaintenance": false,
                                "canvasMaxWidth": 100,
                                "canvasMaxWidthType": "%",
                                "canvasMaxHeight": 2400,
                                "canvasBackgroundColor": "#edeff5",
                                "backgroundFxQuery": "",
                                "appMode": "auto"
                            },
                            "pageSettings": null,
                            "showViewerNavigation": true,
                            "homePageId": "222b8c69-379e-44b2-b182-41860ca89f26",
                            "appId": "fe295fa2-13da-4ec0-be19-3c890ebcf69d",
                            "currentEnvironmentId": "38085a87-d031-4844-b36b-21007107d626",
                            "promotedFrom": null,
                            "createdAt": "2025-06-19T05:07:06.118Z",
                            "updatedAt": "2025-06-19T05:07:06.108Z"
                        }
                    ],
                    "appEnvironments": [
                        {
                            "id": "38085a87-d031-4844-b36b-21007107d626",
                            "organizationId": "4caee195-88d7-4d00-8d91-835782b7222c",
                            "name": "development",
                            "isDefault": false,
                            "priority": 1,
                            "enabled": true,
                            "createdAt": "2025-03-06T06:14:02.614Z",
                            "updatedAt": "2025-03-06T06:14:02.614Z"
                        },
                        {
                            "id": "b4810177-8db5-422f-a405-528df3e51740",
                            "organizationId": "4caee195-88d7-4d00-8d91-835782b7222c",
                            "name": "staging",
                            "isDefault": false,
                            "priority": 2,
                            "enabled": true,
                            "createdAt": "2025-03-06T06:14:02.615Z",
                            "updatedAt": "2025-03-06T06:14:02.615Z"
                        },
                        {
                            "id": "3a394c81-2516-4152-84e8-550ba9589611",
                            "organizationId": "4caee195-88d7-4d00-8d91-835782b7222c",
                            "name": "production",
                            "isDefault": true,
                            "priority": 3,
                            "enabled": true,
                            "createdAt": "2025-03-06T06:14:02.615Z",
                            "updatedAt": "2025-03-06T06:14:02.615Z"
                        }
                    ],
                    "dataSourceOptions": [
                        {
                            "id": "5ab7e82e-c035-44d7-aeb2-3f71cd9513f9",
                            "dataSourceId": "e050ffd3-e504-4879-a0df-fd6f9deee36e",
                            "environmentId": "38085a87-d031-4844-b36b-21007107d626",
                            "options": null,
                            "createdAt": "2025-06-19T05:47:24.659Z",
                            "updatedAt": "2025-06-19T05:47:24.659Z"
                        },
                        {
                            "id": "0b300882-4af9-460b-8736-4f9e6f862c0c",
                            "dataSourceId": "e050ffd3-e504-4879-a0df-fd6f9deee36e",
                            "environmentId": "3a394c81-2516-4152-84e8-550ba9589611",
                            "options": null,
                            "createdAt": "2025-06-19T05:47:24.659Z",
                            "updatedAt": "2025-06-19T05:47:24.659Z"
                        },
                        {
                            "id": "1b54da7f-4c8b-48fa-8ba5-f4267edeb954",
                            "dataSourceId": "e050ffd3-e504-4879-a0df-fd6f9deee36e",
                            "environmentId": "b4810177-8db5-422f-a405-528df3e51740",
                            "options": null,
                            "createdAt": "2025-06-19T05:47:24.659Z",
                            "updatedAt": "2025-06-19T05:47:24.659Z"
                        }
                    ],
                    "schemaDetails": {
                        "multiPages": true,
                        "multiEnv": true,
                        "globalDataSources": true
                    }
                }
            },
            "tooljet_version": "3.5.42-cloud-lts"
        }

    },

    captures: {
        'app-builder.app-canvas.container': {
            "components": [
                "5dc32d90-0e42-4952-a7e8-9b0653b2b353",
                "852441e4-2b12-44a2-9b17-13cc05297ac9",
                "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8",
                "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28",
                "9d5f645f-49b6-4f61-a695-b73227793b5e",
                "95a4a110-bf2c-4c81-9819-47c52ce35df7",
                "5908d87a-da1f-4f16-8005-84dcc581c878",
                "235c881e-ee12-4eca-89d6-85258a92bca5",
                "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7",
                "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702",
                "fbe930e1-295c-4def-b4ad-b3d399dcac3a",
                "2da296aa-206b-4ded-b46c-50489a2df490",
                "965bdd8d-3af7-4788-add9-2740bdd11045",
                "c2d6aca2-555e-4544-b534-c1905e09a6df",
                "b54d2649-2a42-4e71-a713-440f18533a18",
                "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6",
                "88da4e09-8cd5-4d6e-9530-550298f1379f",
                "07eef94a-0cb5-4e0e-bb80-637310d45ccb",
                "8e5fe569-0c22-4da8-baa9-3cb2d17aba77",
                "359d31e0-e1d2-40c1-a949-5b21a863bc10",
                "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943",
                "05f29a72-9e46-4765-bbe2-d11cc426da53",
                "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
            ]
        },
        'appBuilder.appCanvas.widgetWapper': [
            {
                "props": {
                    "id": "158c3820-bfd4-427e-9052-b139ea50e124",
                    "currentLayout": "desktop",
                    "gridWidth": 36.04651162790697,
                    "subContainerIndex": null,
                    "inCanvas": true,
                    "readOnly": false,
                    "mode": "edit",
                    "darkMode": false
                },
                "stylesDefinition": {
                    "backgroundColor": {
                        "value": "#fff"
                    },
                    "headerBackgroundColor": {
                        "value": "#fff"
                    },
                    "borderRadius": {
                        "value": "10"
                    },
                    "borderColor": {
                        "value": "#ffffff00",
                        "fxActive": false
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000040"
                    }
                },
                "layoutData": {
                    "top": 20,
                    "left": 1,
                    "width": 41,
                    "height": 310
                },
                "componentType": "Container",
                "canShowInCurrentLayout": true
            },
            {
                "stylesDefinition": {
                    "textColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderColor": {
                        "value": "{{`#${variables.borderColor}`}}",
                        "fxActive": false
                    },
                    "loaderColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderRadius": {
                        "value": "{{50}}"
                    },
                    "backgroundColor": {
                        "value": "{{listItem[7] ?? \"#ffffff00\"}}",
                        "fxActive": true
                    },
                    "iconColor": {
                        "value": "#FFFFFF"
                    },
                    "direction": {
                        "value": "left"
                    },
                    "padding": {
                        "value": "default"
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000090"
                    },
                    "icon": {
                        "value": "IconAlignBoxBottomLeft"
                    },
                    "iconVisibility": {
                        "value": false
                    },
                    "type": {
                        "value": "primary"
                    }
                },
                "layoutData": {
                    "top": 20,
                    "left": 29,
                    "width": 3.0000000000000004,
                    "height": 60
                },
                "componentType": "Button",
                "canShowInCurrentLayout": true
            },
            {
                "stylesDefinition": {
                    "textColor": {
                        "value": "{{`#${variables.textColor}`}}",
                        "fxActive": true
                    },
                    "borderColor": {
                        "value": "{{`#${variables.borderColor}`}}",
                        "fxActive": false
                    },
                    "loaderColor": {
                        "value": "{{`#${variables.textColor}`}}",
                        "fxActive": true
                    },
                    "borderRadius": {
                        "value": "{{50}}"
                    },
                    "backgroundColor": {
                        "value": "{{listItem[0] ?? \"#ffffff00\"}}",
                        "fxActive": true
                    },
                    "iconColor": {
                        "value": "#FFFFFF"
                    },
                    "direction": {
                        "value": "left"
                    },
                    "padding": {
                        "value": "default"
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000090"
                    },
                    "icon": {
                        "value": "IconAlignBoxBottomLeft"
                    },
                    "iconVisibility": {
                        "value": false
                    },
                    "type": {
                        "value": "primary"
                    }
                },
                "layoutData": {
                    "top": 20,
                    "left": 1,
                    "width": 3.0000000000000004,
                    "height": 60
                },
                "componentType": "Button",
                "canShowInCurrentLayout": true
            },
            {
                "stylesDefinition": {
                    "textColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderColor": {
                        "value": "{{`#${variables.borderColor}`}}",
                        "fxActive": false
                    },
                    "loaderColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderRadius": {
                        "value": "{{50}}"
                    },
                    "backgroundColor": {
                        "value": "{{listItem[1] ?? \"#ffffff00\"}}",
                        "fxActive": true
                    },
                    "iconColor": {
                        "value": "#FFFFFF"
                    },
                    "direction": {
                        "value": "left"
                    },
                    "padding": {
                        "value": "default"
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000090"
                    },
                    "icon": {
                        "value": "IconAlignBoxBottomLeft"
                    },
                    "iconVisibility": {
                        "value": false
                    },
                    "type": {
                        "value": "primary"
                    }
                },
                "layoutData": {
                    "top": 20,
                    "left": 5,
                    "width": 3.0000000000000004,
                    "height": 60
                },
                "componentType": "Button",
                "canShowInCurrentLayout": true
            },
            {
                "stylesDefinition": {
                    "textColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderColor": {
                        "value": "{{`#${variables.borderColor}`}}",
                        "fxActive": false
                    },
                    "loaderColor": {
                        "value": "{{`#${variables.textColor}`}}"
                    },
                    "borderRadius": {
                        "value": "{{50}}"
                    },
                    "backgroundColor": {
                        "value": "{{listItem[2] ?? \"#ffffff00\"}}",
                        "fxActive": true
                    },
                    "iconColor": {
                        "value": "#FFFFFF"
                    },
                    "direction": {
                        "value": "left"
                    },
                    "padding": {
                        "value": "default"
                    },
                    "boxShadow": {
                        "value": "0px 0px 0px 0px #00000090"
                    },
                    "icon": {
                        "value": "IconAlignBoxBottomLeft"
                    },
                    "iconVisibility": {
                        "value": false
                    },
                    "type": {
                        "value": "primary"
                    }
                },
                "layoutData": {
                    "top": 20,
                    "left": 9,
                    "width": 3.0000000000000004,
                    "height": 60
                },
                "componentType": "Button",
                "canShowInCurrentLayout": true
            }
        ],


        'appBuilder.appCanvas.RenderWidget': [
            {
                "props": {
                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                    "widgetHeight": 60,
                    "componentType": "Button",
                    "subContainerIndex": 4,
                    "widgetWidth": 34.32341806381827,
                    "inCanvas": true,
                    "darkMode": false
                },
                "componentDefinition": {
                    "component": {
                        "name": "button11",
                        "displayName": "Button",
                        "description": "Trigger actions: queries, alerts, set variables etc.",
                        "component": "Button",
                        "defaultSize": {
                            "width": 4,
                            "height": 40
                        },
                        "others": {
                            "showOnDesktop": {
                                "type": "toggle",
                                "displayName": "Show on desktop"
                            },
                            "showOnMobile": {
                                "type": "toggle",
                                "displayName": "Show on mobile"
                            }
                        },
                        "properties": {
                            "text": {
                                "type": "code",
                                "displayName": "Label",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                }
                            },
                            "loadingState": {
                                "type": "toggle",
                                "displayName": "Loading state",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    }
                                },
                                "section": "additionalActions"
                            },
                            "visibility": {
                                "type": "toggle",
                                "displayName": "Visibility",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    }
                                },
                                "section": "additionalActions"
                            },
                            "disabledState": {
                                "type": "toggle",
                                "displayName": "Disable",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    }
                                },
                                "section": "additionalActions"
                            },
                            "tooltip": {
                                "type": "code",
                                "displayName": "Tooltip",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                },
                                "section": "additionalActions",
                                "placeholder": "Enter tooltip text"
                            }
                        },
                        "events": {
                            "onClick": {
                                "displayName": "On click"
                            },
                            "onHover": {
                                "displayName": "On hover"
                            }
                        },
                        "styles": {
                            "type": {
                                "type": "switch",
                                "displayName": "Type",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                },
                                "options": [
                                    {
                                        "displayName": "Solid",
                                        "value": "primary"
                                    },
                                    {
                                        "displayName": "Outline",
                                        "value": "outline"
                                    }
                                ],
                                "accordian": "button"
                            },
                            "backgroundColor": {
                                "type": "color",
                                "displayName": "Background",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": false
                                },
                                "conditionallyRender": {
                                    "key": "type",
                                    "value": "primary"
                                },
                                "accordian": "button"
                            },
                            "textColor": {
                                "type": "color",
                                "displayName": "Text color",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": false
                                },
                                "accordian": "button"
                            },
                            "borderColor": {
                                "type": "color",
                                "displayName": "Border color",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": false
                                },
                                "accordian": "button"
                            },
                            "loaderColor": {
                                "type": "color",
                                "displayName": "Loader color",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": false
                                },
                                "accordian": "button"
                            },
                            "icon": {
                                "type": "icon",
                                "displayName": "Icon",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                },
                                "accordian": "button",
                                "visibility": false
                            },
                            "iconColor": {
                                "type": "color",
                                "displayName": "Icon color",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                },
                                "accordian": "button",
                                "visibility": false
                            },
                            "direction": {
                                "type": "switch",
                                "displayName": "",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                },
                                "showLabel": false,
                                "isIcon": true,
                                "options": [
                                    {
                                        "displayName": "alignleftinspector",
                                        "value": "left",
                                        "iconName": "alignleftinspector"
                                    },
                                    {
                                        "displayName": "alignrightinspector",
                                        "value": "right",
                                        "iconName": "alignrightinspector"
                                    }
                                ],
                                "accordian": "button"
                            },
                            "borderRadius": {
                                "type": "numberInput",
                                "displayName": "Border radius",
                                "validation": {
                                    "validation": {
                                        "schema": {
                                            "type": "union",
                                            "schemas": [
                                                {
                                                    "type": "string"
                                                },
                                                {
                                                    "type": "number"
                                                }
                                            ]
                                        }
                                    },
                                    "defaultValue": false
                                },
                                "accordian": "button"
                            },
                            "boxShadow": {
                                "type": "boxShadow",
                                "displayName": "Box shadow",
                                "validation": {
                                    "schema": {
                                        "type": "union",
                                        "schemas": [
                                            {
                                                "type": "string"
                                            },
                                            {
                                                "type": "number"
                                            }
                                        ]
                                    }
                                },
                                "accordian": "button",
                                "conditionallyRender": {
                                    "key": "type",
                                    "value": "primary"
                                }
                            },
                            "padding": {
                                "type": "switch",
                                "displayName": "Padding",
                                "validation": {
                                    "schema": {
                                        "type": "union",
                                        "schemas": [
                                            {
                                                "type": "string"
                                            },
                                            {
                                                "type": "number"
                                            }
                                        ]
                                    }
                                },
                                "options": [
                                    {
                                        "displayName": "Default",
                                        "value": "default"
                                    },
                                    {
                                        "displayName": "None",
                                        "value": "none"
                                    }
                                ],
                                "accordian": "container"
                            }
                        },
                        "exposedVariables": {
                            "buttonText": "Button",
                            "isVisible": true,
                            "isDisabled": false,
                            "isLoading": false
                        },
                        "actions": [
                            {
                                "handle": "click",
                                "displayName": "Click"
                            },
                            {
                                "handle": "setText",
                                "displayName": "Set text",
                                "params": [
                                    {
                                        "handle": "text",
                                        "displayName": "Text",
                                        "defaultValue": "New Text"
                                    }
                                ]
                            },
                            {
                                "handle": "setVisibility",
                                "displayName": "Set visibility",
                                "params": [
                                    {
                                        "handle": "disable",
                                        "displayName": "Value",
                                        "defaultValue": "{{false}}",
                                        "type": "toggle"
                                    }
                                ]
                            },
                            {
                                "handle": "setDisable",
                                "displayName": "Set disable",
                                "params": [
                                    {
                                        "handle": "disable",
                                        "displayName": "Value",
                                        "defaultValue": "{{false}}",
                                        "type": "toggle"
                                    }
                                ]
                            },
                            {
                                "handle": "setLoading",
                                "displayName": "Set loading",
                                "params": [
                                    {
                                        "handle": "loading",
                                        "displayName": "Value",
                                        "defaultValue": "{{false}}",
                                        "type": "toggle"
                                    }
                                ]
                            },
                            {
                                "handle": "disable",
                                "displayName": "Disable(deprecated)",
                                "params": [
                                    {
                                        "handle": "disable",
                                        "displayName": "Value",
                                        "defaultValue": "{{false}}",
                                        "type": "toggle"
                                    }
                                ]
                            },
                            {
                                "handle": "visibility",
                                "displayName": "Visibility(deprecated)",
                                "params": [
                                    {
                                        "handle": "visible",
                                        "displayName": "Value",
                                        "defaultValue": "{{false}}",
                                        "type": "toggle"
                                    }
                                ]
                            },
                            {
                                "handle": "loading",
                                "displayName": "Loading(deprecated)",
                                "params": [
                                    {
                                        "handle": "loading",
                                        "displayName": "Value",
                                        "defaultValue": "{{false}}",
                                        "type": "toggle"
                                    }
                                ]
                            }
                        ],


                        "general": {
                            "tooltip": {
                                "type": "code",
                                "displayName": "Tooltip",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "validate": true,
                        "generalStyles": {
                            "boxShadow": {
                                "type": "boxShadow",
                                "displayName": "Box Shadow"
                            }
                        },

                        "definition": {
                            "properties": {
                                "text": {
                                    "value": ""
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{!components.toggleswitch1.value}}"
                                },
                                "loadingState": {
                                    "value": "{{components.toggleswitch2.value}}"
                                },
                                "tooltip": {
                                    "value": ""
                                }
                            },
                            "styles": {
                                "textColor": {
                                    "value": "{{`#${variables.textColor}`}}"
                                },
                                "borderColor": {
                                    "value": "{{`#${variables.borderColor}`}}",
                                    "fxActive": true
                                },
                                "loaderColor": {
                                    "value": "{{`#${variables.textColor}`}}"
                                },
                                "borderRadius": {
                                    "value": "{{50}}"
                                },
                                "backgroundColor": {
                                    "value": "{{(listItem[10] ?? \"#ffffff\")}}",
                                    "fxActive": true
                                },
                                "iconColor": {
                                    "value": "#FFFFFF"
                                },
                                "direction": {
                                    "value": "left"
                                },
                                "padding": {
                                    "value": "default"
                                },
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000090"
                                },
                                "icon": {
                                    "value": "IconAlignBoxBottomLeft"
                                },
                                "iconVisibility": {
                                    "value": false
                                },
                                "type": {
                                    "value": "primary"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "validation": {},
                            "others": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "general": {}
                        },
                        "parent": "e9e243bb-1e30-4427-9983-33848b0d608a"
                    },
                    "layouts": {
                        "desktop": {
                            "top": 20,
                            "left": 41,
                            "width": 1,
                            "height": 60
                        },
                        "mobile": {
                            "top": 20,
                            "left": 1,
                            "width": 6.976744186046512,
                            "height": 30
                        }
                    },
                    "withDefaultChildren": false
                },
                "component": {
                    "properties": {
                        "text": {
                            "type": "code",
                            "displayName": "Label",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            }
                        },
                        "loadingState": {
                            "type": "toggle",
                            "displayName": "Loading state",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                }
                            },
                            "section": "additionalActions"
                        },
                        "visibility": {
                            "type": "toggle",
                            "displayName": "Visibility",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                }
                            },
                            "section": "additionalActions"
                        },
                        "disabledState": {
                            "type": "toggle",
                            "displayName": "Disable",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                }
                            },
                            "section": "additionalActions"
                        },
                        "tooltip": {
                            "type": "code",
                            "displayName": "Tooltip",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            },
                            "section": "additionalActions",
                            "placeholder": "Enter tooltip text"
                        }
                    },
                    "general": {
                        "tooltip": {
                            "type": "code",
                            "displayName": "Tooltip",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "others": {
                        "showOnDesktop": {
                            "type": "toggle",
                            "displayName": "Show on desktop"
                        },
                        "showOnMobile": {
                            "type": "toggle",
                            "displayName": "Show on mobile"
                        }
                    },
                    "events": {
                        "onClick": {
                            "displayName": "On click"
                        },
                        "onHover": {
                            "displayName": "On hover"
                        }
                    },
                    "styles": {
                        "type": {
                            "type": "switch",
                            "displayName": "Type",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            },
                            "options": [
                                {
                                    "displayName": "Solid",
                                    "value": "primary"
                                },
                                {
                                    "displayName": "Outline",
                                    "value": "outline"
                                }
                            ],
                            "accordian": "button"
                        },
                        "backgroundColor": {
                            "type": "color",
                            "displayName": "Background",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": false
                            },
                            "conditionallyRender": {
                                "key": "type",
                                "value": "primary"
                            },
                            "accordian": "button"
                        },
                        "textColor": {
                            "type": "color",
                            "displayName": "Text color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": false
                            },
                            "accordian": "button"
                        },
                        "borderColor": {
                            "type": "color",
                            "displayName": "Border color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": false
                            },
                            "accordian": "button"
                        },
                        "loaderColor": {
                            "type": "color",
                            "displayName": "Loader color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": false
                            },
                            "accordian": "button"
                        },
                        "icon": {
                            "type": "icon",
                            "displayName": "Icon",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            },
                            "accordian": "button",
                            "visibility": false
                        },
                        "iconColor": {
                            "type": "color",
                            "displayName": "Icon color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            },
                            "accordian": "button",
                            "visibility": false
                        },
                        "direction": {
                            "type": "switch",
                            "displayName": "",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            },
                            "showLabel": false,
                            "isIcon": true,
                            "options": [
                                {
                                    "displayName": "alignleftinspector",
                                    "value": "left",
                                    "iconName": "alignleftinspector"
                                },
                                {
                                    "displayName": "alignrightinspector",
                                    "value": "right",
                                    "iconName": "alignrightinspector"
                                }
                            ],
                            "accordian": "button"
                        },
                        "borderRadius": {
                            "type": "numberInput",
                            "displayName": "Border radius",
                            "validation": {
                                "validation": {
                                    "schema": {
                                        "type": "union",
                                        "schemas": [
                                            {
                                                "type": "string"
                                            },
                                            {
                                                "type": "number"
                                            }
                                        ]
                                    }
                                },
                                "defaultValue": false
                            },
                            "accordian": "button"
                        },
                        "boxShadow": {
                            "type": "boxShadow",
                            "displayName": "Box shadow",
                            "validation": {
                                "schema": {
                                    "type": "union",
                                    "schemas": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "number"
                                        }
                                    ]
                                }
                            },
                            "accordian": "button",
                            "conditionallyRender": {
                                "key": "type",
                                "value": "primary"
                            }
                        },
                        "padding": {
                            "type": "switch",
                            "displayName": "Padding",
                            "validation": {
                                "schema": {
                                    "type": "union",
                                    "schemas": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "number"
                                        }
                                    ]
                                }
                            },
                            "options": [
                                {
                                    "displayName": "Default",
                                    "value": "default"
                                },
                                {
                                    "displayName": "None",
                                    "value": "none"
                                }
                            ],
                            "accordian": "container"
                        }
                    },
                    "validate": true,
                    "generalStyles": {
                        "boxShadow": {
                            "type": "boxShadow",
                            "displayName": "Box Shadow"
                        }
                    },
                    "definition": {
                        "properties": {
                            "text": {
                                "value": ""
                            },
                            "visibility": {
                                "value": "{{true}}"
                            },
                            "disabledState": {
                                "value": "{{!components.toggleswitch1.value}}"
                            },
                            "loadingState": {
                                "value": "{{components.toggleswitch2.value}}"
                            },
                            "tooltip": {
                                "value": ""
                            }
                        },
                        "styles": {
                            "textColor": {
                                "value": "{{`#${variables.textColor}`}}"
                            },
                            "borderColor": {
                                "value": "{{`#${variables.borderColor}`}}",
                                "fxActive": true
                            },
                            "loaderColor": {
                                "value": "{{`#${variables.textColor}`}}"
                            },
                            "borderRadius": {
                                "value": "{{50}}"
                            },
                            "backgroundColor": {
                                "value": "{{(listItem[10] ?? \"#ffffff\")}}",
                                "fxActive": true
                            },
                            "iconColor": {
                                "value": "#FFFFFF"
                            },
                            "direction": {
                                "value": "left"
                            },
                            "padding": {
                                "value": "default"
                            },
                            "boxShadow": {
                                "value": "0px 0px 0px 0px #00000090"
                            },
                            "icon": {
                                "value": "IconAlignBoxBottomLeft"
                            },
                            "iconVisibility": {
                                "value": false
                            },
                            "type": {
                                "value": "primary"
                            }
                        },
                        "generalStyles": {
                            "boxShadow": {
                                "value": "0px 0px 0px 0px #00000040"
                            }
                        },
                        "validation": {},
                        "others": {
                            "showOnDesktop": {
                                "value": "{{true}}"
                            },
                            "showOnMobile": {
                                "value": "{{false}}"
                            }
                        },
                        "general": {}
                    },
                    "name": "button11",
                    "displayName": "Button",
                    "description": "Trigger actions: queries, alerts, set variables etc.",
                    "component": "Button",
                    "defaultSize": {
                        "width": 4,
                        "height": 40
                    },
                    "exposedVariables": {
                        "buttonText": "Button",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false
                    },
                    "actions": [
                        {
                            "handle": "click",
                            "displayName": "Click"
                        },
                        {
                            "handle": "setText",
                            "displayName": "Set text",
                            "params": [
                                {
                                    "handle": "text",
                                    "displayName": "Text",
                                    "defaultValue": "New Text"
                                }
                            ]
                        },
                        {
                            "handle": "setVisibility",
                            "displayName": "Set visibility",
                            "params": [
                                {
                                    "handle": "disable",
                                    "displayName": "Value",
                                    "defaultValue": "{{false}}",
                                    "type": "toggle"
                                }
                            ]
                        },
                        {
                            "handle": "setDisable",
                            "displayName": "Set disable",
                            "params": [
                                {
                                    "handle": "disable",
                                    "displayName": "Value",
                                    "defaultValue": "{{false}}",
                                    "type": "toggle"
                                }
                            ]
                        },
                        {
                            "handle": "setLoading",
                            "displayName": "Set loading",
                            "params": [
                                {
                                    "handle": "loading",
                                    "displayName": "Value",
                                    "defaultValue": "{{false}}",
                                    "type": "toggle"
                                }
                            ]
                        },
                        {
                            "handle": "disable",
                            "displayName": "Disable(deprecated)",
                            "params": [
                                {
                                    "handle": "disable",
                                    "displayName": "Value",
                                    "defaultValue": "{{false}}",
                                    "type": "toggle"
                                }
                            ]
                        },
                        {
                            "handle": "visibility",
                            "displayName": "Visibility(deprecated)",
                            "params": [
                                {
                                    "handle": "visible",
                                    "displayName": "Value",
                                    "defaultValue": "{{false}}",
                                    "type": "toggle"
                                }
                            ]
                        },
                        {
                            "handle": "loading",
                            "displayName": "Loading(deprecated)",
                            "params": [
                                {
                                    "handle": "loading",
                                    "displayName": "Value",
                                    "defaultValue": "{{false}}",
                                    "type": "toggle"
                                }
                            ]
                        }
                    ],
                    "parent": "e9e243bb-1e30-4427-9983-33848b0d608a"
                },
                "componentName": "button11",
                "key": 0.462395148031732,
                "resolvedProperties": {
                    "text": "",
                    "visibility": true,
                    "disabledState": false,
                    "loadingState": false,
                    "tooltip": ""
                },
                "resolvedStyles": {
                    "textColor": "#fff",
                    "borderColor": "#ffffff00",
                    "loaderColor": "#fff",
                    "borderRadius": 50,
                    "backgroundColor": "#0000ff",
                    "iconColor": "#FFFFFF",
                    "direction": "left",
                    "padding": "default",
                    "boxShadow": "0px 0px 0px 0px #00000090",
                    "icon": "IconAlignBoxBottomLeft",
                    "iconVisibility": false,
                    "type": "primary"
                }
            },
            {
                ComponentToRender: null,
                component: {
                    "properties": {
                        "data": {
                            "type": "code",
                            "displayName": "List data",
                            "validation": {
                                "schema": {
                                    "type": "union",
                                    "schemas": [
                                        {
                                            "type": "array",
                                            "element": {
                                                "type": "object"
                                            }
                                        },
                                        {
                                            "type": "array",
                                            "element": {
                                                "type": "string"
                                            }
                                        }
                                    ]
                                },
                                "defaultValue": "[{text: 'Sample text 1'}]"
                            }
                        },
                        "mode": {
                            "type": "select",
                            "displayName": "Mode",
                            "options": [
                                {
                                    "name": "list",
                                    "value": "list"
                                },
                                {
                                    "name": "grid",
                                    "value": "grid"
                                }
                            ],
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": "list"
                            }
                        },
                        "columns": {
                            "type": "number",
                            "displayName": "Columns",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 3
                            },
                            "conditionallyRender": {
                                "key": "mode",
                                "value": "grid"
                            }
                        },
                        "rowHeight": {
                            "type": "code",
                            "displayName": "Row height",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 100
                            }
                        },
                        "showBorder": {
                            "type": "code",
                            "displayName": "Show bottom border",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": true
                            },
                            "conditionallyRender": {
                                "key": "mode",
                                "value": "list"
                            }
                        },
                        "enablePagination": {
                            "type": "toggle",
                            "displayName": "Enable pagination",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": false
                            }
                        },
                        "rowsPerPage": {
                            "type": "code",
                            "displayName": "Rows per page",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 10
                            }
                        }
                    },
                    "general": {
                        "tooltip": {
                            "type": "code",
                            "displayName": "Tooltip",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "others": {
                        "showOnDesktop": {
                            "type": "toggle",
                            "displayName": "Show on desktop"
                        },
                        "showOnMobile": {
                            "type": "toggle",
                            "displayName": "Show on mobile"
                        }
                    },
                    "events": {
                        "onRowClicked": {
                            "displayName": "Row clicked (Deprecated)"
                        },
                        "onRecordClicked": {
                            "displayName": "Record clicked"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "type": "color",
                            "displayName": "Background color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": "#fff"
                            }
                        },
                        "borderColor": {
                            "type": "color",
                            "displayName": "Border color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": "#dadcde"
                            }
                        },
                        "visibility": {
                            "type": "toggle",
                            "displayName": "Visibility",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": true
                            }
                        },
                        "disabledState": {
                            "type": "toggle",
                            "displayName": "Disable",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": false
                            }
                        },
                        "borderRadius": {
                            "type": "number",
                            "displayName": "Border radius",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 4
                            }
                        }
                    },
                    "validate": true,
                    "generalStyles": {
                        "boxShadow": {
                            "type": "boxShadow",
                            "displayName": "Box Shadow"
                        }
                    },
                    "definition": {
                        "properties": {
                            "data": {
                                "value": "{{queries.generateColorCodes.data}}"
                            },
                            "mode": {
                                "value": "list"
                            },
                            "columns": {
                                "value": "{{3}}"
                            },
                            "rowHeight": {
                                "value": "100"
                            },
                            "visible": {
                                "value": "{{true}}"
                            },
                            "showBorder": {
                                "value": "{{false}}"
                            },
                            "rowsPerPage": {
                                "value": "{{10}}"
                            },
                            "enablePagination": {
                                "value": "{{false}}"
                            }
                        },
                        "styles": {
                            "backgroundColor": {
                                "value": "{{`#${variables.backgroundColor}`}}",
                                "fxActive": true
                            },
                            "borderColor": {
                                "value": "#ffffff00"
                            },
                            "visibility": {
                                "value": "{{true}}"
                            },
                            "disabledState": {
                                "value": "{{false}}"
                            },
                            "borderRadius": {
                                "value": "{{10}}"
                            }
                        },
                        "generalStyles": {
                            "boxShadow": {
                                "value": "0px 0px 0px 0px #00000040"
                            }
                        },
                        "validation": {},
                        "others": {
                            "showOnDesktop": {
                                "value": "{{true}}"
                            },
                            "showOnMobile": {
                                "value": "{{false}}"
                            }
                        },
                        "general": {}
                    },
                    "name": "listview1",
                    "displayName": "List View",
                    "description": "List multiple items",
                    "defaultSize": {
                        "width": 30,
                        "height": 300
                    },
                    "defaultChildren": [
                        {
                            "componentName": "Image",
                            "layout": {
                                "top": 15,
                                "left": 3,
                                "height": 100
                            },
                            "properties": [
                                "source"
                            ],
                            "accessorKey": "imageURL"
                        },
                        {
                            "componentName": "Text",
                            "layout": {
                                "top": 50,
                                "left": 11,
                                "height": 30
                            },
                            "properties": [
                                "text"
                            ],
                            "accessorKey": "text"
                        },
                        {
                            "componentName": "Button",
                            "layout": {
                                "top": 50,
                                "left": 26,
                                "height": 30
                            },
                            "incrementWidth": 2,
                            "properties": [
                                "text"
                            ],
                            "accessorKey": "buttonText"
                        }
                    ],
                    "component": "Listview",
                    "exposedVariables": {
                        "data": [
                            {}
                        ]
                    },
                    "parent": null
                }

            },

            {


                "props": {
                    "id": "e9e243bb-1e30-4427-9983-33848b0d608a",
                    "widgetHeight": 510,
                    "componentType": "Listview",
                    "subContainerIndex": null,
                    "widgetWidth": 1477.9069767441858,
                    "inCanvas": true,
                    "darkMode": false
                },
                ComponentToRender: 'useMemo => getComponentToRender(props.componentType)',
                customResolvables: null,
                validateWidget: null,
                updateDependencyValues: null,
                fireEvent: null,
                getDefaultStyles: null,



                "componentDefinition": {
                    "component": {
                        "properties": {
                            "data": {
                                "type": "code",
                                "displayName": "List data",
                                "validation": {
                                    "schema": {
                                        "type": "union",
                                        "schemas": [
                                            {
                                                "type": "array",
                                                "element": {
                                                    "type": "object"
                                                }
                                            },
                                            {
                                                "type": "array",
                                                "element": {
                                                    "type": "string"
                                                }
                                            }
                                        ]
                                    },
                                    "defaultValue": "[{text: 'Sample text 1'}]"
                                }
                            },
                            "mode": {
                                "type": "select",
                                "displayName": "Mode",
                                "options": [
                                    {
                                        "name": "list",
                                        "value": "list"
                                    },
                                    {
                                        "name": "grid",
                                        "value": "grid"
                                    }
                                ],
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": "list"
                                }
                            },
                            "columns": {
                                "type": "number",
                                "displayName": "Columns",
                                "validation": {
                                    "schema": {
                                        "type": "number"
                                    },
                                    "defaultValue": 3
                                },
                                "conditionallyRender": {
                                    "key": "mode",
                                    "value": "grid"
                                }
                            },
                            "rowHeight": {
                                "type": "code",
                                "displayName": "Row height",
                                "validation": {
                                    "schema": {
                                        "type": "number"
                                    },
                                    "defaultValue": 100
                                }
                            },
                            "showBorder": {
                                "type": "code",
                                "displayName": "Show bottom border",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    },
                                    "defaultValue": true
                                },
                                "conditionallyRender": {
                                    "key": "mode",
                                    "value": "list"
                                }
                            },
                            "enablePagination": {
                                "type": "toggle",
                                "displayName": "Enable pagination",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    },
                                    "defaultValue": false
                                }
                            },
                            "rowsPerPage": {
                                "type": "code",
                                "displayName": "Rows per page",
                                "validation": {
                                    "schema": {
                                        "type": "number"
                                    },
                                    "defaultValue": 10
                                }
                            }
                        },
                        "general": {
                            "tooltip": {
                                "type": "code",
                                "displayName": "Tooltip",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "others": {
                            "showOnDesktop": {
                                "type": "toggle",
                                "displayName": "Show on desktop"
                            },
                            "showOnMobile": {
                                "type": "toggle",
                                "displayName": "Show on mobile"
                            }
                        },
                        "events": {
                            "onRowClicked": {
                                "displayName": "Row clicked (Deprecated)"
                            },
                            "onRecordClicked": {
                                "displayName": "Record clicked"
                            }
                        },
                        "styles": {
                            "backgroundColor": {
                                "type": "color",
                                "displayName": "Background color",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": "#fff"
                                }
                            },
                            "borderColor": {
                                "type": "color",
                                "displayName": "Border color",
                                "validation": {
                                    "schema": {
                                        "type": "string"
                                    },
                                    "defaultValue": "#dadcde"
                                }
                            },
                            "visibility": {
                                "type": "toggle",
                                "displayName": "Visibility",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    },
                                    "defaultValue": true
                                }
                            },
                            "disabledState": {
                                "type": "toggle",
                                "displayName": "Disable",
                                "validation": {
                                    "schema": {
                                        "type": "boolean"
                                    },
                                    "defaultValue": false
                                }
                            },
                            "borderRadius": {
                                "type": "number",
                                "displayName": "Border radius",
                                "validation": {
                                    "schema": {
                                        "type": "number"
                                    },
                                    "defaultValue": 4
                                }
                            }
                        },
                        "validate": true,
                        "generalStyles": {
                            "boxShadow": {
                                "type": "boxShadow",
                                "displayName": "Box Shadow"
                            }
                        },
                        "definition": {
                            "properties": {
                                "data": {
                                    "value": "{{queries.generateColorCodes.data}}"
                                },
                                "mode": {
                                    "value": "list"
                                },
                                "columns": {
                                    "value": "{{3}}"
                                },
                                "rowHeight": {
                                    "value": "100"
                                },
                                "visible": {
                                    "value": "{{true}}"
                                },
                                "showBorder": {
                                    "value": "{{false}}"
                                },
                                "rowsPerPage": {
                                    "value": "{{10}}"
                                },
                                "enablePagination": {
                                    "value": "{{false}}"
                                }
                            },
                            "styles": {
                                "backgroundColor": {
                                    "value": "{{`#${variables.backgroundColor}`}}",
                                    "fxActive": true
                                },
                                "borderColor": {
                                    "value": "#ffffff00"
                                },
                                "visibility": {
                                    "value": "{{true}}"
                                },
                                "disabledState": {
                                    "value": "{{false}}"
                                },
                                "borderRadius": {
                                    "value": "{{10}}"
                                }
                            },
                            "generalStyles": {
                                "boxShadow": {
                                    "value": "0px 0px 0px 0px #00000040"
                                }
                            },
                            "validation": {},
                            "others": {
                                "showOnDesktop": {
                                    "value": "{{true}}"
                                },
                                "showOnMobile": {
                                    "value": "{{false}}"
                                }
                            },
                            "general": {}
                        },
                        "name": "listview1",
                        "displayName": "List View",
                        "description": "List multiple items",
                        "defaultSize": {
                            "width": 30,
                            "height": 300
                        },
                        "defaultChildren": [
                            {
                                "componentName": "Image",
                                "layout": {
                                    "top": 15,
                                    "left": 3,
                                    "height": 100
                                },
                                "properties": [
                                    "source"
                                ],
                                "accessorKey": "imageURL"
                            },
                            {
                                "componentName": "Text",
                                "layout": {
                                    "top": 50,
                                    "left": 11,
                                    "height": 30
                                },
                                "properties": [
                                    "text"
                                ],
                                "accessorKey": "text"
                            },
                            {
                                "componentName": "Button",
                                "layout": {
                                    "top": 50,
                                    "left": 26,
                                    "height": 30
                                },
                                "incrementWidth": 2,
                                "properties": [
                                    "text"
                                ],
                                "accessorKey": "buttonText"
                            }
                        ],
                        "component": "Listview",
                        "exposedVariables": {
                            "data": [
                                {}
                            ]
                        },
                        "parent": null
                    },
                    "layouts": {
                        "desktop": {
                            "top": 350,
                            "left": 1,
                            "width": 41,
                            "height": 510
                        },
                        "mobile": {
                            "top": 240,
                            "left": 12,
                            "width": 20,
                            "height": 300
                        }
                    },
                    "withDefaultChildren": false
                },
                "component": {
                    "properties": {
                        "data": {
                            "type": "code",
                            "displayName": "List data",
                            "validation": {
                                "schema": {
                                    "type": "union",
                                    "schemas": [
                                        {
                                            "type": "array",
                                            "element": {
                                                "type": "object"
                                            }
                                        },
                                        {
                                            "type": "array",
                                            "element": {
                                                "type": "string"
                                            }
                                        }
                                    ]
                                },
                                "defaultValue": "[{text: 'Sample text 1'}]"
                            }
                        },
                        "mode": {
                            "type": "select",
                            "displayName": "Mode",
                            "options": [
                                {
                                    "name": "list",
                                    "value": "list"
                                },
                                {
                                    "name": "grid",
                                    "value": "grid"
                                }
                            ],
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": "list"
                            }
                        },
                        "columns": {
                            "type": "number",
                            "displayName": "Columns",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 3
                            },
                            "conditionallyRender": {
                                "key": "mode",
                                "value": "grid"
                            }
                        },
                        "rowHeight": {
                            "type": "code",
                            "displayName": "Row height",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 100
                            }
                        },
                        "showBorder": {
                            "type": "code",
                            "displayName": "Show bottom border",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": true
                            },
                            "conditionallyRender": {
                                "key": "mode",
                                "value": "list"
                            }
                        },
                        "enablePagination": {
                            "type": "toggle",
                            "displayName": "Enable pagination",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": false
                            }
                        },
                        "rowsPerPage": {
                            "type": "code",
                            "displayName": "Rows per page",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 10
                            }
                        }
                    },
                    "general": {
                        "tooltip": {
                            "type": "code",
                            "displayName": "Tooltip",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "others": {
                        "showOnDesktop": {
                            "type": "toggle",
                            "displayName": "Show on desktop"
                        },
                        "showOnMobile": {
                            "type": "toggle",
                            "displayName": "Show on mobile"
                        }
                    },
                    "events": {
                        "onRowClicked": {
                            "displayName": "Row clicked (Deprecated)"
                        },
                        "onRecordClicked": {
                            "displayName": "Record clicked"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "type": "color",
                            "displayName": "Background color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": "#fff"
                            }
                        },
                        "borderColor": {
                            "type": "color",
                            "displayName": "Border color",
                            "validation": {
                                "schema": {
                                    "type": "string"
                                },
                                "defaultValue": "#dadcde"
                            }
                        },
                        "visibility": {
                            "type": "toggle",
                            "displayName": "Visibility",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": true
                            }
                        },
                        "disabledState": {
                            "type": "toggle",
                            "displayName": "Disable",
                            "validation": {
                                "schema": {
                                    "type": "boolean"
                                },
                                "defaultValue": false
                            }
                        },
                        "borderRadius": {
                            "type": "number",
                            "displayName": "Border radius",
                            "validation": {
                                "schema": {
                                    "type": "number"
                                },
                                "defaultValue": 4
                            }
                        }
                    },
                    "validate": true,
                    "generalStyles": {
                        "boxShadow": {
                            "type": "boxShadow",
                            "displayName": "Box Shadow"
                        }
                    },
                    "definition": {
                        "properties": {
                            "data": {
                                "value": "{{queries.generateColorCodes.data}}"
                            },
                            "mode": {
                                "value": "list"
                            },
                            "columns": {
                                "value": "{{3}}"
                            },
                            "rowHeight": {
                                "value": "100"
                            },
                            "visible": {
                                "value": "{{true}}"
                            },
                            "showBorder": {
                                "value": "{{false}}"
                            },
                            "rowsPerPage": {
                                "value": "{{10}}"
                            },
                            "enablePagination": {
                                "value": "{{false}}"
                            }
                        },
                        "styles": {
                            "backgroundColor": {
                                "value": "{{`#${variables.backgroundColor}`}}",
                                "fxActive": true
                            },
                            "borderColor": {
                                "value": "#ffffff00"
                            },
                            "visibility": {
                                "value": "{{true}}"
                            },
                            "disabledState": {
                                "value": "{{false}}"
                            },
                            "borderRadius": {
                                "value": "{{10}}"
                            }
                        },
                        "generalStyles": {
                            "boxShadow": {
                                "value": "0px 0px 0px 0px #00000040"
                            }
                        },
                        "validation": {},
                        "others": {
                            "showOnDesktop": {
                                "value": "{{true}}"
                            },
                            "showOnMobile": {
                                "value": "{{false}}"
                            }
                        },
                        "general": {}
                    },
                    "name": "listview1",
                    "displayName": "List View",
                    "description": "List multiple items",
                    "defaultSize": {
                        "width": 30,
                        "height": 300
                    },
                    "defaultChildren": [
                        {
                            "componentName": "Image",
                            "layout": {
                                "top": 15,
                                "left": 3,
                                "height": 100
                            },
                            "properties": [
                                "source"
                            ],
                            "accessorKey": "imageURL"
                        },
                        {
                            "componentName": "Text",
                            "layout": {
                                "top": 50,
                                "left": 11,
                                "height": 30
                            },
                            "properties": [
                                "text"
                            ],
                            "accessorKey": "text"
                        },
                        {
                            "componentName": "Button",
                            "layout": {
                                "top": 50,
                                "left": 26,
                                "height": 30
                            },
                            "incrementWidth": 2,
                            "properties": [
                                "text"
                            ],
                            "accessorKey": "buttonText"
                        }
                    ],
                    "component": "Listview",
                    "exposedVariables": {
                        "data": [
                            {}
                        ]
                    },
                    "parent": null
                },
                "componentName": "listview1",
                "key": 0.8975914022625185,
                "resolvedProperties": {
                    "data": [],
                    "mode": "list",
                    "columns": 3,
                    "rowHeight": 100,
                    "visible": true,
                    "showBorder": false,
                    "rowsPerPage": 10,
                    "enablePagination": false
                },
                "resolvedStyles": {
                    "backgroundColor": "#undefined",
                    "borderColor": "#ffffff00",
                    "visibility": true,
                    "disabledState": false,
                    "borderRadius": 10
                },
                "resolvedGeneralProperties": {},
                "resolvedGeneralStyles": {
                    "boxShadow": "0px 0px 0px 0px #00000040"
                },
                "unResolvedValidation": {},
                "resolvedValidation": {},
                "transformedStyles": {
                    "backgroundColor": "#undefined",
                    "borderColor": "#ffffff00",
                    "visibility": true,
                    "disabledState": false,
                    "borderRadius": 10
                },
                "obj": {
                    "properties": {
                        "data": [],
                        "mode": "list",
                        "columns": 3,
                        "rowHeight": 100,
                        "visible": true,
                        "showBorder": false,
                        "rowsPerPage": 10,
                        "enablePagination": false
                    },
                    "styles": {
                        "boxShadow": "0px 0px 0px 0px #00000040",
                        "backgroundColor": "#undefined",
                        "borderColor": "#ffffff00",
                        "visibility": true,
                        "disabledState": false,
                        "borderRadius": 10
                    },
                    "validation": {}
                }
            }
        ],

        'componentToRenderProps': {
            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
            "key": 0.41741643641899184,
            "obj": {
                "properties": {
                    "text": "",
                    "visibility": true,
                    "disabledState": false,
                    "loadingState": false,
                    "tooltip": ""
                },
                "styles": {
                    "boxShadow": "0px 0px 0px 0px #00000090",
                    "textColor": "#fff",
                    "borderColor": "#ffffff00",
                    "loaderColor": "#fff",
                    "borderRadius": 50,
                    "backgroundColor": "#0000ff",
                    "iconColor": "#FFFFFF",
                    "direction": "left",
                    "padding": "default",
                    "icon": "IconAlignBoxBottomLeft",
                    "iconVisibility": false,
                    "type": "primary"
                }
            },
            "parentId": "e9e243bb-1e30-4427-9983-33848b0d608a",
            "componentName": "button11"
        }
    },

    leftSidebarInspector: {
        hook3: {
            "d0b59eca-261b-4113-b911-1002bc8264f8": "button8",
            "e9e243bb-1e30-4427-9983-33848b0d608a": "listview1",
            "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33": "button1",
            "35fc4979-925c-4485-8f7a-7546711cee90": "button2",
            "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb": "button3",
            "10fe2f54-9f11-4e49-befa-e1945029d07f": "button4",
            "91a25b5d-c01a-47c3-927b-3fd8c9a38767": "button5",
            "98cb85ac-2f01-421b-b256-48d8dfd5a6bc": "button6",
            "0ccb98c2-f9f8-4554-a807-025d97f3226a": "button7",
            "d786eed0-4490-4444-ad57-67774c5fafe2": "button9",
            "fe46fcb9-ab78-43eb-a561-3ce359922169": "button10",
            "f9f374f4-c25a-4233-8c7c-21ac3e8dd561": "button11",
            "158c3820-bfd4-427e-9052-b139ea50e124": "container1",
            "5dc32d90-0e42-4952-a7e8-9b0653b2b353": "textinput4",
            "852441e4-2b12-44a2-9b17-13cc05297ac9": "button20",
            "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8": "button19",
            "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28": "textinput1",
            "9d5f645f-49b6-4f61-a695-b73227793b5e": "text8",
            "95a4a110-bf2c-4c81-9819-47c52ce35df7": "textinput2",
            "5908d87a-da1f-4f16-8005-84dcc581c878": "text9",
            "235c881e-ee12-4eca-89d6-85258a92bca5": "textinput3",
            "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7": "button21",
            "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702": "text10",
            "fbe930e1-295c-4def-b4ad-b3d399dcac3a": "button22",
            "2da296aa-206b-4ded-b46c-50489a2df490": "button23",
            "965bdd8d-3af7-4788-add9-2740bdd11045": "button24",
            "c2d6aca2-555e-4544-b534-c1905e09a6df": "text11",
            "b54d2649-2a42-4e71-a713-440f18533a18": "button25",
            "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6": "text12",
            "88da4e09-8cd5-4d6e-9530-550298f1379f": "toggleswitch1",
            "07eef94a-0cb5-4e0e-bb80-637310d45ccb": "text13",
            "8e5fe569-0c22-4da8-baa9-3cb2d17aba77": "textinput5",
            "359d31e0-e1d2-40c1-a949-5b21a863bc10": "text14",
            "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943": "toggleswitch2",
            "05f29a72-9e46-4765-bbe2-d11cc426da53": "text15",
            "bb8d291c-3053-4fa5-978e-7aa9228b4e68": "divider1"
        },
        hook4: {
            "button1": {
                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33"
            },
            "button10": {
                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169"
            },
            "button11": {
                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561"
            },
            "button19": {
                "buttonText": "Generate colour palette",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8"
            },
            "button2": {
                "id": "35fc4979-925c-4485-8f7a-7546711cee90"
            },
            "button20": {
                "buttonText": "Set canvas background colour",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "852441e4-2b12-44a2-9b17-13cc05297ac9"
            },
            "button21": {
                "buttonText": "Set button text/loader colour",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7"
            },
            "button22": {
                "buttonText": "🔄",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "fbe930e1-295c-4def-b4ad-b3d399dcac3a"
            },
            "button23": {
                "buttonText": "🔄",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "2da296aa-206b-4ded-b46c-50489a2df490"
            },
            "button24": {
                "buttonText": "Set button border colour",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "965bdd8d-3af7-4788-add9-2740bdd11045"
            },
            "button25": {
                "buttonText": "🔄",
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "b54d2649-2a42-4e71-a713-440f18533a18"
            },
            "button3": {
                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb"
            },
            "button4": {
                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f"
            },
            "button5": {
                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767"
            },
            "button6": {
                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc"
            },
            "button7": {
                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a"
            },
            "button8": {
                "id": "d0b59eca-261b-4113-b911-1002bc8264f8"
            },
            "button9": {
                "id": "d786eed0-4490-4444-ad57-67774c5fafe2"
            },
            "container1": {
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "id": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "divider1": {
                "value": {},
                "id": "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
            },
            "listview1": {
                "data": {
                    "0": {
                        "button8": {
                            "buttonText": "#c0cbe9",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#4365be",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#5876c5",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#6d87cc",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#8298d3",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#97a9db",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#abbae2",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#d5dcf0",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#eaedf7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "1": {
                        "button8": {
                            "buttonText": "#0e1936",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#2a4ba4",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#254392",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#203a80",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#1c326d",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#172a5b",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#122149",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#091024",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#040812",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "2": {
                        "button8": {
                            "buttonText": "#c054b7",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#4354b7",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#5854b7",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#6d54b7",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#8254b7",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#9754b7",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#ab54b7",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#d554b7",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#ea54b7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "3": {
                        "button8": {
                            "buttonText": "#2fcbb7",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#2f65b7",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#2f76b7",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#2f87b7",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#2f98b7",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#2fa9b7",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#2fbab7",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#2fdcb7",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#2fedb7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "4": {
                        "button8": {
                            "buttonText": "#2f54e9",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#2f54be",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#2f54c5",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#2f54cc",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#2f54d3",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#2f54db",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#2f54e2",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#2f54f0",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#2f54f7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    }
                },
                "children": {
                    "0": {
                        "button8": {
                            "buttonText": "#c0cbe9",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#4365be",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#5876c5",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#6d87cc",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#8298d3",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#97a9db",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#abbae2",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#d5dcf0",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#eaedf7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "1": {
                        "button8": {
                            "buttonText": "#0e1936",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#2a4ba4",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#254392",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#203a80",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#1c326d",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#172a5b",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#122149",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#091024",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#040812",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "2": {
                        "button8": {
                            "buttonText": "#c054b7",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#4354b7",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#5854b7",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#6d54b7",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#8254b7",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#9754b7",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#ab54b7",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#d554b7",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#ea54b7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "3": {
                        "button8": {
                            "buttonText": "#2fcbb7",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#2f65b7",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#2f76b7",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#2f87b7",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#2f98b7",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#2fa9b7",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#2fbab7",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#2fdcb7",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#2fedb7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    },
                    "4": {
                        "button8": {
                            "buttonText": "#2f54e9",
                            "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button1": {
                            "buttonText": "#2f54b7",
                            "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button2": {
                            "buttonText": "#2f54be",
                            "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button3": {
                            "buttonText": "#2f54c5",
                            "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button4": {
                            "buttonText": "#2f54cc",
                            "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button5": {
                            "buttonText": "#2f54d3",
                            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button6": {
                            "buttonText": "#2f54db",
                            "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button7": {
                            "buttonText": "#2f54e2",
                            "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button9": {
                            "buttonText": "#2f54f0",
                            "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button10": {
                            "buttonText": "#2f54f7",
                            "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        },
                        "button11": {
                            "buttonText": "",
                            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                            "isLoading": false,
                            "isVisible": true,
                            "isDisabled": false
                        }
                    }
                },
                "id": "e9e243bb-1e30-4427-9983-33848b0d608a"
            },
            "text10": {
                "text": "#",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702"
            },
            "text11": {
                "text": "#",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "c2d6aca2-555e-4544-b534-c1905e09a6df"
            },
            "text12": {
                "text": "Enable state",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6"
            },
            "text13": {
                "text": "Custom text",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "07eef94a-0cb5-4e0e-bb80-637310d45ccb"
            },
            "text14": {
                "text": "Loading state",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "359d31e0-e1d2-40c1-a949-5b21a863bc10"
            },
            "text15": {
                "text": "Colour palette generator",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "05f29a72-9e46-4765-bbe2-d11cc426da53"
            },
            "text8": {
                "text": "#",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "9d5f645f-49b6-4f61-a695-b73227793b5e"
            },
            "text9": {
                "text": "#",
                "isVisible": true,
                "isLoading": false,
                "isDisabled": false,
                "id": "5908d87a-da1f-4f16-8005-84dcc581c878"
            },
            "textinput1": {
                "value": "2f54b7",
                "isMandatory": false,
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "label": "",
                "isValid": true,
                "id": "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28"
            },
            "textinput2": {
                "value": "ffffffaa",
                "isMandatory": false,
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "label": "",
                "isValid": true,
                "id": "95a4a110-bf2c-4c81-9819-47c52ce35df7"
            },
            "textinput3": {
                "value": "ffffffaa",
                "isMandatory": false,
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "label": "",
                "isValid": true,
                "id": "235c881e-ee12-4eca-89d6-85258a92bca5"
            },
            "textinput4": {
                "value": "ffffffaa",
                "isMandatory": false,
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "label": "",
                "isValid": true,
                "id": "5dc32d90-0e42-4952-a7e8-9b0653b2b353"
            },
            "textinput5": {
                "value": "",
                "isMandatory": false,
                "isVisible": true,
                "isDisabled": false,
                "isLoading": false,
                "label": "",
                "isValid": true,
                "id": "8e5fe569-0c22-4da8-baa9-3cb2d17aba77"
            },
            "toggleswitch1": {
                "value": true,
                "id": "88da4e09-8cd5-4d6e-9530-550298f1379f"
            },
            "toggleswitch2": {
                "value": false,
                "id": "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943"
            }
        },
        hook5: {
            "generateColorCodes": {
                "isLoading": false,
                "data": [
                    [
                        "#2f54b7",
                        "#4365be",
                        "#5876c5",
                        "#6d87cc",
                        "#8298d3",
                        "#97a9db",
                        "#abbae2",
                        "#c0cbe9",
                        "#d5dcf0",
                        "#eaedf7",
                        "#ffffff"
                    ],
                    [
                        "#2f54b7",
                        "#2a4ba4",
                        "#254392",
                        "#203a80",
                        "#1c326d",
                        "#172a5b",
                        "#122149",
                        "#0e1936",
                        "#091024",
                        "#040812",
                        "#000000"
                    ],
                    [
                        "#2f54b7",
                        "#4354b7",
                        "#5854b7",
                        "#6d54b7",
                        "#8254b7",
                        "#9754b7",
                        "#ab54b7",
                        "#c054b7",
                        "#d554b7",
                        "#ea54b7",
                        "#ff0000"
                    ],
                    [
                        "#2f54b7",
                        "#2f65b7",
                        "#2f76b7",
                        "#2f87b7",
                        "#2f98b7",
                        "#2fa9b7",
                        "#2fbab7",
                        "#2fcbb7",
                        "#2fdcb7",
                        "#2fedb7",
                        "#00ff00"
                    ],
                    [
                        "#2f54b7",
                        "#2f54be",
                        "#2f54c5",
                        "#2f54cc",
                        "#2f54d3",
                        "#2f54db",
                        "#2f54e2",
                        "#2f54e9",
                        "#2f54f0",
                        "#2f54f7",
                        "#0000ff"
                    ]
                ],
                "rawData": [
                    [
                        "#2f54b7",
                        "#4365be",
                        "#5876c5",
                        "#6d87cc",
                        "#8298d3",
                        "#97a9db",
                        "#abbae2",
                        "#c0cbe9",
                        "#d5dcf0",
                        "#eaedf7",
                        "#ffffff"
                    ],
                    [
                        "#2f54b7",
                        "#2a4ba4",
                        "#254392",
                        "#203a80",
                        "#1c326d",
                        "#172a5b",
                        "#122149",
                        "#0e1936",
                        "#091024",
                        "#040812",
                        "#000000"
                    ],
                    [
                        "#2f54b7",
                        "#4354b7",
                        "#5854b7",
                        "#6d54b7",
                        "#8254b7",
                        "#9754b7",
                        "#ab54b7",
                        "#c054b7",
                        "#d554b7",
                        "#ea54b7",
                        "#ff0000"
                    ],
                    [
                        "#2f54b7",
                        "#2f65b7",
                        "#2f76b7",
                        "#2f87b7",
                        "#2f98b7",
                        "#2fa9b7",
                        "#2fbab7",
                        "#2fcbb7",
                        "#2fdcb7",
                        "#2fedb7",
                        "#00ff00"
                    ],
                    [
                        "#2f54b7",
                        "#2f54be",
                        "#2f54c5",
                        "#2f54cc",
                        "#2f54d3",
                        "#2f54db",
                        "#2f54e2",
                        "#2f54e9",
                        "#2f54f0",
                        "#2f54f7",
                        "#0000ff"
                    ]
                ],
                "id": "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b"
            },
            "setDefaultColors": {
                "isLoading": false,
                "id": "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e"
            }
        },
        hook6: {
            "backgroundColor": "fff",
            "borderColor": "ffffffaa",
            "textColor": "fff"
        },
        hook7: {},
        hook8: {
            "handle": "home",
            "id": "bffa8082-fd4d-4706-90b8-fca53be55c05",
            "name": "Home",
            "variables": {}
        },
        hook9: {
            "currentUser": {
                "email": "peterjaberau@gmail.com",
                "firstName": "Peter",
                "lastName": "Jaber",
                "id": "8a774396-8b7c-4f03-b9a9-1b2e803e072f",
                "avatarId": null,
                "groups": [
                    "all_users"
                ],
                "role": "admin",
                "ssoUserInfo": {}
            },
            "environment": {
                "id": "d8179b9b-7a06-4be7-aabb-b9432af93abe",
                "name": "development"
            },
            "mode": {
                "value": "edit"
            },
            "theme": {
                "name": "light"
            },
            "urlparams": {}
        },
        hook10: {
            "queries": {
                "generateColorCodes": {
                    "isLoading": false,
                    "data": [
                        [
                            "#2f54b7",
                            "#4365be",
                            "#5876c5",
                            "#6d87cc",
                            "#8298d3",
                            "#97a9db",
                            "#abbae2",
                            "#c0cbe9",
                            "#d5dcf0",
                            "#eaedf7",
                            "#ffffff"
                        ],
                        [
                            "#2f54b7",
                            "#2a4ba4",
                            "#254392",
                            "#203a80",
                            "#1c326d",
                            "#172a5b",
                            "#122149",
                            "#0e1936",
                            "#091024",
                            "#040812",
                            "#000000"
                        ],
                        [
                            "#2f54b7",
                            "#4354b7",
                            "#5854b7",
                            "#6d54b7",
                            "#8254b7",
                            "#9754b7",
                            "#ab54b7",
                            "#c054b7",
                            "#d554b7",
                            "#ea54b7",
                            "#ff0000"
                        ],
                        [
                            "#2f54b7",
                            "#2f65b7",
                            "#2f76b7",
                            "#2f87b7",
                            "#2f98b7",
                            "#2fa9b7",
                            "#2fbab7",
                            "#2fcbb7",
                            "#2fdcb7",
                            "#2fedb7",
                            "#00ff00"
                        ],
                        [
                            "#2f54b7",
                            "#2f54be",
                            "#2f54c5",
                            "#2f54cc",
                            "#2f54d3",
                            "#2f54db",
                            "#2f54e2",
                            "#2f54e9",
                            "#2f54f0",
                            "#2f54f7",
                            "#0000ff"
                        ]
                    ],
                    "rawData": [
                        [
                            "#2f54b7",
                            "#4365be",
                            "#5876c5",
                            "#6d87cc",
                            "#8298d3",
                            "#97a9db",
                            "#abbae2",
                            "#c0cbe9",
                            "#d5dcf0",
                            "#eaedf7",
                            "#ffffff"
                        ],
                        [
                            "#2f54b7",
                            "#2a4ba4",
                            "#254392",
                            "#203a80",
                            "#1c326d",
                            "#172a5b",
                            "#122149",
                            "#0e1936",
                            "#091024",
                            "#040812",
                            "#000000"
                        ],
                        [
                            "#2f54b7",
                            "#4354b7",
                            "#5854b7",
                            "#6d54b7",
                            "#8254b7",
                            "#9754b7",
                            "#ab54b7",
                            "#c054b7",
                            "#d554b7",
                            "#ea54b7",
                            "#ff0000"
                        ],
                        [
                            "#2f54b7",
                            "#2f65b7",
                            "#2f76b7",
                            "#2f87b7",
                            "#2f98b7",
                            "#2fa9b7",
                            "#2fbab7",
                            "#2fcbb7",
                            "#2fdcb7",
                            "#2fedb7",
                            "#00ff00"
                        ],
                        [
                            "#2f54b7",
                            "#2f54be",
                            "#2f54c5",
                            "#2f54cc",
                            "#2f54d3",
                            "#2f54db",
                            "#2f54e2",
                            "#2f54e9",
                            "#2f54f0",
                            "#2f54f7",
                            "#0000ff"
                        ]
                    ],
                    "id": "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b"
                },
                "setDefaultColors": {
                    "isLoading": false,
                    "id": "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e"
                }
            },
            "components": {
                "button1": {
                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33"
                },
                "button10": {
                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169"
                },
                "button11": {
                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561"
                },
                "button19": {
                    "buttonText": "Generate colour palette",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8"
                },
                "button2": {
                    "id": "35fc4979-925c-4485-8f7a-7546711cee90"
                },
                "button20": {
                    "buttonText": "Set canvas background colour",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "852441e4-2b12-44a2-9b17-13cc05297ac9"
                },
                "button21": {
                    "buttonText": "Set button text/loader colour",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7"
                },
                "button22": {
                    "buttonText": "🔄",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "fbe930e1-295c-4def-b4ad-b3d399dcac3a"
                },
                "button23": {
                    "buttonText": "🔄",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "2da296aa-206b-4ded-b46c-50489a2df490"
                },
                "button24": {
                    "buttonText": "Set button border colour",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "965bdd8d-3af7-4788-add9-2740bdd11045"
                },
                "button25": {
                    "buttonText": "🔄",
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "b54d2649-2a42-4e71-a713-440f18533a18"
                },
                "button3": {
                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb"
                },
                "button4": {
                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f"
                },
                "button5": {
                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767"
                },
                "button6": {
                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc"
                },
                "button7": {
                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a"
                },
                "button8": {
                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8"
                },
                "button9": {
                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2"
                },
                "container1": {
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "id": "158c3820-bfd4-427e-9052-b139ea50e124"
                },
                "divider1": {
                    "value": {},
                    "id": "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
                },
                "listview1": {
                    "data": {
                        "0": {
                            "button8": {
                                "buttonText": "#c0cbe9",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#4365be",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#5876c5",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#6d87cc",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#8298d3",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#97a9db",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#abbae2",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#d5dcf0",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#eaedf7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "1": {
                            "button8": {
                                "buttonText": "#0e1936",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#2a4ba4",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#254392",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#203a80",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#1c326d",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#172a5b",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#122149",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#091024",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#040812",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "2": {
                            "button8": {
                                "buttonText": "#c054b7",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#4354b7",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#5854b7",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#6d54b7",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#8254b7",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#9754b7",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#ab54b7",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#d554b7",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#ea54b7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "3": {
                            "button8": {
                                "buttonText": "#2fcbb7",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#2f65b7",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#2f76b7",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#2f87b7",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#2f98b7",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#2fa9b7",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#2fbab7",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#2fdcb7",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#2fedb7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "4": {
                            "button8": {
                                "buttonText": "#2f54e9",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#2f54be",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#2f54c5",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#2f54cc",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#2f54d3",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#2f54db",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#2f54e2",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#2f54f0",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#2f54f7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        }
                    },
                    "children": {
                        "0": {
                            "button8": {
                                "buttonText": "#c0cbe9",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#4365be",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#5876c5",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#6d87cc",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#8298d3",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#97a9db",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#abbae2",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#d5dcf0",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#eaedf7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "1": {
                            "button8": {
                                "buttonText": "#0e1936",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#2a4ba4",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#254392",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#203a80",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#1c326d",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#172a5b",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#122149",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#091024",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#040812",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "2": {
                            "button8": {
                                "buttonText": "#c054b7",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#4354b7",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#5854b7",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#6d54b7",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#8254b7",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#9754b7",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#ab54b7",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#d554b7",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#ea54b7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "3": {
                            "button8": {
                                "buttonText": "#2fcbb7",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#2f65b7",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#2f76b7",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#2f87b7",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#2f98b7",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#2fa9b7",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#2fbab7",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#2fdcb7",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#2fedb7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        },
                        "4": {
                            "button8": {
                                "buttonText": "#2f54e9",
                                "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button1": {
                                "buttonText": "#2f54b7",
                                "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button2": {
                                "buttonText": "#2f54be",
                                "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button3": {
                                "buttonText": "#2f54c5",
                                "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button4": {
                                "buttonText": "#2f54cc",
                                "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button5": {
                                "buttonText": "#2f54d3",
                                "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button6": {
                                "buttonText": "#2f54db",
                                "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button7": {
                                "buttonText": "#2f54e2",
                                "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button9": {
                                "buttonText": "#2f54f0",
                                "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button10": {
                                "buttonText": "#2f54f7",
                                "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            },
                            "button11": {
                                "buttonText": "",
                                "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                "isLoading": false,
                                "isVisible": true,
                                "isDisabled": false
                            }
                        }
                    },
                    "id": "e9e243bb-1e30-4427-9983-33848b0d608a"
                },
                "text10": {
                    "text": "#",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702"
                },
                "text11": {
                    "text": "#",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "c2d6aca2-555e-4544-b534-c1905e09a6df"
                },
                "text12": {
                    "text": "Enable state",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6"
                },
                "text13": {
                    "text": "Custom text",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "07eef94a-0cb5-4e0e-bb80-637310d45ccb"
                },
                "text14": {
                    "text": "Loading state",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "359d31e0-e1d2-40c1-a949-5b21a863bc10"
                },
                "text15": {
                    "text": "Colour palette generator",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "05f29a72-9e46-4765-bbe2-d11cc426da53"
                },
                "text8": {
                    "text": "#",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "9d5f645f-49b6-4f61-a695-b73227793b5e"
                },
                "text9": {
                    "text": "#",
                    "isVisible": true,
                    "isLoading": false,
                    "isDisabled": false,
                    "id": "5908d87a-da1f-4f16-8005-84dcc581c878"
                },
                "textinput1": {
                    "value": "2f54b7",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "label": "",
                    "isValid": true,
                    "id": "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28"
                },
                "textinput2": {
                    "value": "ffffffaa",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "label": "",
                    "isValid": true,
                    "id": "95a4a110-bf2c-4c81-9819-47c52ce35df7"
                },
                "textinput3": {
                    "value": "ffffffaa",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "label": "",
                    "isValid": true,
                    "id": "235c881e-ee12-4eca-89d6-85258a92bca5"
                },
                "textinput4": {
                    "value": "ffffffaa",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "label": "",
                    "isValid": true,
                    "id": "5dc32d90-0e42-4952-a7e8-9b0653b2b353"
                },
                "textinput5": {
                    "value": "",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false,
                    "label": "",
                    "isValid": true,
                    "id": "8e5fe569-0c22-4da8-baa9-3cb2d17aba77"
                },
                "toggleswitch1": {
                    "value": true,
                    "id": "88da4e09-8cd5-4d6e-9530-550298f1379f"
                },
                "toggleswitch2": {
                    "value": false,
                    "id": "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943"
                }
            },
            "globals": {
                "currentUser": {
                    "email": "peterjaberau@gmail.com",
                    "firstName": "Peter",
                    "lastName": "Jaber",
                    "id": "8a774396-8b7c-4f03-b9a9-1b2e803e072f",
                    "avatarId": null,
                    "groups": [
                        "all_users"
                    ],
                    "role": "admin",
                    "ssoUserInfo": {}
                },
                "environment": {
                    "id": "d8179b9b-7a06-4be7-aabb-b9432af93abe",
                    "name": "development"
                },
                "mode": {
                    "value": "edit"
                },
                "theme": {
                    "name": "light"
                },
                "urlparams": {}
            },
            "variables": {
                "backgroundColor": "fff",
                "borderColor": "ffffffaa",
                "textColor": "fff"
            },
            "page": {
                "handle": "home",
                "id": "bffa8082-fd4d-4706-90b8-fca53be55c05",
                "name": "Home",
                "variables": {}
            },
            "constants": {}
        }
    },


    'leftSidebarInspector.JSONTreeview': {
       props: {
           "data": {
               "queries": {
                   "generateColorCodes": {
                       "isLoading": false,
                       "data": [
                           [
                               "#2f54b7",
                               "#4365be",
                               "#5876c5",
                               "#6d87cc",
                               "#8298d3",
                               "#97a9db",
                               "#abbae2",
                               "#c0cbe9",
                               "#d5dcf0",
                               "#eaedf7",
                               "#ffffff"
                           ],
                           [
                               "#2f54b7",
                               "#2a4ba4",
                               "#254392",
                               "#203a80",
                               "#1c326d",
                               "#172a5b",
                               "#122149",
                               "#0e1936",
                               "#091024",
                               "#040812",
                               "#000000"
                           ],
                           [
                               "#2f54b7",
                               "#4354b7",
                               "#5854b7",
                               "#6d54b7",
                               "#8254b7",
                               "#9754b7",
                               "#ab54b7",
                               "#c054b7",
                               "#d554b7",
                               "#ea54b7",
                               "#ff0000"
                           ],
                           [
                               "#2f54b7",
                               "#2f65b7",
                               "#2f76b7",
                               "#2f87b7",
                               "#2f98b7",
                               "#2fa9b7",
                               "#2fbab7",
                               "#2fcbb7",
                               "#2fdcb7",
                               "#2fedb7",
                               "#00ff00"
                           ],
                           [
                               "#2f54b7",
                               "#2f54be",
                               "#2f54c5",
                               "#2f54cc",
                               "#2f54d3",
                               "#2f54db",
                               "#2f54e2",
                               "#2f54e9",
                               "#2f54f0",
                               "#2f54f7",
                               "#0000ff"
                           ]
                       ],
                       "rawData": [
                           [
                               "#2f54b7",
                               "#4365be",
                               "#5876c5",
                               "#6d87cc",
                               "#8298d3",
                               "#97a9db",
                               "#abbae2",
                               "#c0cbe9",
                               "#d5dcf0",
                               "#eaedf7",
                               "#ffffff"
                           ],
                           [
                               "#2f54b7",
                               "#2a4ba4",
                               "#254392",
                               "#203a80",
                               "#1c326d",
                               "#172a5b",
                               "#122149",
                               "#0e1936",
                               "#091024",
                               "#040812",
                               "#000000"
                           ],
                           [
                               "#2f54b7",
                               "#4354b7",
                               "#5854b7",
                               "#6d54b7",
                               "#8254b7",
                               "#9754b7",
                               "#ab54b7",
                               "#c054b7",
                               "#d554b7",
                               "#ea54b7",
                               "#ff0000"
                           ],
                           [
                               "#2f54b7",
                               "#2f65b7",
                               "#2f76b7",
                               "#2f87b7",
                               "#2f98b7",
                               "#2fa9b7",
                               "#2fbab7",
                               "#2fcbb7",
                               "#2fdcb7",
                               "#2fedb7",
                               "#00ff00"
                           ],
                           [
                               "#2f54b7",
                               "#2f54be",
                               "#2f54c5",
                               "#2f54cc",
                               "#2f54d3",
                               "#2f54db",
                               "#2f54e2",
                               "#2f54e9",
                               "#2f54f0",
                               "#2f54f7",
                               "#0000ff"
                           ]
                       ],
                       "id": "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b"
                   },
                   "setDefaultColors": {
                       "isLoading": false,
                       "id": "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e"
                   }
               },
               "components": {
                   "button1": {
                       "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33"
                   },
                   "button10": {
                       "id": "fe46fcb9-ab78-43eb-a561-3ce359922169"
                   },
                   "button11": {
                       "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561"
                   },
                   "button19": {
                       "buttonText": "Generate colour palette",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8"
                   },
                   "button2": {
                       "id": "35fc4979-925c-4485-8f7a-7546711cee90"
                   },
                   "button20": {
                       "buttonText": "Set canvas background colour",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "852441e4-2b12-44a2-9b17-13cc05297ac9"
                   },
                   "button21": {
                       "buttonText": "Set button text/loader colour",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7"
                   },
                   "button22": {
                       "buttonText": "🔄",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "fbe930e1-295c-4def-b4ad-b3d399dcac3a"
                   },
                   "button23": {
                       "buttonText": "🔄",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "2da296aa-206b-4ded-b46c-50489a2df490"
                   },
                   "button24": {
                       "buttonText": "Set button border colour",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "965bdd8d-3af7-4788-add9-2740bdd11045"
                   },
                   "button25": {
                       "buttonText": "🔄",
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "b54d2649-2a42-4e71-a713-440f18533a18"
                   },
                   "button3": {
                       "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb"
                   },
                   "button4": {
                       "id": "10fe2f54-9f11-4e49-befa-e1945029d07f"
                   },
                   "button5": {
                       "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767"
                   },
                   "button6": {
                       "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc"
                   },
                   "button7": {
                       "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a"
                   },
                   "button8": {
                       "id": "d0b59eca-261b-4113-b911-1002bc8264f8"
                   },
                   "button9": {
                       "id": "d786eed0-4490-4444-ad57-67774c5fafe2"
                   },
                   "container1": {
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "id": "158c3820-bfd4-427e-9052-b139ea50e124"
                   },
                   "divider1": {
                       "value": {},
                       "id": "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
                   },
                   "listview1": {
                       "data": {
                           "0": {
                               "button8": {
                                   "buttonText": "#c0cbe9",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#4365be",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#5876c5",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#6d87cc",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#8298d3",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#97a9db",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#abbae2",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#d5dcf0",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#eaedf7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "1": {
                               "button8": {
                                   "buttonText": "#0e1936",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#2a4ba4",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#254392",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#203a80",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#1c326d",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#172a5b",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#122149",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#091024",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#040812",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "2": {
                               "button8": {
                                   "buttonText": "#c054b7",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#4354b7",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#5854b7",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#6d54b7",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#8254b7",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#9754b7",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#ab54b7",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#d554b7",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#ea54b7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "3": {
                               "button8": {
                                   "buttonText": "#2fcbb7",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#2f65b7",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#2f76b7",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#2f87b7",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#2f98b7",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#2fa9b7",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#2fbab7",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#2fdcb7",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#2fedb7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "4": {
                               "button8": {
                                   "buttonText": "#2f54e9",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#2f54be",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#2f54c5",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#2f54cc",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#2f54d3",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#2f54db",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#2f54e2",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#2f54f0",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#2f54f7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           }
                       },
                       "children": {
                           "0": {
                               "button8": {
                                   "buttonText": "#c0cbe9",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#4365be",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#5876c5",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#6d87cc",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#8298d3",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#97a9db",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#abbae2",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#d5dcf0",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#eaedf7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "1": {
                               "button8": {
                                   "buttonText": "#0e1936",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#2a4ba4",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#254392",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#203a80",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#1c326d",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#172a5b",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#122149",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#091024",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#040812",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "2": {
                               "button8": {
                                   "buttonText": "#c054b7",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#4354b7",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#5854b7",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#6d54b7",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#8254b7",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#9754b7",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#ab54b7",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#d554b7",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#ea54b7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "3": {
                               "button8": {
                                   "buttonText": "#2fcbb7",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#2f65b7",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#2f76b7",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#2f87b7",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#2f98b7",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#2fa9b7",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#2fbab7",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#2fdcb7",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#2fedb7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           },
                           "4": {
                               "button8": {
                                   "buttonText": "#2f54e9",
                                   "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button1": {
                                   "buttonText": "#2f54b7",
                                   "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button2": {
                                   "buttonText": "#2f54be",
                                   "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button3": {
                                   "buttonText": "#2f54c5",
                                   "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button4": {
                                   "buttonText": "#2f54cc",
                                   "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button5": {
                                   "buttonText": "#2f54d3",
                                   "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button6": {
                                   "buttonText": "#2f54db",
                                   "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button7": {
                                   "buttonText": "#2f54e2",
                                   "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button9": {
                                   "buttonText": "#2f54f0",
                                   "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button10": {
                                   "buttonText": "#2f54f7",
                                   "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               },
                               "button11": {
                                   "buttonText": "",
                                   "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                   "isLoading": false,
                                   "isVisible": true,
                                   "isDisabled": false
                               }
                           }
                       },
                       "id": "e9e243bb-1e30-4427-9983-33848b0d608a"
                   },
                   "text10": {
                       "text": "#",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702"
                   },
                   "text11": {
                       "text": "#",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "c2d6aca2-555e-4544-b534-c1905e09a6df"
                   },
                   "text12": {
                       "text": "Enable state",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6"
                   },
                   "text13": {
                       "text": "Custom text",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "07eef94a-0cb5-4e0e-bb80-637310d45ccb"
                   },
                   "text14": {
                       "text": "Loading state",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "359d31e0-e1d2-40c1-a949-5b21a863bc10"
                   },
                   "text15": {
                       "text": "Colour palette generator",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "05f29a72-9e46-4765-bbe2-d11cc426da53"
                   },
                   "text8": {
                       "text": "#",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "9d5f645f-49b6-4f61-a695-b73227793b5e"
                   },
                   "text9": {
                       "text": "#",
                       "isVisible": true,
                       "isLoading": false,
                       "isDisabled": false,
                       "id": "5908d87a-da1f-4f16-8005-84dcc581c878"
                   },
                   "textinput1": {
                       "value": "2f54b7",
                       "isMandatory": false,
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "label": "",
                       "isValid": true,
                       "id": "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28"
                   },
                   "textinput2": {
                       "value": "ffffffaa",
                       "isMandatory": false,
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "label": "",
                       "isValid": true,
                       "id": "95a4a110-bf2c-4c81-9819-47c52ce35df7"
                   },
                   "textinput3": {
                       "value": "ffffffaa",
                       "isMandatory": false,
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "label": "",
                       "isValid": true,
                       "id": "235c881e-ee12-4eca-89d6-85258a92bca5"
                   },
                   "textinput4": {
                       "value": "ffffffaa",
                       "isMandatory": false,
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "label": "",
                       "isValid": true,
                       "id": "5dc32d90-0e42-4952-a7e8-9b0653b2b353"
                   },
                   "textinput5": {
                       "value": "",
                       "isMandatory": false,
                       "isVisible": true,
                       "isDisabled": false,
                       "isLoading": false,
                       "label": "",
                       "isValid": true,
                       "id": "8e5fe569-0c22-4da8-baa9-3cb2d17aba77"
                   },
                   "toggleswitch1": {
                       "value": true,
                       "id": "88da4e09-8cd5-4d6e-9530-550298f1379f"
                   },
                   "toggleswitch2": {
                       "value": false,
                       "id": "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943"
                   }
               },
               "globals": {
                   "currentUser": {
                       "email": "peterjaberau@gmail.com",
                       "firstName": "Peter",
                       "lastName": "Jaber",
                       "id": "8a774396-8b7c-4f03-b9a9-1b2e803e072f",
                       "avatarId": null,
                       "groups": [
                           "all_users"
                       ],
                       "role": "admin",
                       "ssoUserInfo": {}
                   },
                   "environment": {
                       "id": "d8179b9b-7a06-4be7-aabb-b9432af93abe",
                       "name": "development"
                   },
                   "mode": {
                       "value": "edit"
                   },
                   "theme": {
                       "name": "light"
                   },
                   "urlparams": {}
               },
               "variables": {
                   "backgroundColor": "fff",
                   "borderColor": "ffffffaa",
                   "textColor": "fff"
               },
               "page": {
                   "handle": "home",
                   "id": "bffa8082-fd4d-4706-90b8-fca53be55c05",
                   "name": "Home",
                   "variables": {}
               },
               "constants": {}
           },
           "useIcons": true,
           "iconsList": [
               {
                   "iconName": "generateColorCodes"
               },
               {
                   "iconName": "setDefaultColors"
               },
               {
                   "iconName": "button8",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "listview1",
                   "iconPath": "assets/images/icons/widgets/listview.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button1",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button2",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button3",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button4",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button5",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button6",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button7",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button9",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button10",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button11",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "container1",
                   "iconPath": "assets/images/icons/widgets/container.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "textinput4",
                   "iconPath": "assets/images/icons/widgets/textinput.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button20",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button19",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "textinput1",
                   "iconPath": "assets/images/icons/widgets/textinput.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text8",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "textinput2",
                   "iconPath": "assets/images/icons/widgets/textinput.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text9",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "textinput3",
                   "iconPath": "assets/images/icons/widgets/textinput.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button21",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text10",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button22",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button23",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button24",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text11",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "button25",
                   "iconPath": "assets/images/icons/widgets/button.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text12",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "toggleswitch1",
                   "iconPath": "assets/images/icons/widgets/toggleswitch.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text13",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "textinput5",
                   "iconPath": "assets/images/icons/widgets/textinput.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text14",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "toggleswitch2",
                   "iconPath": "assets/images/icons/widgets/toggleswitch.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "text15",
                   "iconPath": "assets/images/icons/widgets/text.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "divider1",
                   "iconPath": "assets/images/icons/widgets/divider.svg",
                   "className": "component-icon"
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "loading",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setLoading as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "disable",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setDisable as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               },
               {
                   "iconName": "visibility",
                   "className": "component-icon",
                   "tooltipMessage": "This function will be deprecated soon, You can use setVisibility as an alternative",
                   "isInfoIcon": true
               }
           ],
           "useIndentedBlock": true,
           "enableCopyToClipboard": true,
           "useActions": true,
           "actionsList": [
               {
                   "for": "queries",
                   "actions": [
                       {
                           "name": "Run Query",
                           "icon": true,
                           "src": "assets/images/icons/editor/play.svg",
                           "width": 8,
                           "height": 8
                       }
                   ],
                   "enableForAllChildren": false,
                   "enableFor1stLevelChildren": true
               },
               {
                   "for": "components",
                   "actions": [
                       {
                           "name": "Select Widget",
                           "icon": false,
                           "onSelect": true
                       },
                       {
                           "name": "Go to component",
                           "icon": true,
                           "iconName": "select"
                       },
                       {
                           "name": "Delete Component",
                           "icon": true,
                           "iconName": "trash"
                       }
                   ],
                   "enableForAllChildren": false,
                   "enableFor1stLevelChildren": true
               },
               {
                   "for": "all",
                   "actions": [
                       {
                           "name": "Copy value",
                           "icon": false
                       }
                   ]
               }
           ],
           "actionIdentifier": "id",
           "expandWithLabels": true,
           "treeType": "inspector",
           "darkMode": false
       },
        state: {
            "data": {
                "queries": {
                    "generateColorCodes": {
                        "isLoading": false,
                        "data": [
                            [
                                "#2f54b7",
                                "#4365be",
                                "#5876c5",
                                "#6d87cc",
                                "#8298d3",
                                "#97a9db",
                                "#abbae2",
                                "#c0cbe9",
                                "#d5dcf0",
                                "#eaedf7",
                                "#ffffff"
                            ],
                            [
                                "#2f54b7",
                                "#2a4ba4",
                                "#254392",
                                "#203a80",
                                "#1c326d",
                                "#172a5b",
                                "#122149",
                                "#0e1936",
                                "#091024",
                                "#040812",
                                "#000000"
                            ],
                            [
                                "#2f54b7",
                                "#4354b7",
                                "#5854b7",
                                "#6d54b7",
                                "#8254b7",
                                "#9754b7",
                                "#ab54b7",
                                "#c054b7",
                                "#d554b7",
                                "#ea54b7",
                                "#ff0000"
                            ],
                            [
                                "#2f54b7",
                                "#2f65b7",
                                "#2f76b7",
                                "#2f87b7",
                                "#2f98b7",
                                "#2fa9b7",
                                "#2fbab7",
                                "#2fcbb7",
                                "#2fdcb7",
                                "#2fedb7",
                                "#00ff00"
                            ],
                            [
                                "#2f54b7",
                                "#2f54be",
                                "#2f54c5",
                                "#2f54cc",
                                "#2f54d3",
                                "#2f54db",
                                "#2f54e2",
                                "#2f54e9",
                                "#2f54f0",
                                "#2f54f7",
                                "#0000ff"
                            ]
                        ],
                        "rawData": [
                            [
                                "#2f54b7",
                                "#4365be",
                                "#5876c5",
                                "#6d87cc",
                                "#8298d3",
                                "#97a9db",
                                "#abbae2",
                                "#c0cbe9",
                                "#d5dcf0",
                                "#eaedf7",
                                "#ffffff"
                            ],
                            [
                                "#2f54b7",
                                "#2a4ba4",
                                "#254392",
                                "#203a80",
                                "#1c326d",
                                "#172a5b",
                                "#122149",
                                "#0e1936",
                                "#091024",
                                "#040812",
                                "#000000"
                            ],
                            [
                                "#2f54b7",
                                "#4354b7",
                                "#5854b7",
                                "#6d54b7",
                                "#8254b7",
                                "#9754b7",
                                "#ab54b7",
                                "#c054b7",
                                "#d554b7",
                                "#ea54b7",
                                "#ff0000"
                            ],
                            [
                                "#2f54b7",
                                "#2f65b7",
                                "#2f76b7",
                                "#2f87b7",
                                "#2f98b7",
                                "#2fa9b7",
                                "#2fbab7",
                                "#2fcbb7",
                                "#2fdcb7",
                                "#2fedb7",
                                "#00ff00"
                            ],
                            [
                                "#2f54b7",
                                "#2f54be",
                                "#2f54c5",
                                "#2f54cc",
                                "#2f54d3",
                                "#2f54db",
                                "#2f54e2",
                                "#2f54e9",
                                "#2f54f0",
                                "#2f54f7",
                                "#0000ff"
                            ]
                        ],
                        "id": "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b"
                    },
                    "setDefaultColors": {
                        "isLoading": false,
                        "id": "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e"
                    }
                },
                "components": {
                    "button1": {
                        "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33"
                    },
                    "button10": {
                        "id": "fe46fcb9-ab78-43eb-a561-3ce359922169"
                    },
                    "button11": {
                        "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561"
                    },
                    "button19": {
                        "buttonText": "Generate colour palette",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8"
                    },
                    "button2": {
                        "id": "35fc4979-925c-4485-8f7a-7546711cee90"
                    },
                    "button20": {
                        "buttonText": "Set canvas background colour",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "852441e4-2b12-44a2-9b17-13cc05297ac9"
                    },
                    "button21": {
                        "buttonText": "Set button text/loader colour",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7"
                    },
                    "button22": {
                        "buttonText": "🔄",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "fbe930e1-295c-4def-b4ad-b3d399dcac3a"
                    },
                    "button23": {
                        "buttonText": "🔄",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "2da296aa-206b-4ded-b46c-50489a2df490"
                    },
                    "button24": {
                        "buttonText": "Set button border colour",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "965bdd8d-3af7-4788-add9-2740bdd11045"
                    },
                    "button25": {
                        "buttonText": "🔄",
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "b54d2649-2a42-4e71-a713-440f18533a18"
                    },
                    "button3": {
                        "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb"
                    },
                    "button4": {
                        "id": "10fe2f54-9f11-4e49-befa-e1945029d07f"
                    },
                    "button5": {
                        "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767"
                    },
                    "button6": {
                        "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc"
                    },
                    "button7": {
                        "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a"
                    },
                    "button8": {
                        "id": "d0b59eca-261b-4113-b911-1002bc8264f8"
                    },
                    "button9": {
                        "id": "d786eed0-4490-4444-ad57-67774c5fafe2"
                    },
                    "container1": {
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "id": "158c3820-bfd4-427e-9052-b139ea50e124"
                    },
                    "divider1": {
                        "value": {},
                        "id": "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
                    },
                    "listview1": {
                        "data": {
                            "0": {
                                "button8": {
                                    "buttonText": "#c0cbe9",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#4365be",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#5876c5",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#6d87cc",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#8298d3",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#97a9db",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#abbae2",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#d5dcf0",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#eaedf7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "1": {
                                "button8": {
                                    "buttonText": "#0e1936",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#2a4ba4",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#254392",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#203a80",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#1c326d",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#172a5b",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#122149",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#091024",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#040812",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "2": {
                                "button8": {
                                    "buttonText": "#c054b7",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#4354b7",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#5854b7",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#6d54b7",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#8254b7",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#9754b7",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#ab54b7",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#d554b7",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#ea54b7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "3": {
                                "button8": {
                                    "buttonText": "#2fcbb7",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#2f65b7",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#2f76b7",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#2f87b7",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#2f98b7",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#2fa9b7",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#2fbab7",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#2fdcb7",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#2fedb7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "4": {
                                "button8": {
                                    "buttonText": "#2f54e9",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#2f54be",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#2f54c5",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#2f54cc",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#2f54d3",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#2f54db",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#2f54e2",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#2f54f0",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#2f54f7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            }
                        },
                        "children": {
                            "0": {
                                "button8": {
                                    "buttonText": "#c0cbe9",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#4365be",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#5876c5",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#6d87cc",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#8298d3",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#97a9db",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#abbae2",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#d5dcf0",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#eaedf7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "1": {
                                "button8": {
                                    "buttonText": "#0e1936",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#2a4ba4",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#254392",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#203a80",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#1c326d",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#172a5b",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#122149",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#091024",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#040812",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "2": {
                                "button8": {
                                    "buttonText": "#c054b7",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#4354b7",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#5854b7",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#6d54b7",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#8254b7",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#9754b7",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#ab54b7",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#d554b7",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#ea54b7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "3": {
                                "button8": {
                                    "buttonText": "#2fcbb7",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#2f65b7",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#2f76b7",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#2f87b7",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#2f98b7",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#2fa9b7",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#2fbab7",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#2fdcb7",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#2fedb7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            },
                            "4": {
                                "button8": {
                                    "buttonText": "#2f54e9",
                                    "id": "d0b59eca-261b-4113-b911-1002bc8264f8",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button1": {
                                    "buttonText": "#2f54b7",
                                    "id": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button2": {
                                    "buttonText": "#2f54be",
                                    "id": "35fc4979-925c-4485-8f7a-7546711cee90",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button3": {
                                    "buttonText": "#2f54c5",
                                    "id": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button4": {
                                    "buttonText": "#2f54cc",
                                    "id": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button5": {
                                    "buttonText": "#2f54d3",
                                    "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button6": {
                                    "buttonText": "#2f54db",
                                    "id": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button7": {
                                    "buttonText": "#2f54e2",
                                    "id": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button9": {
                                    "buttonText": "#2f54f0",
                                    "id": "d786eed0-4490-4444-ad57-67774c5fafe2",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button10": {
                                    "buttonText": "#2f54f7",
                                    "id": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                },
                                "button11": {
                                    "buttonText": "",
                                    "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                                    "isLoading": false,
                                    "isVisible": true,
                                    "isDisabled": false
                                }
                            }
                        },
                        "id": "e9e243bb-1e30-4427-9983-33848b0d608a"
                    },
                    "text10": {
                        "text": "#",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702"
                    },
                    "text11": {
                        "text": "#",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "c2d6aca2-555e-4544-b534-c1905e09a6df"
                    },
                    "text12": {
                        "text": "Enable state",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6"
                    },
                    "text13": {
                        "text": "Custom text",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "07eef94a-0cb5-4e0e-bb80-637310d45ccb"
                    },
                    "text14": {
                        "text": "Loading state",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "359d31e0-e1d2-40c1-a949-5b21a863bc10"
                    },
                    "text15": {
                        "text": "Colour palette generator",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "05f29a72-9e46-4765-bbe2-d11cc426da53"
                    },
                    "text8": {
                        "text": "#",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "9d5f645f-49b6-4f61-a695-b73227793b5e"
                    },
                    "text9": {
                        "text": "#",
                        "isVisible": true,
                        "isLoading": false,
                        "isDisabled": false,
                        "id": "5908d87a-da1f-4f16-8005-84dcc581c878"
                    },
                    "textinput1": {
                        "value": "2f54b7",
                        "isMandatory": false,
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "label": "",
                        "isValid": true,
                        "id": "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28"
                    },
                    "textinput2": {
                        "value": "ffffffaa",
                        "isMandatory": false,
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "label": "",
                        "isValid": true,
                        "id": "95a4a110-bf2c-4c81-9819-47c52ce35df7"
                    },
                    "textinput3": {
                        "value": "ffffffaa",
                        "isMandatory": false,
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "label": "",
                        "isValid": true,
                        "id": "235c881e-ee12-4eca-89d6-85258a92bca5"
                    },
                    "textinput4": {
                        "value": "ffffffaa",
                        "isMandatory": false,
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "label": "",
                        "isValid": true,
                        "id": "5dc32d90-0e42-4952-a7e8-9b0653b2b353"
                    },
                    "textinput5": {
                        "value": "",
                        "isMandatory": false,
                        "isVisible": true,
                        "isDisabled": false,
                        "isLoading": false,
                        "label": "",
                        "isValid": true,
                        "id": "8e5fe569-0c22-4da8-baa9-3cb2d17aba77"
                    },
                    "toggleswitch1": {
                        "value": true,
                        "id": "88da4e09-8cd5-4d6e-9530-550298f1379f"
                    },
                    "toggleswitch2": {
                        "value": false,
                        "id": "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943"
                    }
                },
                "globals": {
                    "currentUser": {
                        "email": "peterjaberau@gmail.com",
                        "firstName": "Peter",
                        "lastName": "Jaber",
                        "id": "8a774396-8b7c-4f03-b9a9-1b2e803e072f",
                        "avatarId": null,
                        "groups": [
                            "all_users"
                        ],
                        "role": "admin",
                        "ssoUserInfo": {}
                    },
                    "environment": {
                        "id": "d8179b9b-7a06-4be7-aabb-b9432af93abe",
                        "name": "development"
                    },
                    "mode": {
                        "value": "edit"
                    },
                    "theme": {
                        "name": "light"
                    },
                    "urlparams": {}
                },
                "variables": {
                    "backgroundColor": "fff",
                    "borderColor": "ffffffaa",
                    "textColor": "fff"
                },
                "page": {
                    "handle": "home",
                    "id": "bffa8082-fd4d-4706-90b8-fca53be55c05",
                    "name": "Home",
                    "variables": {}
                },
                "constants": {}
            },
            "shouldExpandNode": false,
            "currentNode": "Root",
            "selectedNode": null,
            "hoveredNode": null,
            "darkTheme": false,
            "showHideActions": false,
            "enableCopyToClipboard": true,
            "actionsList": [
                {
                    "for": "queries",
                    "actions": [
                        {
                            "name": "Run Query",
                            "icon": true,
                            "src": "assets/images/icons/editor/play.svg",
                            "width": 8,
                            "height": 8
                        }
                    ],
                    "enableForAllChildren": false,
                    "enableFor1stLevelChildren": true
                },
                {
                    "for": "components",
                    "actions": [
                        {
                            "name": "Select Widget",
                            "icon": false,
                            "onSelect": true
                        },
                        {
                            "name": "Go to component",
                            "icon": true,
                            "iconName": "select"
                        },
                        {
                            "name": "Delete Component",
                            "icon": true,
                            "iconName": "trash"
                        }
                    ],
                    "enableForAllChildren": false,
                    "enableFor1stLevelChildren": true
                },
                {
                    "for": "all",
                    "actions": [
                        {
                            "name": "Copy value",
                            "icon": false
                        }
                    ]
                }
            ],
            "useActions": true
        }
    },










}



export const componentsCaptures = {

    'Editor.Components.Button': {
        'button5.props': {
            "id": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
            "properties": {
                "text": "#8298d3",
                "visibility": true,
                "disabledState": false,
                "loadingState": false,
                "tooltip": "Copy colour code #8298d3"
            },
            "styles": {
                "boxShadow": "0px 0px 0px 0px #00000090",
                "textColor": "#fff",
                "borderColor": "#ffffff00",
                "loaderColor": "#fff",
                "borderRadius": 50,
                "backgroundColor": "#8298d3",
                "iconColor": "#FFFFFF",
                "direction": "left",
                "padding": "default",
                "icon": "IconAlignBoxBottomLeft",
                "iconVisibility": false,
                "type": "primary"
            },
            "height": 56,
            "width": 102.97025419145484,
            "parentId": "e9e243bb-1e30-4427-9983-33848b0d608a",
            "darkMode": false,
            "componentName": "button5"
        },


        'button11.props': {
            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
            "properties": {
                "text": "",
                "visibility": true,
                "disabledState": false,
                "loadingState": false,
                "tooltip": ""
            },
            "styles": {
                "boxShadow": "0px 0px 0px 0px #00000090",
                "textColor": "#fff",
                "borderColor": "#ffffff00",
                "loaderColor": "#fff",
                "borderRadius": 50,
                "backgroundColor": "#0000ff",
                "iconColor": "#FFFFFF",
                "direction": "left",
                "padding": "default",
                "icon": "IconAlignBoxBottomLeft",
                "iconVisibility": false,
                "type": "primary"
            },
            "height": 56,
            "width": 34.32341806381827,
            "parentId": "e9e243bb-1e30-4427-9983-33848b0d608a",
            "darkMode": false,
            "componentName": "button11"
        }


    },

    'AppBuilder.AppCanvas.RenderWidget[ComponentToRender]': {
        "componentType": "Button",
        "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
        "key": 0.8182641237441659,
        "properties": {
            "text": "",
            "visibility": true,
            "disabledState": false,
            "loadingState": false,
            "tooltip": ""
        },
        "styles": {
            "boxShadow": "0px 0px 0px 0px #00000090",
            "textColor": "#fff",
            "borderColor": "#ffffff00",
            "loaderColor": "#fff",
            "borderRadius": 50,
            "backgroundColor": "#0000ff",
            "iconColor": "#FFFFFF",
            "direction": "left",
            "padding": "default",
            "icon": "IconAlignBoxBottomLeft",
            "iconVisibility": false,
            "type": "primary"
        },
        "setExposedVariable": "setExposedVariable",
        "setExposedVariables": "setExposedVariables",
        "height": 56,
        "width": 34.32341806381827,
        "parentId": "e9e243bb-1e30-4427-9983-33848b0d608a",
        "fireEvent": "fireEvent",
        "validate": "validate",
        "resetComponent": "resetComponent",
        "onComponentClick": "onComponentClick",
        "darkMode": "darkMode",
        "componentName": "button11",
        "_obj": {
            "properties": {
                "text": "",
                "visibility": true,
                "disabledState": false,
                "loadingState": false,
                "tooltip": ""
            },
            "styles": {
                "boxShadow": "0px 0px 0px 0px #00000090",
                "textColor": "#fff",
                "borderColor": "#ffffff00",
                "loaderColor": "#fff",
                "borderRadius": 50,
                "backgroundColor": "#0000ff",
                "iconColor": "#FFFFFF",
                "direction": "left",
                "padding": "default",
                "icon": "IconAlignBoxBottomLeft",
                "iconVisibility": false,
                "type": "primary"
            }
        }
    }

}
