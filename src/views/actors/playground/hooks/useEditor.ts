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

    const componentNameIdMapping = editorState.context.modules.canvas.componentNameIdMapping
    const queryNameIdMapping = editorState.context.modules.canvas.queryNameIdMapping
    const queryIdNameMapping = editorState.context.modules.canvas.queryIdNameMapping

    const replaceIdsWithName = (input, moduleId = 'canvas') => {
        const mappings = {
            components: componentNameIdMapping,
            queries: queryIdNameMapping
        }

        const regex =
            /(components|queries)(\??\.|\??\.?\[['"]?)([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})(['"]?\])?(\??\.|\[['"]?)([^\s:?[\]'"+\-&|}}]+)/g

        return input.replace(regex, (match, category, prefix, id, suffix, optionalChaining, property) => {
            if (mappings[category] && mappings[category][id]) {
                let name;
                if (category === 'components') {
                    name = mappings[category][id];
                } else {
                    name = mappings[category][id];
                }

                // Reconstruct the string with the name instead of UUID
                let result = `${category}`;

                // Handle optional chaining at the beginning
                if (prefix.includes('?.')) {
                    result += '?.';
                } else if (prefix.includes('.')) {
                    result += '.';
                }

                // Handle bracket notation
                if (prefix.includes('[')) {
                    result += `["${name}"]`;
                } else {
                    result += name;
                }

                // Handle optional chaining after the name
                if (optionalChaining) {
                    result += optionalChaining;
                }

                // Add the property if it exists
                if (property) {
                    result += property;
                }

                return result;
            }
            return match; // Return the original match if no mapping is found
        });

    }

    const getSuggestions = editorState.context.suggestions
    const getAllExposedValues = editorState.context.resolvedStore.modules.canvas.exposedValues
    const getSecrets = editorState.context.resolvedStore.modules.canvas.secrets


    return {
        editorActorRef,
        sendToEditor,
        editorState,

        selectedComponents,
        selectedComponent,

        componentNameIdMapping,
        queryNameIdMapping,
        queryIdNameMapping,

        replaceIdsWithName,

        getSuggestions,
        getAllExposedValues,
        getSecrets
    }
}
