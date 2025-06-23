import { useSelector } from '@xstate/react'
import { GlobalPlaygroundContext } from '../actors/playground.provider'


export function useBuilderDemo() {
    const builderDemoActorRef = GlobalPlaygroundContext.useActorRef().system.get('builder-demo');
    const builderDemoState = useSelector(builderDemoActorRef, state => state)
    const sendToBuilderDemo = builderDemoActorRef.send

    return {
        builderDemoActorRef,
        builderDemoState,
        sendToBuilderDemo
    }
}
