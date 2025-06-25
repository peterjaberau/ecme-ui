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
    renderWidget:  {
        misc: {
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
        },
        'button11NotResolved': {
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
        'button11Resolved': {
            "componentType": "Button",
            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
            "key": 0.8182641237441659,
            "properties": {
                "text": "Button widget",
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
    editorInspector: {
        data: {
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




}


export default {
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

    systemApp: {
        appData: {
            editingVersion: null,
            currentUser: null,
            apps: [],
            appName: null,
            slug: null,
            creationMode: 'DEFAULT',
            isPublic: null,
            isMaintenanceOn: null,
            organizationId: null,
            currentVersionId: null,
            userId: null,
            app: {},
            components: [],
            pages: [],
            layouts: [],
            events: [],
            eventHandlers: [],
            appDefinitionDiff: null,
            appDiffOptions: {},
            isSaving: false,
            appId: null,
            areOthersOnSameVersionAndPage: false,
            appVersionPreviewLink: null,
            metadata: null,
            eventsUpdatedLoader: false,
            eventsCreatedLoader: false,
            actionsUpdatedLoader: false,
            eventToDeleteLoaderIndex: null,
            isDarkMode: false,
        },
        appVersion: {
            editingVersion: null,
            isUserEditingTheVersion: false,
            releasedVersionId: null,
            isVersionReleased: false,
            isEditorFreezed: false,
            isBannerMandatory: false,
            appVersions: [],
            isAppVersionPromoted: false,
            currentAppVersionEnvironment: null,
        },
        currentSession: {
            organizations: [],
            isGettingOrganizations: false,
        },
        currentState: {
            queries: {},
            components: {},
            globals: {
                theme: { name: 'light' },
                urlparams: null,
                environment: {
                    id: null,
                    name: null,
                },
                mode: {},
                currentUser: {},
            },
            errors: {},
            variables: {},
            client: {},
            server: {},
            page: {
                handle: '',
                variables: {},
            },
            succededQuery: {},
            constants: {},
            isEditorReady: false,
        },
        dataQueries: {
            dataQueries: [],
            secrets: [],
            sortBy: 'updated_at',
            sortOrder: 'desc',
            loadingDataQueries: true,
            isDeletingQueryInProcess: false,
            /** TODO: Below two params are primarily used only for websocket invocation post update. Can be removed onece websocket logic is revamped */
            // isCreatingQueryInProcess: false,
            creatingQueryInProcessId: null,
            isUpdatingQueryInProcess: false,
            /** When a 'Create Data Query' operation is in progress, rename/update API calls are cached in the variable. */
            queuedActions: {},
            // queuedQueriesForRunOnAppLoad: [],
        },
        dataSources: {
            dataSources: [],
            loadingDataSources: true,
            globalDataSources: [],
            sampleDataSource: null,
            globalDataSourceStatus: {
                isSaving: false,
                isEditing: false,
                unSavedModalVisible: false,
                action: null,
                saveAction: null,
            },
        },
        editor: {
            currentLayout: 'desktop',
            showComments: false,
            hoveredComponent: '',
            selectionInProgress: false,
            selectedComponents: [],
            isEditorActive: false,
            selectedComponent: null,
            canUndo: false,
            canRedo: false,
            currentVersion: {},
            noOfVersionsSupported: 100,
            appDefinition: {},
            isUpdatingEditorStateInProcess: false,
            saveError: false,
            isLoading: true,
            defaultComponentStateComputed: false,
            showLeftSidebar: true,
            queryConfirmationList: [],
            currentPageId: null,
            currentSessionId: null, //uuid()
            currentAppEnvironment: null,
            currentAppEnvironmentId: null,
            featureAccess: null,
            componentsNeedsUpdateOnNextRender: [],
            appMode: 'auto',
            editorCanvasWidth: 1092,
            canvasBackground: {},
            pageSwitchInProgress: false,
        },
        environmentsAndVersions: {
            selectedVersion: null,
            selectedEnvironment: null,
            appVersionEnvironment: null,
            versionsPromotedToEnvironment: [],
            environments: [],
            shouldRenderPromoteButton: false,
            shouldRenderReleaseButton: false,
            initializedEnvironmentDropdown: false,
            environmentsLazyLoaded: false,
            appVersionsLazyLoaded: false,
            previewInitialEnvironmentId: null,
            developmentVersions: [],
        },
        grid: {
            draggedElement: null,
            activeGrid: null,
            noOfGrid: 43,
            draggedSubContainer: false,
            resizingComponentId: null,
            dragTarget: null,
            isGroupHandleHoverd: false,
            idGroupDragged: false,
            openModalWidgetId: null,
            subContainerWidths: {},
        },
        keyboardShortcuts: {
            componentStack: [],
        },
        license: {
            featureAccess: {},
            featuresLoaded: false,
        },
        queryPanel: {
            queryPanelHeight: 70,
            previewPanelHeight: 0,
            selectedQuery: null,
            selectedDataSource: null,
            queryToBeRun: null,
            previewLoading: false,
            queryPreviewData: '',
            showCreateQuery: false,
            nameInputFocussed: false,
            previewPanelExpanded: false,
        },
        whiteLabel: {
            activeOrganizationId: null,
            whiteLabelText: 'white_label_text',
            whiteLabelLogo: 'white_label_logo',
            whiteLabelFavicon: 'white_label_favicon',
            loadingWhiteLabelDetails: true,
            isWhiteLabelDetailsFetched: false,
        }

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

    builderRenderWidget: {
        'button11Resolved': {
            "componentType": "Button",
            "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
            "key": 0.8182641237441659,
            "properties": {
                "text": "Button widget",
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
        },
    },

    editor: {
        selectedComponents: [
            "f9f374f4-c25a-4233-8c7c-21ac3e8dd561"
        ],
        selectedComponent: null,
        modules: {
            canvas: {
                "componentNameIdMapping": {
                    "button8": "d0b59eca-261b-4113-b911-1002bc8264f8",
                    "listview1": "e9e243bb-1e30-4427-9983-33848b0d608a",
                    "button1": "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33",
                    "button2": "35fc4979-925c-4485-8f7a-7546711cee90",
                    "button3": "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb",
                    "button4": "10fe2f54-9f11-4e49-befa-e1945029d07f",
                    "button5": "91a25b5d-c01a-47c3-927b-3fd8c9a38767",
                    "button6": "98cb85ac-2f01-421b-b256-48d8dfd5a6bc",
                    "button7": "0ccb98c2-f9f8-4554-a807-025d97f3226a",
                    "button9": "d786eed0-4490-4444-ad57-67774c5fafe2",
                    "button10": "fe46fcb9-ab78-43eb-a561-3ce359922169",
                    "button11": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
                    "container1": "158c3820-bfd4-427e-9052-b139ea50e124",
                    "textinput4": "5dc32d90-0e42-4952-a7e8-9b0653b2b353",
                    "button20": "852441e4-2b12-44a2-9b17-13cc05297ac9",
                    "button19": "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8",
                    "textinput1": "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28",
                    "text8": "9d5f645f-49b6-4f61-a695-b73227793b5e",
                    "textinput2": "95a4a110-bf2c-4c81-9819-47c52ce35df7",
                    "text9": "5908d87a-da1f-4f16-8005-84dcc581c878",
                    "textinput3": "235c881e-ee12-4eca-89d6-85258a92bca5",
                    "button21": "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7",
                    "text10": "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702",
                    "button22": "fbe930e1-295c-4def-b4ad-b3d399dcac3a",
                    "button23": "2da296aa-206b-4ded-b46c-50489a2df490",
                    "button24": "965bdd8d-3af7-4788-add9-2740bdd11045",
                    "text11": "c2d6aca2-555e-4544-b534-c1905e09a6df",
                    "button25": "b54d2649-2a42-4e71-a713-440f18533a18",
                    "text12": "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6",
                    "toggleswitch1": "88da4e09-8cd5-4d6e-9530-550298f1379f",
                    "text13": "07eef94a-0cb5-4e0e-bb80-637310d45ccb",
                    "textinput5": "8e5fe569-0c22-4da8-baa9-3cb2d17aba77",
                    "text14": "359d31e0-e1d2-40c1-a949-5b21a863bc10",
                    "toggleswitch2": "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943",
                    "text15": "05f29a72-9e46-4765-bbe2-d11cc426da53",
                    "divider1": "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
                },
                "queryNameIdMapping": {
                    "generateColorCodes": "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b",
                    "setDefaultColors": "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e"
                },
                "queryIdNameMapping": {
                    "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b": "generateColorCodes",
                    "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e": "setDefaultColors"
                }
            }
        },

        // CodeHinterSlice
        suggestions: {
            "appHints": [
                {
                    "hint": "queries",
                    "type": "Object"
                },
                {
                    "hint": "queries.generateColorCodes.run()",
                    "type": "Function"
                },
                {
                    "hint": "queries.generateColorCodes",
                    "type": "Object"
                },
                {
                    "hint": "queries.generateColorCodes.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "queries.generateColorCodes.data",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.data[0]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[0][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[1][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[2][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[3][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.data[4][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[0][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[1][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[2][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[3][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4]",
                    "type": "Array"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][0]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][1]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][2]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][3]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][4]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][5]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.rawData[4][6]",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.id",
                    "type": "String"
                },
                {
                    "hint": "queries.generateColorCodes.metadata",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.generateColorCodes.request",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.generateColorCodes.response",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.setDefaultColors.run()",
                    "type": "Function"
                },
                {
                    "hint": "queries.setDefaultColors",
                    "type": "Object"
                },
                {
                    "hint": "queries.setDefaultColors.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "queries.setDefaultColors.data",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.setDefaultColors.rawData",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.setDefaultColors.id",
                    "type": "String"
                },
                {
                    "hint": "queries.setDefaultColors.metadata",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.setDefaultColors.request",
                    "type": "Undefined"
                },
                {
                    "hint": "queries.setDefaultColors.response",
                    "type": "Undefined"
                },
                {
                    "hint": "components",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.0.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.0.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.0.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.1.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.1.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.1.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.2.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.2.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.2.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.3.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.3.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.3.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.data.4.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.data.4.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.data.4.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button8.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button1.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button2.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button3.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button4.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button5.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button6.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button7.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button9.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button10.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.0.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.0.button11.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.0.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.0.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button8.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button1.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button2.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button3.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button4.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button5.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button6.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button7.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button9.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button10.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.1.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.1.button11.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.1.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.1.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button8.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button1.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button2.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button3.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button4.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button5.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button6.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button7.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button9.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button10.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.2.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.2.button11.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.2.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.2.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button8.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button1.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button2.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button3.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button4.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button5.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button6.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button7.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button9.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button10.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.3.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.3.button11.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.3.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.3.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button8",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button8.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button8.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button8.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button1",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button1.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button1.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button1.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button2",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button2.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button2.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button2.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button3",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button3.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button3.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button3.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button4",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button4.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button4.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button4.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button5",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button5.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button5.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button5.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button6",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button6.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button6.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button6.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button6.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button6.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button6.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button7",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button7.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button7.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button7.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button7.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button7.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button7.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button9",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button9.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button9.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button9.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button10",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button10.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button10.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button10.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button11",
                    "type": "Object"
                },
                {
                    "hint": "components.listview1.children.4.button11.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button11.id",
                    "type": "String"
                },
                {
                    "hint": "components.listview1.children.4.button11.click",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.listview1.children.4.button11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.children.4.button11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.listview1.id",
                    "type": "String"
                },
                {
                    "hint": "components.container1",
                    "type": "Object"
                },
                {
                    "hint": "components.container1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.container1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.container1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.container1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.container1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.container1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.container1.id",
                    "type": "String"
                },
                {
                    "hint": "components.textinput4",
                    "type": "Object"
                },
                {
                    "hint": "components.textinput4.value",
                    "type": "String"
                },
                {
                    "hint": "components.textinput4.isMandatory",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput4.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput4.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput4.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput4.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.setFocus",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.setBlur",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput4.label",
                    "type": "String"
                },
                {
                    "hint": "components.textinput4.isValid",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput4.id",
                    "type": "String"
                },
                {
                    "hint": "components.button20",
                    "type": "Object"
                },
                {
                    "hint": "components.button20.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button20.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button20.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button20.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button20.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button20.id",
                    "type": "String"
                },
                {
                    "hint": "components.button19",
                    "type": "Object"
                },
                {
                    "hint": "components.button19.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button19.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button19.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button19.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button19.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button19.id",
                    "type": "String"
                },
                {
                    "hint": "components.textinput1",
                    "type": "Object"
                },
                {
                    "hint": "components.textinput1.value",
                    "type": "String"
                },
                {
                    "hint": "components.textinput1.isMandatory",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput1.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput1.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput1.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput1.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.setFocus",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.setBlur",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput1.label",
                    "type": "String"
                },
                {
                    "hint": "components.textinput1.isValid",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput1.id",
                    "type": "String"
                },
                {
                    "hint": "components.text8",
                    "type": "Object"
                },
                {
                    "hint": "components.text8.text",
                    "type": "String"
                },
                {
                    "hint": "components.text8.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text8.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text8.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text8.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text8.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text8.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text8.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text8.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text8.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text8.id",
                    "type": "String"
                },
                {
                    "hint": "components.textinput2",
                    "type": "Object"
                },
                {
                    "hint": "components.textinput2.value",
                    "type": "String"
                },
                {
                    "hint": "components.textinput2.isMandatory",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput2.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput2.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput2.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput2.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.setFocus",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.setBlur",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput2.label",
                    "type": "String"
                },
                {
                    "hint": "components.textinput2.isValid",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput2.id",
                    "type": "String"
                },
                {
                    "hint": "components.text9",
                    "type": "Object"
                },
                {
                    "hint": "components.text9.text",
                    "type": "String"
                },
                {
                    "hint": "components.text9.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text9.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text9.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text9.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text9.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text9.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text9.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text9.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text9.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text9.id",
                    "type": "String"
                },
                {
                    "hint": "components.textinput3",
                    "type": "Object"
                },
                {
                    "hint": "components.textinput3.value",
                    "type": "String"
                },
                {
                    "hint": "components.textinput3.isMandatory",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput3.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput3.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput3.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput3.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.setFocus",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.setBlur",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput3.label",
                    "type": "String"
                },
                {
                    "hint": "components.textinput3.isValid",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput3.id",
                    "type": "String"
                },
                {
                    "hint": "components.button21",
                    "type": "Object"
                },
                {
                    "hint": "components.button21.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button21.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button21.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button21.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button21.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button21.id",
                    "type": "String"
                },
                {
                    "hint": "components.text10",
                    "type": "Object"
                },
                {
                    "hint": "components.text10.text",
                    "type": "String"
                },
                {
                    "hint": "components.text10.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text10.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text10.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text10.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text10.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text10.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text10.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text10.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text10.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text10.id",
                    "type": "String"
                },
                {
                    "hint": "components.button22",
                    "type": "Object"
                },
                {
                    "hint": "components.button22.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button22.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button22.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button22.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button22.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button22.id",
                    "type": "String"
                },
                {
                    "hint": "components.button23",
                    "type": "Object"
                },
                {
                    "hint": "components.button23.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button23.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button23.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button23.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button23.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button23.id",
                    "type": "String"
                },
                {
                    "hint": "components.button24",
                    "type": "Object"
                },
                {
                    "hint": "components.button24.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button24.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button24.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button24.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button24.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button24.id",
                    "type": "String"
                },
                {
                    "hint": "components.text11",
                    "type": "Object"
                },
                {
                    "hint": "components.text11.text",
                    "type": "String"
                },
                {
                    "hint": "components.text11.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text11.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text11.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text11.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text11.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text11.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text11.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text11.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text11.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text11.id",
                    "type": "String"
                },
                {
                    "hint": "components.button25",
                    "type": "Object"
                },
                {
                    "hint": "components.button25.buttonText",
                    "type": "String"
                },
                {
                    "hint": "components.button25.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button25.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button25.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.button25.click",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.loading",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.button25.id",
                    "type": "String"
                },
                {
                    "hint": "components.text12",
                    "type": "Object"
                },
                {
                    "hint": "components.text12.text",
                    "type": "String"
                },
                {
                    "hint": "components.text12.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text12.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text12.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text12.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text12.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text12.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text12.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text12.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text12.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text12.id",
                    "type": "String"
                },
                {
                    "hint": "components.toggleswitch1",
                    "type": "Object"
                },
                {
                    "hint": "components.toggleswitch1.value",
                    "type": "Boolean"
                },
                {
                    "hint": "components.toggleswitch1.id",
                    "type": "String"
                },
                {
                    "hint": "components.text13",
                    "type": "Object"
                },
                {
                    "hint": "components.text13.text",
                    "type": "String"
                },
                {
                    "hint": "components.text13.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text13.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text13.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text13.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text13.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text13.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text13.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text13.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text13.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text13.id",
                    "type": "String"
                },
                {
                    "hint": "components.textinput5",
                    "type": "Object"
                },
                {
                    "hint": "components.textinput5.value",
                    "type": "String"
                },
                {
                    "hint": "components.textinput5.isMandatory",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput5.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput5.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput5.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput5.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.setFocus",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.setBlur",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.disable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.textinput5.label",
                    "type": "String"
                },
                {
                    "hint": "components.textinput5.isValid",
                    "type": "Boolean"
                },
                {
                    "hint": "components.textinput5.id",
                    "type": "String"
                },
                {
                    "hint": "components.text14",
                    "type": "Object"
                },
                {
                    "hint": "components.text14.text",
                    "type": "String"
                },
                {
                    "hint": "components.text14.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text14.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text14.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text14.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text14.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text14.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text14.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text14.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text14.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text14.id",
                    "type": "String"
                },
                {
                    "hint": "components.toggleswitch2",
                    "type": "Object"
                },
                {
                    "hint": "components.toggleswitch2.value",
                    "type": "Boolean"
                },
                {
                    "hint": "components.toggleswitch2.id",
                    "type": "String"
                },
                {
                    "hint": "components.text15",
                    "type": "Object"
                },
                {
                    "hint": "components.text15.text",
                    "type": "String"
                },
                {
                    "hint": "components.text15.setText",
                    "type": "Function"
                },
                {
                    "hint": "components.text15.clear",
                    "type": "Function"
                },
                {
                    "hint": "components.text15.isVisible",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text15.isLoading",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text15.isDisabled",
                    "type": "Boolean"
                },
                {
                    "hint": "components.text15.visibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text15.setVisibility",
                    "type": "Function"
                },
                {
                    "hint": "components.text15.setLoading",
                    "type": "Function"
                },
                {
                    "hint": "components.text15.setDisable",
                    "type": "Function"
                },
                {
                    "hint": "components.text15.id",
                    "type": "String"
                },
                {
                    "hint": "components.divider1",
                    "type": "Object"
                },
                {
                    "hint": "components.divider1.value",
                    "type": "Object"
                },
                {
                    "hint": "components.divider1.id",
                    "type": "String"
                },
                {
                    "hint": "variables",
                    "type": "Object"
                },
                {
                    "hint": "variables.backgroundColor",
                    "type": "String"
                },
                {
                    "hint": "variables.textColor",
                    "type": "String"
                },
                {
                    "hint": "variables.borderColor",
                    "type": "String"
                },
                {
                    "hint": "constants",
                    "type": "Object"
                },
                {
                    "hint": "globals",
                    "type": "Object"
                },
                {
                    "hint": "globals.theme",
                    "type": "Object"
                },
                {
                    "hint": "globals.theme.name",
                    "type": "String"
                },
                {
                    "hint": "globals.environment",
                    "type": "Object"
                },
                {
                    "hint": "globals.environment.id",
                    "type": "String"
                },
                {
                    "hint": "globals.environment.name",
                    "type": "String"
                },
                {
                    "hint": "globals.mode",
                    "type": "Object"
                },
                {
                    "hint": "globals.mode.value",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser",
                    "type": "Object"
                },
                {
                    "hint": "globals.currentUser.email",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser.firstName",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser.lastName",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser.id",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser.avatarId",
                    "type": "Null"
                },
                {
                    "hint": "globals.currentUser.groups",
                    "type": "Array"
                },
                {
                    "hint": "globals.currentUser.groups[0]",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser.role",
                    "type": "String"
                },
                {
                    "hint": "globals.currentUser.ssoUserInfo",
                    "type": "Object"
                },
                {
                    "hint": "globals.urlparams",
                    "type": "Object"
                },
                {
                    "hint": "page",
                    "type": "Object"
                },
                {
                    "hint": "page.variables",
                    "type": "Object"
                },
                {
                    "hint": "page.id",
                    "type": "String"
                },
                {
                    "hint": "page.handle",
                    "type": "String"
                },
                {
                    "hint": "page.name",
                    "type": "String"
                },
                {
                    "hint": "actions.runQuery()",
                    "type": "method"
                },
                {
                    "hint": "actions.setVariable()",
                    "type": "method"
                },
                {
                    "hint": "actions.unSetVariable()",
                    "type": "method"
                },
                {
                    "hint": "actions.showAlert()",
                    "type": "method"
                },
                {
                    "hint": "actions.logout()",
                    "type": "method"
                },
                {
                    "hint": "actions.showModal()",
                    "type": "method"
                },
                {
                    "hint": "actions.closeModal()",
                    "type": "method"
                },
                {
                    "hint": "actions.setLocalStorage()",
                    "type": "method"
                },
                {
                    "hint": "actions.copyToClipboard()",
                    "type": "method"
                },
                {
                    "hint": "actions.goToApp()",
                    "type": "method"
                },
                {
                    "hint": "actions.generateFile()",
                    "type": "method"
                },
                {
                    "hint": "actions.setPageVariable()",
                    "type": "method"
                },
                {
                    "hint": "actions.unsetPageVariable()",
                    "type": "method"
                },
                {
                    "hint": "actions.switchPage()",
                    "type": "method"
                },
                {
                    "hint": "actions.logInfo()",
                    "type": "method"
                },
                {
                    "hint": "actions.log()",
                    "type": "method"
                },
                {
                    "hint": "actions.logError()",
                    "type": "method"
                }
            ],
            "jsHints": {
                "array": {
                    "type": "Array",
                    "methods": [
                        "constructor",
                        "at",
                        "concat",
                        "copyWithin",
                        "fill",
                        "find",
                        "findIndex",
                        "findLast",
                        "findLastIndex",
                        "lastIndexOf",
                        "pop",
                        "push",
                        "reverse",
                        "shift",
                        "unshift",
                        "slice",
                        "sort",
                        "splice",
                        "includes",
                        "indexOf",
                        "join",
                        "keys",
                        "entries",
                        "values",
                        "forEach",
                        "filter",
                        "flat",
                        "flatMap",
                        "map",
                        "every",
                        "some",
                        "reduce",
                        "reduceRight",
                        "toReversed",
                        "toSorted",
                        "toSpliced",
                        "with",
                        "toLocaleString",
                        "toString"
                    ]
                },
                "string": {
                    "type": "String",
                    "methods": [
                        "constructor",
                        "anchor",
                        "at",
                        "big",
                        "blink",
                        "bold",
                        "charAt",
                        "charCodeAt",
                        "codePointAt",
                        "concat",
                        "endsWith",
                        "fontcolor",
                        "fontsize",
                        "fixed",
                        "includes",
                        "indexOf",
                        "isWellFormed",
                        "italics",
                        "lastIndexOf",
                        "link",
                        "localeCompare",
                        "match",
                        "matchAll",
                        "normalize",
                        "padEnd",
                        "padStart",
                        "repeat",
                        "replace",
                        "replaceAll",
                        "search",
                        "slice",
                        "small",
                        "split",
                        "strike",
                        "sub",
                        "substr",
                        "substring",
                        "sup",
                        "startsWith",
                        "toString",
                        "toWellFormed",
                        "trimStart",
                        "trimLeft",
                        "trimEnd",
                        "trimRight",
                        "toLocaleLowerCase",
                        "toLocaleUpperCase",
                        "toLowerCase",
                        "toUpperCase",
                        "valueOf",
                        "trim"
                    ]
                },
                "object": {
                    "type": "Object",
                    "methods": [
                        "constructor",
                        "__defineGetter__",
                        "__defineSetter__",
                        "hasOwnProperty",
                        "__lookupGetter__",
                        "__lookupSetter__",
                        "isPrototypeOf",
                        "propertyIsEnumerable",
                        "toString",
                        "valueOf",
                        "toLocaleString"
                    ]
                },
                "boolean": {
                    "type": "Boolean",
                    "methods": [
                        "constructor",
                        "toString",
                        "valueOf"
                    ]
                },
                "number": {
                    "type": "Number",
                    "methods": [
                        "constructor",
                        "toExponential",
                        "toFixed",
                        "toPrecision",
                        "toString",
                        "valueOf",
                        "toLocaleString"
                    ]
                }
            }
        },

        resolvedStore: {
            modules: {
                canvas: {
                    exposedValues: {
                        "queries": {
                            "20ea48f3-ea06-4e8c-b770-0f1b9b2ce72b": {
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
                            "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e": {
                                "isLoading": false,
                                "id": "9be83020-74ed-4e1f-bf9c-ed1ab78f6f9e"
                            }
                        },
                        "components": {
                            "e9e243bb-1e30-4427-9983-33848b0d608a": {
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
                            "158c3820-bfd4-427e-9052-b139ea50e124": {
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "158c3820-bfd4-427e-9052-b139ea50e124"
                            },
                            "5dc32d90-0e42-4952-a7e8-9b0653b2b353": {
                                "value": "ffffffaa",
                                "isMandatory": false,
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "label": "",
                                "isValid": true,
                                "id": "5dc32d90-0e42-4952-a7e8-9b0653b2b353"
                            },
                            "852441e4-2b12-44a2-9b17-13cc05297ac9": {
                                "buttonText": "Set canvas background colour",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "852441e4-2b12-44a2-9b17-13cc05297ac9"
                            },
                            "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8": {
                                "buttonText": "Generate colour palette",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8"
                            },
                            "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28": {
                                "value": "2f54b7",
                                "isMandatory": false,
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "label": "",
                                "isValid": true,
                                "id": "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28"
                            },
                            "9d5f645f-49b6-4f61-a695-b73227793b5e": {
                                "text": "#",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "9d5f645f-49b6-4f61-a695-b73227793b5e"
                            },
                            "95a4a110-bf2c-4c81-9819-47c52ce35df7": {
                                "value": "ffffffaa",
                                "isMandatory": false,
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "label": "",
                                "isValid": true,
                                "id": "95a4a110-bf2c-4c81-9819-47c52ce35df7"
                            },
                            "5908d87a-da1f-4f16-8005-84dcc581c878": {
                                "text": "#",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "5908d87a-da1f-4f16-8005-84dcc581c878"
                            },
                            "235c881e-ee12-4eca-89d6-85258a92bca5": {
                                "value": "ffffffaa",
                                "isMandatory": false,
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "label": "",
                                "isValid": true,
                                "id": "235c881e-ee12-4eca-89d6-85258a92bca5"
                            },
                            "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7": {
                                "buttonText": "Set button text/loader colour",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7"
                            },
                            "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702": {
                                "text": "#",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702"
                            },
                            "fbe930e1-295c-4def-b4ad-b3d399dcac3a": {
                                "buttonText": "🔄",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "fbe930e1-295c-4def-b4ad-b3d399dcac3a"
                            },
                            "2da296aa-206b-4ded-b46c-50489a2df490": {
                                "buttonText": "🔄",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "2da296aa-206b-4ded-b46c-50489a2df490"
                            },
                            "965bdd8d-3af7-4788-add9-2740bdd11045": {
                                "buttonText": "Set button border colour",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "965bdd8d-3af7-4788-add9-2740bdd11045"
                            },
                            "c2d6aca2-555e-4544-b534-c1905e09a6df": {
                                "text": "#",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "c2d6aca2-555e-4544-b534-c1905e09a6df"
                            },
                            "b54d2649-2a42-4e71-a713-440f18533a18": {
                                "buttonText": "🔄",
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "id": "b54d2649-2a42-4e71-a713-440f18533a18"
                            },
                            "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6": {
                                "text": "Enable state",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6"
                            },
                            "88da4e09-8cd5-4d6e-9530-550298f1379f": {
                                "value": true,
                                "id": "88da4e09-8cd5-4d6e-9530-550298f1379f"
                            },
                            "07eef94a-0cb5-4e0e-bb80-637310d45ccb": {
                                "text": "Custom text",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "07eef94a-0cb5-4e0e-bb80-637310d45ccb"
                            },
                            "8e5fe569-0c22-4da8-baa9-3cb2d17aba77": {
                                "value": "",
                                "isMandatory": false,
                                "isVisible": true,
                                "isDisabled": false,
                                "isLoading": false,
                                "label": "",
                                "isValid": true,
                                "id": "8e5fe569-0c22-4da8-baa9-3cb2d17aba77"
                            },
                            "359d31e0-e1d2-40c1-a949-5b21a863bc10": {
                                "text": "Loading state",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "359d31e0-e1d2-40c1-a949-5b21a863bc10"
                            },
                            "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943": {
                                "value": false,
                                "id": "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943"
                            },
                            "05f29a72-9e46-4765-bbe2-d11cc426da53": {
                                "text": "Colour palette generator",
                                "isVisible": true,
                                "isLoading": false,
                                "isDisabled": false,
                                "id": "05f29a72-9e46-4765-bbe2-d11cc426da53"
                            },
                            "bb8d291c-3053-4fa5-978e-7aa9228b4e68": {
                                "value": {},
                                "id": "bb8d291c-3053-4fa5-978e-7aa9228b4e68"
                            }
                        },
                        "variables": {
                            "backgroundColor": "fff",
                            "textColor": "fff",
                            "borderColor": "ffffff00"
                        },
                        "constants": {},
                        "globals": {
                            "theme": {
                                "name": "light"
                            },
                            "environment": {
                                "id": "d8179b9b-7a06-4be7-aabb-b9432af93abe",
                                "name": "development"
                            },
                            "mode": {
                                "value": "edit"
                            },
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
                            "urlparams": {}
                        },
                        "page": {
                            "variables": {},
                            "id": "bffa8082-fd4d-4706-90b8-fca53be55c05",
                            "handle": "home",
                            "name": "Home"
                        }
                    },
                    secrets: {},
                }
            }
        }
    },

    editorInspector: {
        pathToBeInspected: null,
        data: {
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



}



