import { useEditor } from './useEditor'
import { useEditorInspector } from './useEditorInspector'

export function useEditorManager() {
    const { editorState, selectedComponent, selectedComponents } = useEditor()
    const { editorInspectorData, editorInspectorState, pathToBeInspected } = useEditorInspector()


    return {
        editorState,
        selectedComponent,
        selectedComponents,

        editorInspectorState,
        editorInspectorData,
        pathToBeInspected
    }
}
