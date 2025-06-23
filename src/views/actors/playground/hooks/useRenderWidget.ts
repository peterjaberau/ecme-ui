import { useSelector } from '@xstate/react'
import { GlobalPlaygroundContext } from '../actors/playground.provider'

export function useRenderWidget() {
    const renderWidgetActorRef =
        GlobalPlaygroundContext.useActorRef().system.get('render-widget')
    const sendToRenderWidget = renderWidgetActorRef.send

    const renderWidgetState: any = useSelector(
        renderWidgetActorRef,
        (state) => state,
    )
    const renderWidgetContext = renderWidgetState.context

    const {
        componentType,
        componentName,
        id,
        key,
        properties,
        styles,
        parentId,
        darkMode,
    } = renderWidgetContext

    return {
        renderWidgetActorRef,
        renderWidgetState,
        renderWidgetContext,
        sendToRenderWidget,
        componentType,
        componentName,
        id,
        parentId,
        properties,
        styles,
        key,
        darkMode,
    }
}
