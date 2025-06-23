import { useEditorManager } from '@/views/actors/playground/hooks/useEditorManager'

export const PropertiesInspector = () => {
    const { editorInspectorData, selectedComponent } = useEditorManager()
    return (
        <div>properties inspector</div>
        // <JsonView
        //     src={editorInspectorData}
        //     collapsed={1}
        //     displaySize={'collapsed'}
        // />
    )
}
