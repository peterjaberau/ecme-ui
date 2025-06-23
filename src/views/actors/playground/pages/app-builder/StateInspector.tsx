import JsonView from '@/views/actors/playground/_components/JSONTree'
import { useEditorManager } from '@/views/actors/playground/hooks/useEditorManager'

export const StateInspectorPlugin = () => {
    const { editorInspectorData, selectedComponent } = useEditorManager()
    return (
        <JsonView
            src={editorInspectorData}
            collapsed={1}
            displaySize={'collapsed'}
        />
    )
}
