// import { v4 as uuid } from 'uuid';

export default {
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

}

export const v1 = {
    "appData": {
        "editingVersion": null,
        "currentUser": null,
        "apps": [],
        "appName": null,
        "slug": null,
        "creationMode": "DEFAULT",
        "isPublic": null,
        "isMaintenanceOn": null,
        "organizationId": null,
        "currentVersionId": null,
        "userId": null,
        "app": {},
        "components": [],
        "pages": [],
        "layouts": [],
        "events": [],
        "eventHandlers": [],
        "appDefinitionDiff": null,
        "appDiffOptions": {},
        "isSaving": false,
        "appId": null,
        "areOthersOnSameVersionAndPage": false,
        "appVersionPreviewLink": null,
        "metadata": null,
        "eventsUpdatedLoader": false,
        "eventsCreatedLoader": false,
        "actionsUpdatedLoader": false,
        "eventToDeleteLoaderIndex": null,
        "isTJDarkMode": false,
        "actions": {}
    },
    "appVersion": {
        "editingVersion": null,
        "isUserEditingTheVersion": false,
        "releasedVersionId": null,
        "isVersionReleased": false,
        "isEditorFreezed": false,
        "isBannerMandatory": false,
        "appVersions": [],
        "isAppVersionPromoted": false,
        "currentAppVersionEnvironment": null,
        "actions": {}
    },
    "currentSession": {
        "organizations": [],
        "isGettingOrganizations": false,
        "actions": {}
    },
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
        "constants": {},
        "isEditorReady": false,
        "actions": {}
    },
    "dataQueries": {
        "dataQueries": [],
        "secrets": [],
        "sortBy": "updated_at",
        "sortOrder": "desc",
        "loadingDataQueries": true,
        "isDeletingQueryInProcess": false,
        "creatingQueryInProcessId": null,
        "isUpdatingQueryInProcess": false,
        "queuedActions": {},
        "actions": {}
    },
    "dataSources": {
        "dataSources": [],
        "loadingDataSources": true,
        "globalDataSources": [],
        "sampleDataSource": null,
        "globalDataSourceStatus": {
            "isSaving": false,
            "isEditing": false,
            "unSavedModalVisible": false,
            "action": null,
            "saveAction": null
        },
        "actions": {}
    },
    "editor": {
        "currentLayout": "desktop",
        "showComments": false,
        "hoveredComponent": "",
        "selectionInProgress": false,
        "selectedComponents": [],
        "isEditorActive": false,
        "selectedComponent": null,
        "canUndo": false,
        "canRedo": false,
        "currentVersion": {},
        "noOfVersionsSupported": 100,
        "appDefinition": {},
        "isUpdatingEditorStateInProcess": false,
        "saveError": false,
        "isLoading": true,
        "defaultComponentStateComputed": false,
        "showLeftSidebar": true,
        "queryConfirmationList": [],
        "currentPageId": null,
        "currentSessionId": "408e7f15-0bbc-4063-9730-4801879a7bf0",
        "currentAppEnvironment": null,
        "currentAppEnvironmentId": null,
        "featureAccess": null,
        "componentsNeedsUpdateOnNextRender": [],
        "appMode": "auto",
        "editorCanvasWidth": 1092,
        "canvasBackground": {},
        "pageSwitchInProgress": false,
        "actions": {}
    },
    "environmentsAndVersions": {
        "selectedVersion": null,
        "selectedEnvironment": null,
        "appVersionEnvironment": null,
        "versionsPromotedToEnvironment": [],
        "environments": [],
        "shouldRenderPromoteButton": false,
        "shouldRenderReleaseButton": false,
        "initializedEnvironmentDropdown": false,
        "environmentsLazyLoaded": false,
        "appVersionsLazyLoaded": false,
        "previewInitialEnvironmentId": null,
        "developmentVersions": [],
        "actions": {}
    },
    "grid": {
        "draggedElement": null,
        "activeGrid": null,
        "noOfGrid": 43,
        "draggedSubContainer": false,
        "resizingComponentId": null,
        "dragTarget": null,
        "isGroupHandleHoverd": false,
        "idGroupDragged": false,
        "openModalWidgetId": null,
        "subContainerWidths": {},
        "actions": {}
    },
    "keyboardShortcut": {
        "componentStack": [],
        "actions": {}
    },
    "license": {
        "featureAccess": {},
        "featuresLoaded": false,
        "actions": {}
    },
    "queryPanel": {
        "queryPanelHeight": 95,
        "previewPanelHeight": 0,
        "selectedQuery": null,
        "selectedDataSource": null,
        "queryToBeRun": null,
        "previewLoading": false,
        "queryPreviewData": "",
        "showCreateQuery": false,
        "nameInputFocussed": false,
        "previewPanelExpanded": false,
        "actions": {}
    },
    "resolve": {
        "storeReady": false,
        "suggestions": {
            "appHints": [],
            "jsHints": []
        },
        "lookupTable": {
            "hints": {},
            "resolvedRefs": {}
        },
        "lastUpdatedRefs": [],
        "referenceMapper": {
            "_map": {},
            "_reverseMap": {}
        },
        "isPageSwitched": false,
        "actions": {}
    },
    "whiteLabelling": {
        "activeOrganizationId": null,
        "whiteLabelText": "ToolJet",
        "whiteLabelLogo": null,
        "whiteLabelFavicon": null,
        "loadingWhiteLabelDetails": true,
        "isWhiteLabelDetailsFetched": false,
        "actions": {}
    }
}

export const v2 = {
    "appData": {
        "editingVersion": null,
        "currentUser": null,
        "apps": [],
        "appName": null,
        "slug": null,
        "creationMode": "DEFAULT",
        "isPublic": null,
        "isMaintenanceOn": null,
        "organizationId": null,
        "currentVersionId": null,
        "userId": null,
        "app": {},
        "components": [],
        "pages": [],
        "layouts": [],
        "events": [],
        "eventHandlers": [],
        "appDefinitionDiff": null,
        "appDiffOptions": {},
        "isSaving": false,
        "appId": null,
        "areOthersOnSameVersionAndPage": false,
        "appVersionPreviewLink": null,
        "metadata": null,
        "eventsUpdatedLoader": false,
        "eventsCreatedLoader": false,
        "actionsUpdatedLoader": false,
        "eventToDeleteLoaderIndex": null,
        "isTJDarkMode": false,
        "actions": {}
    },
    "appVersion": {
        "editingVersion": null,
        "isUserEditingTheVersion": false,
        "releasedVersionId": null,
        "isVersionReleased": false,
        "isEditorFreezed": false,
        "isBannerMandatory": false,
        "appVersions": [],
        "isAppVersionPromoted": false,
        "currentAppVersionEnvironment": null,
        "actions": {}
    },
    "currentSession": {
        "organizations": [],
        "isGettingOrganizations": false,
        "actions": {}
    },
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
        "constants": {},
        "isEditorReady": false,
        "actions": {}
    },
    "dataQueries": {
        "dataQueries": [],
        "secrets": [],
        "sortBy": "updated_at",
        "sortOrder": "desc",
        "loadingDataQueries": true,
        "isDeletingQueryInProcess": false,
        "creatingQueryInProcessId": null,
        "isUpdatingQueryInProcess": false,
        "queuedActions": {},
        "actions": {}
    },
    "dataSources": {
        "dataSources": [],
        "loadingDataSources": true,
        "globalDataSources": [],
        "sampleDataSource": null,
        "globalDataSourceStatus": {
            "isSaving": false,
            "isEditing": false,
            "unSavedModalVisible": false,
            "action": null,
            "saveAction": null
        },
        "actions": {}
    },
    "editor": {
        "currentLayout": "desktop",
        "showComments": false,
        "hoveredComponent": "",
        "selectionInProgress": false,
        "selectedComponents": [],
        "isEditorActive": false,
        "selectedComponent": null,
        "canUndo": false,
        "canRedo": false,
        "currentVersion": {},
        "noOfVersionsSupported": 100,
        "appDefinition": {},
        "isUpdatingEditorStateInProcess": false,
        "saveError": false,
        "isLoading": true,
        "defaultComponentStateComputed": false,
        "showLeftSidebar": true,
        "queryConfirmationList": [],
        "currentPageId": null,
        "currentSessionId": "08df93c4-d93d-4638-9cda-13e343c8f8cb",
        "currentAppEnvironment": null,
        "currentAppEnvironmentId": null,
        "featureAccess": null,
        "componentsNeedsUpdateOnNextRender": [],
        "appMode": "auto",
        "editorCanvasWidth": 1092,
        "canvasBackground": {},
        "pageSwitchInProgress": false,
        "actions": {}
    },
    "environmentsAndVersions": {
        "selectedVersion": null,
        "selectedEnvironment": null,
        "appVersionEnvironment": null,
        "versionsPromotedToEnvironment": [],
        "environments": [],
        "shouldRenderPromoteButton": false,
        "shouldRenderReleaseButton": false,
        "initializedEnvironmentDropdown": false,
        "environmentsLazyLoaded": false,
        "appVersionsLazyLoaded": false,
        "previewInitialEnvironmentId": null,
        "developmentVersions": [],
        "actions": {}
    },
    "grid": {
        "draggedElement": null,
        "activeGrid": null,
        "noOfGrid": 43,
        "draggedSubContainer": false,
        "resizingComponentId": null,
        "dragTarget": null,
        "isGroupHandleHoverd": false,
        "idGroupDragged": false,
        "openModalWidgetId": null,
        "subContainerWidths": {
            "158c3820-bfd4-427e-9052-b139ea50e124-header": 25.21254732287723,
            "158c3820-bfd4-427e-9052-b139ea50e124": 25.21254732287723,
            "canvas": 26.930232558139537,
            "e9e243bb-1e30-4427-9983-33848b0d608a": 25.63115197404002
        },
        "actions": {}
    },
    "keyboardShortcut": {
        "componentStack": [],
        "actions": {}
    },
    "license": {
        "featureAccess": {},
        "featuresLoaded": false,
        "actions": {}
    },
    "queryPanel": {
        "queryPanelHeight": 95,
        "previewPanelHeight": 0,
        "selectedQuery": null,
        "selectedDataSource": null,
        "queryToBeRun": null,
        "previewLoading": false,
        "queryPreviewData": "",
        "showCreateQuery": false,
        "nameInputFocussed": false,
        "previewPanelExpanded": false,
        "actions": {}
    },
    "resolve": {
        "storeReady": false,
        "suggestions": {
            "appHints": [],
            "jsHints": []
        },
        "lookupTable": {
            "hints": {},
            "resolvedRefs": {}
        },
        "lastUpdatedRefs": [],
        "referenceMapper": {
            "_map": {},
            "_reverseMap": {}
        },
        "isPageSwitched": false,
        "actions": {}
    },
    "whiteLabelling": {
        "activeOrganizationId": null,
        "whiteLabelText": "ToolJet",
        "whiteLabelLogo": null,
        "whiteLabelFavicon": null,
        "loadingWhiteLabelDetails": true,
        "isWhiteLabelDetailsFetched": false,
        "actions": {}
    }
}

//globalApp
export const fromProfileSettings = {
    "appData": {
        "editingVersion": null,
        "currentUser": null,
        "apps": [],
        "appName": null,
        "slug": null,
        "creationMode": "DEFAULT",
        "isPublic": null,
        "isMaintenanceOn": null,
        "organizationId": null,
        "currentVersionId": null,
        "userId": null,
        "app": {},
        "components": [],
        "pages": [],
        "layouts": [],
        "events": [],
        "eventHandlers": [],
        "appDefinitionDiff": null,
        "appDiffOptions": {},
        "isSaving": false,
        "appId": null,
        "areOthersOnSameVersionAndPage": false,
        "appVersionPreviewLink": null,
        "metadata": {
            "instance_id": "50bc7050-c1ba-4903-ac6d-323e0508b408",
            "installed_version": "3.7.0-ce",
            "version_ignored": false
        },
        "eventsUpdatedLoader": false,
        "eventsCreatedLoader": false,
        "actionsUpdatedLoader": false,
        "eventToDeleteLoaderIndex": null,
        "isTJDarkMode": false,
        "actions": {}
    },
    "appVersion": {
        "editingVersion": null,
        "isUserEditingTheVersion": false,
        "releasedVersionId": null,
        "isVersionReleased": false,
        "isEditorFreezed": false,
        "isBannerMandatory": false,
        "appVersions": [],
        "isAppVersionPromoted": false,
        "currentAppVersionEnvironment": null,
        "actions": {}
    },
    "currentSession": {
        "organizations": [
            {
                "id": "77813a32-e8aa-4852-a450-a4261a19febe",
                "name": "peterjaberau",
                "slug": "peterjaberau",
                "domain": null,
                "enable_sign_up": false,
                "inherit_s_s_o": true,
                "automatic_sso_login": false,
                "status": "active",
                "created_at": "2025-06-19T12:38:12.866Z",
                "updated_at": "2025-06-19T12:38:12.866Z",
                "organization_users": [
                    {
                        "id": "85fb17e5-fde4-4d02-98ca-e9d6705c45cb",
                        "role": "all-users",
                        "status": "active",
                        "source": "invite",
                        "organization_id": "77813a32-e8aa-4852-a450-a4261a19febe",
                        "user_id": "8a774396-8b7c-4f03-b9a9-1b2e803e072f",
                        "invitation_token": null,
                        "created_at": "2025-06-19T12:38:13.057Z",
                        "updated_at": "2025-06-19T12:38:13.057Z"
                    }
                ]
            }
        ],
        "isGettingOrganizations": false,
        "actions": {}
    },
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
        "constants": {},
        "isEditorReady": false,
        "actions": {}
    },
    "dataQueries": {
        "dataQueries": [],
        "secrets": [],
        "sortBy": "updated_at",
        "sortOrder": "desc",
        "loadingDataQueries": true,
        "isDeletingQueryInProcess": false,
        "creatingQueryInProcessId": null,
        "isUpdatingQueryInProcess": false,
        "queuedActions": {},
        "actions": {}
    },
    "dataSources": {
        "dataSources": [],
        "loadingDataSources": true,
        "globalDataSources": [],
        "sampleDataSource": null,
        "globalDataSourceStatus": {
            "isSaving": false,
            "isEditing": false,
            "unSavedModalVisible": false,
            "action": null,
            "saveAction": null
        },
        "actions": {}
    },
    "editor": {
        "currentLayout": "desktop",
        "showComments": false,
        "hoveredComponent": "",
        "selectionInProgress": false,
        "selectedComponents": [],
        "isEditorActive": false,
        "selectedComponent": null,
        "canUndo": false,
        "canRedo": false,
        "currentVersion": {},
        "noOfVersionsSupported": 100,
        "appDefinition": {},
        "isUpdatingEditorStateInProcess": false,
        "saveError": false,
        "isLoading": true,
        "defaultComponentStateComputed": false,
        "showLeftSidebar": true,
        "queryConfirmationList": [],
        "currentPageId": null,
        "currentSessionId": "cc61cba5-2135-401b-9fdb-dd14e3f460ea",
        "currentAppEnvironment": null,
        "currentAppEnvironmentId": null,
        "featureAccess": null,
        "componentsNeedsUpdateOnNextRender": [],
        "appMode": "auto",
        "editorCanvasWidth": 1092,
        "canvasBackground": {},
        "pageSwitchInProgress": false,
        "actions": {}
    },
    "environmentsAndVersions": {
        "selectedVersion": null,
        "selectedEnvironment": null,
        "appVersionEnvironment": null,
        "versionsPromotedToEnvironment": [],
        "environments": [],
        "shouldRenderPromoteButton": false,
        "shouldRenderReleaseButton": false,
        "initializedEnvironmentDropdown": false,
        "environmentsLazyLoaded": false,
        "appVersionsLazyLoaded": false,
        "previewInitialEnvironmentId": null,
        "developmentVersions": [],
        "actions": {}
    },
    "grid": {
        "draggedElement": null,
        "activeGrid": null,
        "noOfGrid": 43,
        "draggedSubContainer": false,
        "resizingComponentId": null,
        "dragTarget": null,
        "isGroupHandleHoverd": false,
        "idGroupDragged": false,
        "openModalWidgetId": null,
        "subContainerWidths": {},
        "actions": {}
    },
    "keyboardShortcut": {
        "componentStack": [],
        "actions": {}
    },
    "license": {
        "featureAccess": {
            "expiry": "",
            "licenseStatus": {
                "isLicenseValid": false,
                "isExpired": false
            }
        },
        "featuresLoaded": true,
        "actions": {}
    },
    "queryPanel": {
        "queryPanelHeight": 95,
        "previewPanelHeight": 0,
        "selectedQuery": null,
        "selectedDataSource": null,
        "queryToBeRun": null,
        "previewLoading": false,
        "queryPreviewData": "",
        "showCreateQuery": false,
        "nameInputFocussed": false,
        "previewPanelExpanded": false,
        "actions": {}
    },
    "resolve": {
        "storeReady": false,
        "suggestions": {
            "appHints": [],
            "jsHints": []
        },
        "lookupTable": {
            "hints": {},
            "resolvedRefs": {}
        },
        "lastUpdatedRefs": [],
        "referenceMapper": {
            "_map": {},
            "_reverseMap": {}
        },
        "isPageSwitched": false,
        "actions": {}
    },
    "whiteLabelling": {
        "activeOrganizationId": null,
        "whiteLabelText": "ToolJet",
        "whiteLabelLogo": null,
        "whiteLabelFavicon": null,
        "loadingWhiteLabelDetails": true,
        "isWhiteLabelDetailsFetched": false,
        "actions": {}
    }
}

export const fromDataSources = {
    "appData": {
        "editingVersion": null,
        "currentUser": null,
        "apps": [],
        "appName": null,
        "slug": null,
        "creationMode": "DEFAULT",
        "isPublic": null,
        "isMaintenanceOn": null,
        "organizationId": null,
        "currentVersionId": null,
        "userId": null,
        "app": {},
        "components": [],
        "pages": [],
        "layouts": [],
        "events": [],
        "eventHandlers": [],
        "appDefinitionDiff": null,
        "appDiffOptions": {},
        "isSaving": false,
        "appId": null,
        "areOthersOnSameVersionAndPage": false,
        "appVersionPreviewLink": null,
        "metadata": {
            "instance_id": "50bc7050-c1ba-4903-ac6d-323e0508b408",
            "installed_version": "3.7.0-ce",
            "version_ignored": false
        },
        "eventsUpdatedLoader": false,
        "eventsCreatedLoader": false,
        "actionsUpdatedLoader": false,
        "eventToDeleteLoaderIndex": null,
        "isTJDarkMode": false,
        "actions": {}
    },
    "appVersion": {
        "editingVersion": null,
        "isUserEditingTheVersion": false,
        "releasedVersionId": null,
        "isVersionReleased": false,
        "isEditorFreezed": false,
        "isBannerMandatory": false,
        "appVersions": [],
        "isAppVersionPromoted": false,
        "currentAppVersionEnvironment": null,
        "actions": {}
    },
    "currentSession": {
        "organizations": [],
        "isGettingOrganizations": false,
        "actions": {}
    },
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
        "constants": {},
        "isEditorReady": false,
        "actions": {}
    },
    "dataQueries": {
        "dataQueries": [],
        "secrets": [],
        "sortBy": "updated_at",
        "sortOrder": "desc",
        "loadingDataQueries": true,
        "isDeletingQueryInProcess": false,
        "creatingQueryInProcessId": null,
        "isUpdatingQueryInProcess": false,
        "queuedActions": {},
        "actions": {}
    },
    "dataSources": {
        "dataSources": [],
        "loadingDataSources": true,
        "globalDataSources": [],
        "sampleDataSource": null,
        "globalDataSourceStatus": {
            "isSaving": false,
            "isEditing": false,
            "unSavedModalVisible": false,
            "action": null,
            "saveAction": null
        },
        "actions": {}
    },
    "editor": {
        "currentLayout": "desktop",
        "showComments": false,
        "hoveredComponent": "",
        "selectionInProgress": false,
        "selectedComponents": [],
        "isEditorActive": false,
        "selectedComponent": null,
        "canUndo": false,
        "canRedo": false,
        "currentVersion": {},
        "noOfVersionsSupported": 100,
        "appDefinition": {},
        "isUpdatingEditorStateInProcess": false,
        "saveError": false,
        "isLoading": true,
        "defaultComponentStateComputed": false,
        "showLeftSidebar": true,
        "queryConfirmationList": [],
        "currentPageId": null,
        "currentSessionId": "f925a069-2cfe-4a0f-9a5f-1923c56215d6",
        "currentAppEnvironment": null,
        "currentAppEnvironmentId": null,
        "featureAccess": null,
        "componentsNeedsUpdateOnNextRender": [],
        "appMode": "auto",
        "editorCanvasWidth": 1092,
        "canvasBackground": {},
        "pageSwitchInProgress": false,
        "actions": {}
    },
    "environmentsAndVersions": {
        "selectedVersion": null,
        "selectedEnvironment": null,
        "appVersionEnvironment": null,
        "versionsPromotedToEnvironment": [],
        "environments": [],
        "shouldRenderPromoteButton": false,
        "shouldRenderReleaseButton": false,
        "initializedEnvironmentDropdown": false,
        "environmentsLazyLoaded": false,
        "appVersionsLazyLoaded": false,
        "previewInitialEnvironmentId": null,
        "developmentVersions": [],
        "actions": {}
    },
    "grid": {
        "draggedElement": null,
        "activeGrid": null,
        "noOfGrid": 43,
        "draggedSubContainer": false,
        "resizingComponentId": null,
        "dragTarget": null,
        "isGroupHandleHoverd": false,
        "idGroupDragged": false,
        "openModalWidgetId": null,
        "subContainerWidths": {},
        "actions": {}
    },
    "keyboardShortcut": {
        "componentStack": [],
        "actions": {}
    },
    "license": {
        "featureAccess": {},
        "featuresLoaded": false,
        "actions": {}
    },
    "queryPanel": {
        "queryPanelHeight": 95,
        "previewPanelHeight": 0,
        "selectedQuery": null,
        "selectedDataSource": null,
        "queryToBeRun": null,
        "previewLoading": false,
        "queryPreviewData": "",
        "showCreateQuery": false,
        "nameInputFocussed": false,
        "previewPanelExpanded": false,
        "actions": {}
    },
    "resolve": {
        "storeReady": false,
        "suggestions": {
            "appHints": [],
            "jsHints": []
        },
        "lookupTable": {
            "hints": {},
            "resolvedRefs": {}
        },
        "lastUpdatedRefs": [],
        "referenceMapper": {
            "_map": {},
            "_reverseMap": {}
        },
        "isPageSwitched": false,
        "actions": {}
    },
    "whiteLabelling": {
        "activeOrganizationId": null,
        "whiteLabelText": "ToolJet",
        "whiteLabelLogo": null,
        "whiteLabelFavicon": null,
        "loadingWhiteLabelDetails": true,
        "isWhiteLabelDetailsFetched": false,
        "actions": {}
    }
}
