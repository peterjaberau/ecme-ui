import { useSelector } from '@xstate/react'
import { GlobalPlaygroundContext } from '../actors/playground.provider'

export function useEditorInspector() {
    const editorInspectorActorRef =
        GlobalPlaygroundContext.useActorRef().system.get('editor-inspector')
    const sendToEditorInspector = editorInspectorActorRef.send

    const editorInspectorState: any = useSelector(
        editorInspectorActorRef,
        (state) => state,
    )
    const editorInspectorData: any = editorInspectorState.context.data

    const pathToBeInspected = editorInspectorState.context.pathToBeInspected

    return {
        editorInspectorActorRef,
        editorInspectorState,
        sendToEditorInspector,

        pathToBeInspected,
        editorInspectorData,
    }
}
