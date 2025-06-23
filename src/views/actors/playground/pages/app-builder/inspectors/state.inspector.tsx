import JSONTreeViewer from '../../../_ui/JSONTreeViewer'
import { useEditorManager } from '../../../hooks/useEditorManager'

export const StateInspector = () => {
    const { editorInspectorData, selectedComponent } = useEditorManager()

    return (
        <JSONTreeViewer
            /* @ts-ignore */
            data={editorInspectorData}
            useIcons={true}
            iconsList={[]} //iconsList
            useIndentedBlock={true}
            enableCopyToClipboard={true}
            useActions={true}
            // actionsList={callbackActions}
            actionIdentifier="id"
            expandWithLabels={true}
            selectedComponent={selectedComponent}
            treeType="inspector"
            // darkMode={darkMode}
        />
    )

}
