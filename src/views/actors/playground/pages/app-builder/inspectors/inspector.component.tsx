import { useInspectorComponent } from '@/playground/hooks/useInspectorComponent'

export const InspectorComponent = () => {
    const { inspectorComponentState } = useInspectorComponent();

    return (
        <div>inspectorComponent</div>
        // <JsonView
        //     src={editorInspectorData}
        //     collapsed={1}
        //     displaySize={'collapsed'}
        // />
    )
}
