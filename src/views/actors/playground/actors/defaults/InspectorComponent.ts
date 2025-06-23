export default {
    "allComponents": {
        "d0b59eca-261b-4113-b911-1002bc8264f8": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[7]}}"
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
                            "value": "{{`Copy colour code ${listItem[7]}`}}"
                        }
                    },
                    "styles": {
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
                "name": "button8",
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
            "layouts": {
                "desktop": {
                    "top": 20,
                    "left": 29,
                    "width": 3.0000000000000004,
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
        "e9e243bb-1e30-4427-9983-33848b0d608a": {
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
        "4a1e1d0c-9826-4ea7-90d1-d8fcb4325a33": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[0]}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        },
                        "disabledState": {
                            "value": "{{!components.toggleswitch1.value}}",
                            "fxActive": true
                        },
                        "loadingState": {
                            "value": "{{components.toggleswitch2.value}}",
                            "fxActive": true
                        },
                        "tooltip": {
                            "value": "{{`Copy colour code ${listItem[0]}`}}"
                        }
                    },
                    "styles": {
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
                "name": "button1",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 1,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "35fc4979-925c-4485-8f7a-7546711cee90": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[1]}}"
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
                            "value": "{{`Copy colour code ${listItem[1]}`}}"
                        }
                    },
                    "styles": {
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
                "name": "button2",
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
            "layouts": {
                "desktop": {
                    "top": 20,
                    "left": 5,
                    "width": 3.0000000000000004,
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
        "b9d9526a-5a83-40ef-9eec-0cd2b94ca2fb": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[2]}}"
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
                            "value": "{{`Copy colour code ${listItem[2]}`}}"
                        }
                    },
                    "styles": {
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
                "name": "button3",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 9,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "10fe2f54-9f11-4e49-befa-e1945029d07f": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[3]}}"
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
                            "value": "{{`Copy colour code ${listItem[3]}`}}"
                        }
                    },
                    "styles": {
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
                            "value": "{{listItem[3] ?? \"#ffffff00\"}}",
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
                "name": "button4",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 13,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "91a25b5d-c01a-47c3-927b-3fd8c9a38767": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[4]}}"
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
                            "value": "{{`Copy colour code ${listItem[4]}`}}"
                        }
                    },
                    "styles": {
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
                            "value": "{{listItem[4] ?? \"#ffffff00\"}}",
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
                "name": "button5",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 17,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "98cb85ac-2f01-421b-b256-48d8dfd5a6bc": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[5]}}"
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
                            "value": "{{`Copy colour code ${listItem[5]}`}}"
                        }
                    },
                    "styles": {
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
                            "value": "{{listItem[5] ?? \"#ffffff00\"}}",
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
                "name": "button6",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 21,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "0ccb98c2-f9f8-4554-a807-025d97f3226a": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[6]}}"
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
                            "value": "{{`Copy colour code ${listItem[6]}`}}"
                        }
                    },
                    "styles": {
                        "textColor": {
                            "value": "{{`#${variables.textColor}`}}",
                            "fxActive": true
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
                            "value": "{{listItem[6] ?? \"#ffffff00\"}}",
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
                "name": "button7",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 25,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "d786eed0-4490-4444-ad57-67774c5fafe2": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[8]}}"
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
                            "value": "{{`Copy colour code ${listItem[8]}`}}"
                        }
                    },
                    "styles": {
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
                            "value": "{{listItem[8] ?? \"#ffffff00\"}}",
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
                "name": "button9",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 33,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "fe46fcb9-ab78-43eb-a561-3ce359922169": {
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
                            "value": "{{components.textinput5.value.length > 0 ? components.textinput5.value : listItem[9]}}"
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
                            "value": "{{`Copy colour code ${listItem[9]}`}}"
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
                            "value": "{{listItem[9] ?? \"#ffffff00\"}}",
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
                "name": "button10",
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
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 1,
                    "width": 6.976744186046512,
                    "height": 30
                },
                "desktop": {
                    "top": 20,
                    "left": 37,
                    "width": 3.0000000000000004,
                    "height": 60
                }
            },
            "withDefaultChildren": false
        },
        "f9f374f4-c25a-4233-8c7c-21ac3e8dd561": {
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
                            "value": "button11"
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
        "158c3820-bfd4-427e-9052-b139ea50e124": {
            "component": {
                "properties": {
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Loading state",
                        "section": "additionalActions",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        }
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "section": "additionalActions",
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
                        "section": "additionalActions",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        }
                    },
                    "showHeader": {
                        "type": "toggle",
                        "displayName": "Show header",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
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
                "events": {},
                "styles": {
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "container"
                    },
                    "headerBackgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#ddd"
                        },
                        "accordian": "header"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "container"
                    },
                    "headerHeight": {
                        "type": "numberInput",
                        "displayName": "Height",
                        "validation": {
                            "schema": {
                                "type": "number"
                            },
                            "defaultValue": 80
                        },
                        "accordian": "header"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border",
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
                            },
                            "defaultValue": 4
                        },
                        "accordian": "container"
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
                        "showHeader": {
                            "value": "{{true}}"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        }
                    },
                    "styles": {
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
                "name": "container1",
                "displayName": "Container",
                "description": "Group components",
                "defaultSize": {
                    "width": 5,
                    "height": 200
                },
                "component": "Container",
                "defaultChildren": [
                    {
                        "componentName": "Text",
                        "layout": {
                            "top": 20,
                            "left": 1,
                            "height": 40
                        },
                        "displayName": "ContainerText",
                        "properties": [
                            "text"
                        ],
                        "accessorKey": "text",
                        "styles": [
                            "fontWeight",
                            "textSize",
                            "textColor"
                        ],
                        "defaultValue": {
                            "text": "Container title",
                            "fontWeight": "bold",
                            "textSize": 16,
                            "textColor": "#000"
                        }
                    }
                ],
                "exposedVariables": {
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false
                },
                "actions": [
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
                                "handle": "setDisable",
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
                                "handle": "setLoading",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": null
            },
            "layouts": {
                "mobile": {
                    "top": 770,
                    "left": 5,
                    "width": 5,
                    "height": 200
                },
                "desktop": {
                    "top": 20,
                    "left": 1,
                    "width": 41,
                    "height": 310
                }
            },
            "withDefaultChildren": false
        },
        "5dc32d90-0e42-4952-a7e8-9b0653b2b353": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Label"
                        }
                    },
                    "placeholder": {
                        "type": "code",
                        "displayName": "Placeholder",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Enter your input"
                        }
                    },
                    "value": {
                        "type": "code",
                        "displayName": "Default value",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Default value"
                        }
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "onChange": {
                        "displayName": "On change"
                    },
                    "onEnterPressed": {
                        "displayName": "On enter pressed"
                    },
                    "onFocus": {
                        "displayName": "On focus"
                    },
                    "onBlur": {
                        "displayName": "On blur"
                    }
                },
                "styles": {
                    "color": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "label"
                    },
                    "alignment": {
                        "type": "switch",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "side"
                        },
                        "options": [
                            {
                                "displayName": "Side",
                                "value": "side"
                            },
                            {
                                "displayName": "Top",
                                "value": "top"
                            }
                        ],
                        "accordian": "label"
                    },
                    "direction": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
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
                        "accordian": "label",
                        "isFxNotRequired": true
                    },
                    "width": {
                        "type": "slider",
                        "displayName": "Width",
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "auto": {
                        "type": "checkbox",
                        "displayName": "auto",
                        "showLabel": false,
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "field"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CCD1D5"
                        },
                        "accordian": "field"
                    },
                    "accentColor": {
                        "type": "color",
                        "displayName": "Accent",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#4368E3"
                        },
                        "accordian": "field"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "field"
                    },
                    "errTextColor": {
                        "type": "color",
                        "displayName": "Error text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#D72D39"
                        },
                        "accordian": "field"
                    },
                    "icon": {
                        "type": "icon",
                        "displayName": "Icon",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "IconHome2"
                        },
                        "accordian": "field",
                        "visibility": false
                    },
                    "iconColor": {
                        "type": "color",
                        "displayName": "Icon color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CFD3D859"
                        },
                        "accordian": "field",
                        "visibility": false,
                        "showLabel": false
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "field"
                    },
                    "boxShadow": {
                        "type": "boxShadow",
                        "displayName": "Box Shadow",
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000040"
                        },
                        "accordian": "field"
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
                            },
                            "defaultValue": "default"
                        },
                        "isFxNotRequired": true,
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
                        "value": {
                            "value": "ffffffaa"
                        },
                        "label": "",
                        "placeholder": {
                            "value": "ffffffaa"
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
                    "styles": {
                        "textColor": {
                            "value": "#1B1F24"
                        },
                        "borderColor": {
                            "value": "var(--gray10)",
                            "fxActive": false
                        },
                        "accentColor": {
                            "value": "#4368E3"
                        },
                        "errTextColor": {
                            "value": "#D72D39"
                        },
                        "borderRadius": {
                            "value": "{{5}}"
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
                            "value": "side"
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
                "name": "textinput4",
                "displayName": "Text Input",
                "description": "User text input field",
                "component": "TextInput",
                "defaultSize": {
                    "width": 10,
                    "height": 40
                },
                "validation": {
                    "mandatory": {
                        "type": "toggle",
                        "displayName": "Make this field mandatory"
                    },
                    "regex": {
                        "type": "code",
                        "displayName": "Regex",
                        "placeholder": "^[a-zA-Z0-9_ -]{3,16}$"
                    },
                    "minLength": {
                        "type": "code",
                        "displayName": "Min length",
                        "placeholder": "Enter min length"
                    },
                    "maxLength": {
                        "type": "code",
                        "displayName": "Max length",
                        "placeholder": "Enter max length"
                    },
                    "customRule": {
                        "type": "code",
                        "displayName": "Custom validation",
                        "placeholder": "{{components.text2.text=='yes'&&'valid'}}"
                    }
                },
                "exposedVariables": {
                    "value": "",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setFocus",
                        "displayName": "Set focus"
                    },
                    {
                        "handle": "setBlur",
                        "displayName": "Set blur"
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
                                "handle": "visibility",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
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
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "desktop": {
                    "top": 140,
                    "left": 19,
                    "width": 3,
                    "height": 50
                },
                "mobile": {
                    "top": 110,
                    "left": 8,
                    "width": 6,
                    "height": 30
                }
            },
            "withDefaultChildren": false
        },
        "852441e4-2b12-44a2-9b17-13cc05297ac9": {
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
                            "value": "Set canvas background colour"
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
                    "styles": {
                        "textColor": {
                            "value": "#ffffffff",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "#ffffff00",
                            "fxActive": false
                        },
                        "loaderColor": {
                            "value": "#ffffffff",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "var(--gray11)",
                            "fxActive": false
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
                "name": "button20",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "desktop": {
                    "top": 140,
                    "left": 5,
                    "width": 9,
                    "height": 50
                },
                "mobile": {
                    "top": 60,
                    "left": 8,
                    "width": 3,
                    "height": 30
                }
            },
            "withDefaultChildren": false
        },
        "49fc9bc3-7d13-45f7-9a55-1fecdc155ed8": {
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
                            "value": "Generate colour palette"
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
                    "styles": {
                        "textColor": {
                            "value": "var(--gray1)",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "#ffffff00"
                        },
                        "loaderColor": {
                            "value": "var(--gray1)",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
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
                "name": "button19",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 30,
                    "left": 8,
                    "width": 3,
                    "height": 30
                },
                "desktop": {
                    "top": 30,
                    "left": 33,
                    "width": 9,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "55d7a4a0-e6a2-4302-9ad2-00e9b87dfa28": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Label"
                        }
                    },
                    "placeholder": {
                        "type": "code",
                        "displayName": "Placeholder",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Enter your input"
                        }
                    },
                    "value": {
                        "type": "code",
                        "displayName": "Default value",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Default value"
                        }
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "onChange": {
                        "displayName": "On change"
                    },
                    "onEnterPressed": {
                        "displayName": "On enter pressed"
                    },
                    "onFocus": {
                        "displayName": "On focus"
                    },
                    "onBlur": {
                        "displayName": "On blur"
                    }
                },
                "styles": {
                    "color": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "label"
                    },
                    "alignment": {
                        "type": "switch",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "side"
                        },
                        "options": [
                            {
                                "displayName": "Side",
                                "value": "side"
                            },
                            {
                                "displayName": "Top",
                                "value": "top"
                            }
                        ],
                        "accordian": "label"
                    },
                    "direction": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
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
                        "accordian": "label",
                        "isFxNotRequired": true
                    },
                    "width": {
                        "type": "slider",
                        "displayName": "Width",
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "auto": {
                        "type": "checkbox",
                        "displayName": "auto",
                        "showLabel": false,
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "field"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CCD1D5"
                        },
                        "accordian": "field"
                    },
                    "accentColor": {
                        "type": "color",
                        "displayName": "Accent",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#4368E3"
                        },
                        "accordian": "field"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "field"
                    },
                    "errTextColor": {
                        "type": "color",
                        "displayName": "Error text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#D72D39"
                        },
                        "accordian": "field"
                    },
                    "icon": {
                        "type": "icon",
                        "displayName": "Icon",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "IconHome2"
                        },
                        "accordian": "field",
                        "visibility": false
                    },
                    "iconColor": {
                        "type": "color",
                        "displayName": "Icon color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CFD3D859"
                        },
                        "accordian": "field",
                        "visibility": false,
                        "showLabel": false
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "field"
                    },
                    "boxShadow": {
                        "type": "boxShadow",
                        "displayName": "Box Shadow",
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000040"
                        },
                        "accordian": "field"
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
                            },
                            "defaultValue": "default"
                        },
                        "isFxNotRequired": true,
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
                        "value": {
                            "value": "2f54b7"
                        },
                        "label": "",
                        "placeholder": {
                            "value": "00000000"
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
                    "styles": {
                        "textColor": {
                            "value": "#000",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "var(--gray10)",
                            "fxActive": true
                        },
                        "accentColor": {
                            "value": "#4368E3"
                        },
                        "errTextColor": {
                            "value": "#D72D39"
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "#fff",
                            "fxActive": true
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
                            "value": "side"
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
                "name": "textinput1",
                "displayName": "Text Input",
                "description": "User text input field",
                "component": "TextInput",
                "defaultSize": {
                    "width": 10,
                    "height": 40
                },
                "validation": {
                    "mandatory": {
                        "type": "toggle",
                        "displayName": "Make this field mandatory"
                    },
                    "regex": {
                        "type": "code",
                        "displayName": "Regex",
                        "placeholder": "^[a-zA-Z0-9_ -]{3,16}$"
                    },
                    "minLength": {
                        "type": "code",
                        "displayName": "Min length",
                        "placeholder": "Enter min length"
                    },
                    "maxLength": {
                        "type": "code",
                        "displayName": "Max length",
                        "placeholder": "Enter max length"
                    },
                    "customRule": {
                        "type": "code",
                        "displayName": "Custom validation",
                        "placeholder": "{{components.text2.text=='yes'&&'valid'}}"
                    }
                },
                "exposedVariables": {
                    "value": "",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setFocus",
                        "displayName": "Set focus"
                    },
                    {
                        "handle": "setBlur",
                        "displayName": "Set blur"
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
                                "handle": "visibility",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
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
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 20,
                    "left": 8,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 30,
                    "left": 30,
                    "width": 3,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "9d5f645f-49b6-4f61-a695-b73227793b5e": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "#"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text8",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 30,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 30,
                    "left": 29,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "95a4a110-bf2c-4c81-9819-47c52ce35df7": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Label"
                        }
                    },
                    "placeholder": {
                        "type": "code",
                        "displayName": "Placeholder",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Enter your input"
                        }
                    },
                    "value": {
                        "type": "code",
                        "displayName": "Default value",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Default value"
                        }
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "onChange": {
                        "displayName": "On change"
                    },
                    "onEnterPressed": {
                        "displayName": "On enter pressed"
                    },
                    "onFocus": {
                        "displayName": "On focus"
                    },
                    "onBlur": {
                        "displayName": "On blur"
                    }
                },
                "styles": {
                    "color": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "label"
                    },
                    "alignment": {
                        "type": "switch",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "side"
                        },
                        "options": [
                            {
                                "displayName": "Side",
                                "value": "side"
                            },
                            {
                                "displayName": "Top",
                                "value": "top"
                            }
                        ],
                        "accordian": "label"
                    },
                    "direction": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
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
                        "accordian": "label",
                        "isFxNotRequired": true
                    },
                    "width": {
                        "type": "slider",
                        "displayName": "Width",
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "auto": {
                        "type": "checkbox",
                        "displayName": "auto",
                        "showLabel": false,
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "field"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CCD1D5"
                        },
                        "accordian": "field"
                    },
                    "accentColor": {
                        "type": "color",
                        "displayName": "Accent",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#4368E3"
                        },
                        "accordian": "field"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "field"
                    },
                    "errTextColor": {
                        "type": "color",
                        "displayName": "Error text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#D72D39"
                        },
                        "accordian": "field"
                    },
                    "icon": {
                        "type": "icon",
                        "displayName": "Icon",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "IconHome2"
                        },
                        "accordian": "field",
                        "visibility": false
                    },
                    "iconColor": {
                        "type": "color",
                        "displayName": "Icon color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CFD3D859"
                        },
                        "accordian": "field",
                        "visibility": false,
                        "showLabel": false
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "field"
                    },
                    "boxShadow": {
                        "type": "boxShadow",
                        "displayName": "Box Shadow",
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000040"
                        },
                        "accordian": "field"
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
                            },
                            "defaultValue": "default"
                        },
                        "isFxNotRequired": true,
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
                        "value": {
                            "value": "ffffffaa"
                        },
                        "label": "",
                        "placeholder": {
                            "value": "ffffffaa"
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
                    "styles": {
                        "textColor": {
                            "value": "#1B1F24"
                        },
                        "borderColor": {
                            "value": "var(--gray10)",
                            "fxActive": false
                        },
                        "accentColor": {
                            "value": "#4368E3"
                        },
                        "errTextColor": {
                            "value": "#D72D39"
                        },
                        "borderRadius": {
                            "value": "{{5}}"
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
                            "value": "side"
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
                "name": "textinput2",
                "displayName": "Text Input",
                "description": "User text input field",
                "component": "TextInput",
                "defaultSize": {
                    "width": 10,
                    "height": 40
                },
                "validation": {
                    "mandatory": {
                        "type": "toggle",
                        "displayName": "Make this field mandatory"
                    },
                    "regex": {
                        "type": "code",
                        "displayName": "Regex",
                        "placeholder": "^[a-zA-Z0-9_ -]{3,16}$"
                    },
                    "minLength": {
                        "type": "code",
                        "displayName": "Min length",
                        "placeholder": "Enter min length"
                    },
                    "maxLength": {
                        "type": "code",
                        "displayName": "Max length",
                        "placeholder": "Enter max length"
                    },
                    "customRule": {
                        "type": "code",
                        "displayName": "Custom validation",
                        "placeholder": "{{components.text2.text=='yes'&&'valid'}}"
                    }
                },
                "exposedVariables": {
                    "value": "",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setFocus",
                        "displayName": "Set focus"
                    },
                    {
                        "handle": "setBlur",
                        "displayName": "Set blur"
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
                                "handle": "visibility",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
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
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 50,
                    "left": 8,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 2,
                    "width": 3,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "5908d87a-da1f-4f16-8005-84dcc581c878": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "#"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text9",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 60,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 1,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "235c881e-ee12-4eca-89d6-85258a92bca5": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Label"
                        }
                    },
                    "placeholder": {
                        "type": "code",
                        "displayName": "Placeholder",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Enter your input"
                        }
                    },
                    "value": {
                        "type": "code",
                        "displayName": "Default value",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Default value"
                        }
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "onChange": {
                        "displayName": "On change"
                    },
                    "onEnterPressed": {
                        "displayName": "On enter pressed"
                    },
                    "onFocus": {
                        "displayName": "On focus"
                    },
                    "onBlur": {
                        "displayName": "On blur"
                    }
                },
                "styles": {
                    "color": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "label"
                    },
                    "alignment": {
                        "type": "switch",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "side"
                        },
                        "options": [
                            {
                                "displayName": "Side",
                                "value": "side"
                            },
                            {
                                "displayName": "Top",
                                "value": "top"
                            }
                        ],
                        "accordian": "label"
                    },
                    "direction": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
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
                        "accordian": "label",
                        "isFxNotRequired": true
                    },
                    "width": {
                        "type": "slider",
                        "displayName": "Width",
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "auto": {
                        "type": "checkbox",
                        "displayName": "auto",
                        "showLabel": false,
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "field"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CCD1D5"
                        },
                        "accordian": "field"
                    },
                    "accentColor": {
                        "type": "color",
                        "displayName": "Accent",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#4368E3"
                        },
                        "accordian": "field"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "field"
                    },
                    "errTextColor": {
                        "type": "color",
                        "displayName": "Error text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#D72D39"
                        },
                        "accordian": "field"
                    },
                    "icon": {
                        "type": "icon",
                        "displayName": "Icon",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "IconHome2"
                        },
                        "accordian": "field",
                        "visibility": false
                    },
                    "iconColor": {
                        "type": "color",
                        "displayName": "Icon color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CFD3D859"
                        },
                        "accordian": "field",
                        "visibility": false,
                        "showLabel": false
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "field"
                    },
                    "boxShadow": {
                        "type": "boxShadow",
                        "displayName": "Box Shadow",
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000040"
                        },
                        "accordian": "field"
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
                            },
                            "defaultValue": "default"
                        },
                        "isFxNotRequired": true,
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
                        "value": {
                            "value": "ffffffaa"
                        },
                        "label": "",
                        "placeholder": {
                            "value": "ffffffaa"
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
                    "styles": {
                        "textColor": {
                            "value": "#1B1F24"
                        },
                        "borderColor": {
                            "value": "var(--gray10)",
                            "fxActive": false
                        },
                        "accentColor": {
                            "value": "#4368E3"
                        },
                        "errTextColor": {
                            "value": "#D72D39"
                        },
                        "borderRadius": {
                            "value": "{{5}}"
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
                            "value": "side"
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
                "name": "textinput3",
                "displayName": "Text Input",
                "description": "User text input field",
                "component": "TextInput",
                "defaultSize": {
                    "width": 10,
                    "height": 40
                },
                "validation": {
                    "mandatory": {
                        "type": "toggle",
                        "displayName": "Make this field mandatory"
                    },
                    "regex": {
                        "type": "code",
                        "displayName": "Regex",
                        "placeholder": "^[a-zA-Z0-9_ -]{3,16}$"
                    },
                    "minLength": {
                        "type": "code",
                        "displayName": "Min length",
                        "placeholder": "Enter min length"
                    },
                    "maxLength": {
                        "type": "code",
                        "displayName": "Max length",
                        "placeholder": "Enter max length"
                    },
                    "customRule": {
                        "type": "code",
                        "displayName": "Custom validation",
                        "placeholder": "{{components.text2.text=='yes'&&'valid'}}"
                    }
                },
                "exposedVariables": {
                    "value": "",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setFocus",
                        "displayName": "Set focus"
                    },
                    {
                        "handle": "setBlur",
                        "displayName": "Set blur"
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
                                "handle": "visibility",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
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
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 80,
                    "left": 8,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 2,
                    "width": 3,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "aab2f1b3-8a6c-42f5-be71-4214adb1bdb7": {
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
                            "value": "Set button text/loader colour"
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
                    "styles": {
                        "textColor": {
                            "value": "#ffffffff",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "#ffffff00",
                            "fxActive": false
                        },
                        "loaderColor": {
                            "value": "#ffffffff",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "var(--gray11)",
                            "fxActive": false
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
                "name": "button21",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 90,
                    "left": 8,
                    "width": 3,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 5,
                    "width": 9,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "1d7f8ad9-1c6f-4a30-a5eb-5afe55e72702": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "#"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text10",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 90,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 1,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "fbe930e1-295c-4def-b4ad-b3d399dcac3a": {
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
                            "value": "🔄"
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
                    "styles": {
                        "textColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "loaderColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "#ffffff00"
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
                "name": "button22",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 30,
                    "left": 24,
                    "width": 3,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 14,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "2da296aa-206b-4ded-b46c-50489a2df490": {
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
                            "value": "🔄"
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
                    "styles": {
                        "textColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "loaderColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "#ffffff00"
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
                "name": "button23",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 60,
                    "left": 24,
                    "width": 3,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 14,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "965bdd8d-3af7-4788-add9-2740bdd11045": {
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
                            "value": "Set button border colour"
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
                    "styles": {
                        "textColor": {
                            "value": "#ffffffff",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "#ffffff00",
                            "fxActive": false
                        },
                        "loaderColor": {
                            "value": "#ffffffff",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "var(--gray11)",
                            "fxActive": false
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
                "name": "button24",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 120,
                    "left": 8,
                    "width": 3,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 22,
                    "width": 9,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "c2d6aca2-555e-4544-b534-c1905e09a6df": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "#"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text11",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 120,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 18,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "b54d2649-2a42-4e71-a713-440f18533a18": {
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
                            "value": "🔄"
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
                    "styles": {
                        "textColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "borderColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "loaderColor": {
                            "value": "var(--gray12)",
                            "fxActive": false
                        },
                        "borderRadius": {
                            "value": "{{5}}"
                        },
                        "backgroundColor": {
                            "value": "#ffffff00"
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
                "name": "button25",
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
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 90,
                    "left": 24,
                    "width": 3,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 31,
                    "width": 1,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "58ac16eb-67fe-45d8-b6bb-13157d7cb5d6": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "Enable state"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text12",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 90,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 140,
                    "left": 35,
                    "width": 4.999999999999999,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "88da4e09-8cd5-4d6e-9530-550298f1379f": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    },
                    "defaultValue": {
                        "type": "toggle",
                        "displayName": "Default status",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            }
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
                    "onChange": {
                        "displayName": "On change"
                    }
                },
                "styles": {
                    "textColor": {
                        "type": "color",
                        "displayName": "Text color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    },
                    "toggleSwitchColor": {
                        "type": "color",
                        "displayName": "Toggle switch color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
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
                        "label": {
                            "value": ""
                        },
                        "defaultValue": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "textColor": {
                            "value": "",
                            "fxActive": false
                        },
                        "toggleSwitchColor": {
                            "value": "#000000ff",
                            "fxActive": false
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
                "name": "toggleswitch1",
                "displayName": "Toggle Switch (Legacy)",
                "description": "User-controlled on-off switch",
                "component": "ToggleSwitch",
                "defaultSize": {
                    "width": 6,
                    "height": 30
                },
                "exposedVariables": {
                    "value": false
                },
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 40,
                    "left": 31,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 150,
                    "left": 40,
                    "width": 2,
                    "height": 30
                }
            },
            "withDefaultChildren": false
        },
        "07eef94a-0cb5-4e0e-bb80-637310d45ccb": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "Custom text"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{components.toggleswitch2.value}}",
                            "fxActive": true
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text13",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 120,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 18,
                    "width": 4,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "8e5fe569-0c22-4da8-baa9-3cb2d17aba77": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Label"
                        }
                    },
                    "placeholder": {
                        "type": "code",
                        "displayName": "Placeholder",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Enter your input"
                        }
                    },
                    "value": {
                        "type": "code",
                        "displayName": "Default value",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Default value"
                        }
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "onChange": {
                        "displayName": "On change"
                    },
                    "onEnterPressed": {
                        "displayName": "On enter pressed"
                    },
                    "onFocus": {
                        "displayName": "On focus"
                    },
                    "onBlur": {
                        "displayName": "On blur"
                    }
                },
                "styles": {
                    "color": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "label"
                    },
                    "alignment": {
                        "type": "switch",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "side"
                        },
                        "options": [
                            {
                                "displayName": "Side",
                                "value": "side"
                            },
                            {
                                "displayName": "Top",
                                "value": "top"
                            }
                        ],
                        "accordian": "label"
                    },
                    "direction": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
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
                        "accordian": "label",
                        "isFxNotRequired": true
                    },
                    "width": {
                        "type": "slider",
                        "displayName": "Width",
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "auto": {
                        "type": "checkbox",
                        "displayName": "auto",
                        "showLabel": false,
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "accordian": "label",
                        "conditionallyRender": {
                            "key": "alignment",
                            "value": "side"
                        },
                        "isFxNotRequired": true
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff"
                        },
                        "accordian": "field"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CCD1D5"
                        },
                        "accordian": "field"
                    },
                    "accentColor": {
                        "type": "color",
                        "displayName": "Accent",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#4368E3"
                        },
                        "accordian": "field"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#1B1F24"
                        },
                        "accordian": "field"
                    },
                    "errTextColor": {
                        "type": "color",
                        "displayName": "Error text",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#D72D39"
                        },
                        "accordian": "field"
                    },
                    "icon": {
                        "type": "icon",
                        "displayName": "Icon",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "IconHome2"
                        },
                        "accordian": "field",
                        "visibility": false
                    },
                    "iconColor": {
                        "type": "color",
                        "displayName": "Icon color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#CFD3D859"
                        },
                        "accordian": "field",
                        "visibility": false,
                        "showLabel": false
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "field"
                    },
                    "boxShadow": {
                        "type": "boxShadow",
                        "displayName": "Box Shadow",
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000040"
                        },
                        "accordian": "field"
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
                            },
                            "defaultValue": "default"
                        },
                        "isFxNotRequired": true,
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
                        "value": {
                            "value": ""
                        },
                        "label": "",
                        "placeholder": {
                            "value": "Enter custom text"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        },
                        "disabledState": {
                            "value": "{{components.toggleswitch2.value}}",
                            "fxActive": true
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "tooltip": {
                            "value": ""
                        }
                    },
                    "styles": {
                        "textColor": {
                            "value": "#1B1F24"
                        },
                        "borderColor": {
                            "value": "var(--gray10)",
                            "fxActive": false
                        },
                        "accentColor": {
                            "value": "#4368E3"
                        },
                        "errTextColor": {
                            "value": "#D72D39"
                        },
                        "borderRadius": {
                            "value": "{{5}}"
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
                            "value": "side"
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
                "name": "textinput5",
                "displayName": "Text Input",
                "description": "User text input field",
                "component": "TextInput",
                "defaultSize": {
                    "width": 10,
                    "height": 40
                },
                "validation": {
                    "mandatory": {
                        "type": "toggle",
                        "displayName": "Make this field mandatory"
                    },
                    "regex": {
                        "type": "code",
                        "displayName": "Regex",
                        "placeholder": "^[a-zA-Z0-9_ -]{3,16}$"
                    },
                    "minLength": {
                        "type": "code",
                        "displayName": "Min length",
                        "placeholder": "Enter min length"
                    },
                    "maxLength": {
                        "type": "code",
                        "displayName": "Max length",
                        "placeholder": "Enter max length"
                    },
                    "customRule": {
                        "type": "code",
                        "displayName": "Custom validation",
                        "placeholder": "{{components.text2.text=='yes'&&'valid'}}"
                    }
                },
                "exposedVariables": {
                    "value": "",
                    "isMandatory": false,
                    "isVisible": true,
                    "isDisabled": false,
                    "isLoading": false
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setFocus",
                        "displayName": "Set focus"
                    },
                    {
                        "handle": "setBlur",
                        "displayName": "Set blur"
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
                                "handle": "visibility",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
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
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 140,
                    "left": 8,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 22,
                    "width": 9.999999999999998,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "359d31e0-e1d2-40c1-a949-5b21a863bc10": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "Loading state"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{18}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1.5}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text14",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 120,
                    "left": 18,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 210,
                    "left": 35,
                    "width": 4.999999999999999,
                    "height": 50
                }
            },
            "withDefaultChildren": false
        },
        "e04aac23-bb1a-4dd0-b65e-0bc81fe5f943": {
            "component": {
                "properties": {
                    "label": {
                        "type": "code",
                        "displayName": "Label",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    },
                    "defaultValue": {
                        "type": "toggle",
                        "displayName": "Default status",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            }
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
                    "onChange": {
                        "displayName": "On change"
                    }
                },
                "styles": {
                    "textColor": {
                        "type": "color",
                        "displayName": "Text color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    },
                    "toggleSwitchColor": {
                        "type": "color",
                        "displayName": "Toggle switch color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        }
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
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
                        "label": {
                            "value": ""
                        },
                        "defaultValue": {
                            "value": "{{false}}"
                        }
                    },
                    "styles": {
                        "textColor": {
                            "value": ""
                        },
                        "toggleSwitchColor": {
                            "value": "#000000ff",
                            "fxActive": false
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
                "name": "toggleswitch2",
                "displayName": "Toggle Switch (Legacy)",
                "description": "User-controlled on-off switch",
                "component": "ToggleSwitch",
                "defaultSize": {
                    "width": 6,
                    "height": 30
                },
                "exposedVariables": {
                    "value": false
                },
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 70,
                    "left": 31,
                    "width": 6,
                    "height": 30
                },
                "desktop": {
                    "top": 220,
                    "left": 40,
                    "width": 2,
                    "height": 30
                }
            },
            "withDefaultChildren": false
        },
        "05f29a72-9e46-4765-bbe2-d11cc426da53": {
            "component": {
                "properties": {
                    "textFormat": {
                        "type": "switch",
                        "displayName": "Text Format",
                        "options": [
                            {
                                "displayName": "Plain text",
                                "value": "plainText"
                            },
                            {
                                "displayName": "Markdown",
                                "value": "markdown"
                            },
                            {
                                "displayName": "HTML",
                                "value": "html"
                            }
                        ],
                        "isFxNotRequired": true,
                        "defaultValue": {
                            "value": "plainText"
                        },
                        "fullWidth": true
                    },
                    "text": {
                        "type": "code",
                        "displayName": "TextComponentTextInput",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Hello, there!"
                        },
                        "showLabel": false
                    },
                    "loadingState": {
                        "type": "toggle",
                        "displayName": "Show loading state",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "visibility": {
                        "type": "toggle",
                        "displayName": "Visibility",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": true
                        },
                        "section": "additionalActions"
                    },
                    "disabledState": {
                        "type": "toggle",
                        "displayName": "Disable",
                        "validation": {
                            "schema": {
                                "type": "boolean"
                            },
                            "defaultValue": false
                        },
                        "section": "additionalActions"
                    },
                    "tooltip": {
                        "type": "code",
                        "displayName": "Tooltip",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "Tooltip text"
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
                    "textSize": {
                        "type": "numberInput",
                        "displayName": "Size",
                        "validation": {
                            "schema": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "number"
                                }
                            ],
                            "defaultValue": 14
                        },
                        "accordian": "Text"
                    },
                    "fontWeight": {
                        "type": "select",
                        "displayName": "Weight",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "bold",
                                "value": "bold"
                            },
                            {
                                "name": "lighter",
                                "value": "lighter"
                            },
                            {
                                "name": "bolder",
                                "value": "bolder"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "fontStyle": {
                        "type": "switch",
                        "displayName": "Style",
                        "options": [
                            {
                                "displayName": "Normal",
                                "value": "normal",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "Oblique",
                                "value": "oblique",
                                "iconName": "oblique"
                            },
                            {
                                "displayName": "Italic",
                                "value": "italic",
                                "iconName": "italic"
                            }
                        ],
                        "isIcon": true,
                        "accordian": "Text"
                    },
                    "textColor": {
                        "type": "color",
                        "displayName": "Color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            }
                        },
                        "accordian": "Text"
                    },
                    "isScrollRequired": {
                        "type": "switch",
                        "displayName": "Scroll",
                        "options": [
                            {
                                "displayName": "Enable",
                                "value": "enabled"
                            },
                            {
                                "displayName": "Disable",
                                "value": "disabled"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "lineHeight": {
                        "type": "numberInput",
                        "displayName": "Line height",
                        "accordian": "Text"
                    },
                    "textIndent": {
                        "type": "numberInput",
                        "displayName": "Text indent",
                        "accordian": "Text"
                    },
                    "textAlign": {
                        "type": "alignButtons",
                        "displayName": "Alignment",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "left"
                        },
                        "accordian": "Text"
                    },
                    "verticalAlignment": {
                        "type": "switch",
                        "displayName": "",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "center"
                        },
                        "showLabel": false,
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "alignverticallytop",
                                "value": "top",
                                "iconName": "alignverticallytop"
                            },
                            {
                                "displayName": "alignverticallycenter",
                                "value": "center",
                                "iconName": "alignverticallycenter"
                            },
                            {
                                "displayName": "alignverticallybottom",
                                "value": "bottom",
                                "iconName": "alignverticallybottom"
                            }
                        ],
                        "accordian": "Text",
                        "isFxNotRequired": true
                    },
                    "decoration": {
                        "type": "switch",
                        "displayName": "Decoration",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "underline",
                                "value": "underline",
                                "iconName": "underline"
                            },
                            {
                                "displayName": "overline",
                                "value": "overline",
                                "iconName": "overline"
                            },
                            {
                                "displayName": "line-through",
                                "value": "line-through",
                                "iconName": "linethrough"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "transformation": {
                        "type": "switch",
                        "displayName": "Transformation",
                        "isIcon": true,
                        "options": [
                            {
                                "displayName": "none",
                                "value": "none",
                                "iconName": "minus"
                            },
                            {
                                "displayName": "uppercase",
                                "value": "uppercase",
                                "iconName": "uppercase"
                            },
                            {
                                "displayName": "lowercase",
                                "value": "lowercase",
                                "iconName": "lowercase"
                            },
                            {
                                "displayName": "capitalize",
                                "value": "capitalize",
                                "iconName": "capitalize"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "letterSpacing": {
                        "type": "numberInput",
                        "displayName": "Letter spacing",
                        "accordian": "Text"
                    },
                    "wordSpacing": {
                        "type": "numberInput",
                        "displayName": "Word spacing",
                        "accordian": "Text"
                    },
                    "fontVariant": {
                        "type": "select",
                        "displayName": "Font variant",
                        "options": [
                            {
                                "name": "normal",
                                "value": "normal"
                            },
                            {
                                "name": "small-caps",
                                "value": "small-caps"
                            },
                            {
                                "name": "initial",
                                "value": "initial"
                            },
                            {
                                "name": "inherit",
                                "value": "inherit"
                            }
                        ],
                        "accordian": "Text"
                    },
                    "backgroundColor": {
                        "type": "color",
                        "displayName": "Background",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#fff00000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderColor": {
                        "type": "color",
                        "displayName": "Border",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
                        },
                        "accordian": "Container",
                        "colorPickerPosition": "top"
                    },
                    "borderRadius": {
                        "type": "numberInput",
                        "displayName": "Border radius",
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
                            },
                            "defaultValue": 6
                        },
                        "accordian": "Container"
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
                            },
                            "defaultValue": "0px 0px 0px 0px #00000090"
                        },
                        "accordian": "Container"
                    },
                    "padding": {
                        "type": "switch",
                        "displayName": "Padding",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "default"
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
                        "accordian": "Container",
                        "isFxNotRequired": true
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
                        "textFormat": {
                            "value": "html"
                        },
                        "text": {
                            "value": "Colour palette generator"
                        },
                        "loadingState": {
                            "value": "{{false}}"
                        },
                        "disabledState": {
                            "value": "{{false}}"
                        },
                        "visibility": {
                            "value": "{{true}}"
                        }
                    },
                    "styles": {
                        "backgroundColor": {
                            "value": "#fff00000"
                        },
                        "textColor": {
                            "value": "#000000"
                        },
                        "textSize": {
                            "value": "{{22}}"
                        },
                        "textAlign": {
                            "value": "left"
                        },
                        "fontWeight": {
                            "value": "bold"
                        },
                        "decoration": {
                            "value": "none"
                        },
                        "transformation": {
                            "value": "none"
                        },
                        "fontStyle": {
                            "value": "normal"
                        },
                        "lineHeight": {
                            "value": "{{1}}"
                        },
                        "textIndent": {
                            "value": "{{0}}"
                        },
                        "letterSpacing": {
                            "value": "{{0}}"
                        },
                        "wordSpacing": {
                            "value": "{{0}}"
                        },
                        "fontVariant": {
                            "value": "normal"
                        },
                        "verticalAlignment": {
                            "value": "center"
                        },
                        "padding": {
                            "value": "default"
                        },
                        "boxShadow": {
                            "value": "0px 0px 0px 0px #00000090"
                        },
                        "borderColor": {
                            "value": ""
                        },
                        "borderRadius": {
                            "value": "{{6}}"
                        },
                        "isScrollRequired": {
                            "value": "enabled"
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
                "name": "text15",
                "displayName": "Text",
                "description": "Display text or HTML",
                "component": "Text",
                "defaultSize": {
                    "width": 6,
                    "height": 40
                },
                "exposedVariables": {
                    "text": "Hello, there!"
                },
                "actions": [
                    {
                        "handle": "setText",
                        "displayName": "Set text",
                        "params": [
                            {
                                "handle": "text",
                                "displayName": "Text",
                                "defaultValue": "New text"
                            }
                        ]
                    },
                    {
                        "handle": "setVisibility",
                        "displayName": "Set visibility",
                        "params": [
                            {
                                "handle": "setVisibility",
                                "displayName": "Value",
                                "defaultValue": "{{true}}",
                                "type": "toggle"
                            }
                        ]
                    },
                    {
                        "handle": "clear",
                        "displayName": "Clear"
                    },
                    {
                        "handle": "setLoading",
                        "displayName": "Set loading",
                        "params": [
                            {
                                "handle": "setLoading",
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
                                "handle": "setDisable",
                                "displayName": "Value",
                                "defaultValue": "{{false}}",
                                "type": "toggle"
                            }
                        ]
                    }
                ],
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "desktop": {
                    "top": 30,
                    "left": 1,
                    "width": 17,
                    "height": 50
                },
                "mobile": {
                    "top": 30,
                    "left": 18,
                    "width": 6,
                    "height": 30
                }
            },
            "withDefaultChildren": false
        },
        "bb8d291c-3053-4fa5-978e-7aa9228b4e68": {
            "component": {
                "properties": {},
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
                "events": {},
                "styles": {
                    "dividerColor": {
                        "type": "color",
                        "displayName": "Divider color",
                        "validation": {
                            "schema": {
                                "type": "string"
                            },
                            "defaultValue": "#000000"
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
                    "properties": {},
                    "styles": {
                        "visibility": {
                            "value": "{{true}}"
                        },
                        "dividerColor": {
                            "value": "#8888884d"
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
                "name": "divider1",
                "displayName": "Divider",
                "description": "Separator between components",
                "component": "Divider",
                "defaultSize": {
                    "width": 10,
                    "height": 10
                },
                "exposedVariables": {
                    "value": {}
                },
                "parent": "158c3820-bfd4-427e-9052-b139ea50e124"
            },
            "layouts": {
                "mobile": {
                    "top": 100,
                    "left": 9,
                    "width": 23.25581395348837,
                    "height": 10
                },
                "desktop": {
                    "top": 100,
                    "left": 1,
                    "width": 41,
                    "height": 10
                }
            },
            "withDefaultChildren": false
        }
    },
    "setComponentProperty": "setComponentProperty",
    "setComponentName": "setComponentName",
    "shouldFreeze": false,
    "clearSelectedComponents": "clearSelectedComponents",
    "isVersionReleased": false,
    "setWidgetDeleteConfirmation": "setWidgetDeleteConfirmation",
    "setComponentToInspect": "setComponentToInspect",
    "dataQueries": [],
    "currentState": {
        "queries": {},
        "components": {},
        "globals": {
            "theme": {
                "name": "light"
            },
            "urlparams": null,
            "environment": {
                "id": null,
                "name": null
            },
            "mode": {},
            "currentUser": {}
        },
        "errors": {},
        "variables": {},
        "client": {},
        "server": {},
        "page": {
            "handle": "",
            "variables": {}
        },
        "succededQuery": {},
        "constants": {}
    },
    "tempComponentMeta": {
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
            "others": {
                "showOnDesktop": {
                    "value": "{{true}}"
                },
                "showOnMobile": {
                    "value": "{{false}}"
                }
            },
            "events": [],
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
            "properties": {
                "text": {
                    "value": "Button"
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
            "exposedVariables": {}
        },
        "name": "Button",
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
        ]
    },
    "componentMeta": {
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
                    "value": "button11"
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
    "component": {
        "id": "f9f374f4-c25a-4233-8c7c-21ac3e8dd561",
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
                        "value": "button11"
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
        }
    },
    "newComponentName": "button11",
    "showHeaderActionsMenu": false,
    "validateComponentName": "validateComponentName",
    "handleComponentNameChange": "handleComponentNameChange",
    "getDefaultValue": "getDefaultValue",
    "buildGeneralStyle": "buildGeneralStyle()",
    "pages": []
}

