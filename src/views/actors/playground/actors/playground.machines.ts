import { assign, setup, createMachine, spawnChild } from 'xstate'
import defaultStates from './playground.defaults'
import inspectorComponentDefaults from './defaults/InspectorComponent'
import { renderWidgetData } from './playground.defaults'
import useStoreDemo from '../_mock/useStore.state'

export const rootMachine = createMachine({
    context: ({ input }) => ({
        ...defaultStates.playgroundLayout,
        input,
    }),
})

export const builderDemoMachine = createMachine({
    context: ({ input }) => ({
        ...useStoreDemo,
        input,
    }),
})

export const builderConsumerAppMachine = createMachine({
    context: ({ input }) => ({
        input,
    }),
})

export const consumerAppMachine = createMachine({
    context: ({ input }) => ({
        input,
    }),
})

export const designerWidgetMachine = createMachine({
    context: ({ input }) => ({
        input,
    }),
})



export const renderWidgetMachine = createMachine({
    context: ({ input }) => ({
        ...defaultStates.builderRenderWidget.button11Resolved,
        input,
    }),
})

export const editorMachine = createMachine({
    context: ({ input }) => ({
        ...defaultStates.editor
    }),
})

//StateInspector
export const editorInspectorMachine = createMachine({
    context: ({ input }) => ({
        data: defaultStates.editorInspector.data,
    }),
})


//PropertiesInspector
export const inspectorComponentMachine = createMachine({
    context: ({ input }) => ({
        allComponents: inspectorComponentDefaults.allComponents,
        dataQueries: inspectorComponentDefaults.dataQueries,
        currentState: inspectorComponentDefaults.currentState,
        componentMeta: inspectorComponentDefaults.componentMeta,
        component: inspectorComponentDefaults.component,
        pages: []
    }),
})
