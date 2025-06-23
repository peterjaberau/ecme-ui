import { useMemo } from 'react'
import { getComponentToRender } from '../_helpers/editorHelper'
import { useRenderWidget } from '../../../hooks/useRenderWidget'


export const RenderWidget = () => {
    const { renderWidgetState, id, parentId, key, componentName, componentType, properties, styles } = useRenderWidget();

    const ComponentToRender = useMemo(() => getComponentToRender(componentType), [componentType]);

    return (
        <ComponentToRender
            id={id}
            key={key}
            parentId={parentId}
            properties={properties}
            styles={styles}
            componentName={componentName}
        />
    )

}
