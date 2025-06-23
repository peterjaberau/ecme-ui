import { useSelector } from '@xstate/react'
import { GlobalPlaygroundContext } from '../actors/playground.provider'

export function useEditor() {
    const editorActorRef =
        GlobalPlaygroundContext.useActorRef().system.get('editor')
    const sendToEditor = editorActorRef.send

    const editorState: any = useSelector(
        editorActorRef,
        (state) => state,
    )

    const selectedComponents = editorState.context.selectedComponents
    const selectedComponent = editorState.context.selectedComponent

    return {
        editorActorRef,
        sendToEditor,
        editorState,

        selectedComponents,
        selectedComponent,
    }
}
