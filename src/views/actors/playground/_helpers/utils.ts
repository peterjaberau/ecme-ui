import moment from 'moment';
import _, { isEmpty } from 'lodash';
import { validateComponentProperty } from '@/playground/pages/app-editor/code-editor/utils'
import { validateMultilineCode } from '@/playground/_helpers/utility'

export const reservedKeyword = ['app', 'window'];

export function resolveCode(code, state, customObjects = {}, withError = false, reservedKeyword, isJsCode) {
    let result = '';
    let error;

    if (code === '_' || code.includes('this._')) {
        error = `Cannot resolve circular reference ${code}`;
    } else if (code.startsWith('queries.') && code.endsWith('run()')) {
        //! dont resolve if code starts with "queries." and ends with "run()"
        error = `Cannot resolve function call ${code}`;
    } else {
        try {
            const evalFunction = Function(
                //@ts-ignore
                [
                    'variables',
                    'components',
                    'queries',
                    'globals',
                    'page',
                    'client',
                    'server',
                    'constants',
                    'secrets',
                    'parameters',
                    'moment',
                    '_',
                    ...Object.keys(customObjects),
                    reservedKeyword,
                ],
                `return ${code}`
            );
            result = evalFunction(
                isJsCode ? state?.variables : undefined,
                isJsCode ? state?.components : undefined,
                isJsCode ? state?.queries : undefined,
                isJsCode ? state?.globals : undefined,
                isJsCode ? state?.page : undefined,
                isJsCode ? undefined : state?.client,
                isJsCode ? undefined : state?.server,
                state?.constants, // Passing constants as an argument allows the evaluated code to access and utilize the constants value correctly.
                state?.secrets || {},
                state?.parameters,
                moment,
                _,
                ...Object.values(customObjects),
                null
            );
        } catch (err) {
            error = err;
            console.log('the erro is', { error, code });
        }
    }
    if (withError) return [result, error];
    return result;
}

export function resolveString(str, state, customObjects, reservedKeyword, withError, forPreviewBox) {
    let resolvedStr = str;

    // Resolve {{object}}
    const codeRegex = /(\{\{.+?\}\})/g;
    const codeMatches = resolvedStr.match(codeRegex);

    if (codeMatches) {
        codeMatches.forEach((codeMatch) => {
            const code = removeNestedDoubleCurlyBraces(codeMatch);

            if (reservedKeyword.includes(code)) {
                resolvedStr = resolvedStr.replace(codeMatch, '');
            } else {
                const resolvedCode = resolveCode(code, state, customObjects, withError, reservedKeyword, true);
                if (forPreviewBox) {
                    resolvedStr = resolvedStr.replace(codeMatch, resolvedCode[0]);
                } else {
                    resolvedStr = resolvedStr.replace(codeMatch, resolvedCode);
                }
            }
        });
    }

    // Resolve %%object%%
    const serverRegex = /(%%.+?%%)/g;
    const serverMatches = resolvedStr.match(serverRegex);

    if (serverMatches) {
        serverMatches.forEach((serverMatch) => {
            const code = serverMatch.replace(/%%/g, '');

            if (code.includes('server.') && !/^server\.[A-Za-z0-9]+$/.test(code)) {
                resolvedStr = resolvedStr.replace(serverMatch, 'HiddenEnvironmentVariable');
            } else {
                const resolvedCode = resolveCode(code, state, customObjects, withError, reservedKeyword, false);
                if (forPreviewBox) {
                    resolvedStr = resolvedStr.replace(serverMatch, resolvedCode[0]);
                } else {
                    resolvedStr = resolvedStr.replace(serverMatch, resolvedCode);
                }
            }
        });
    }

    return resolvedStr;
}

export function resolveReferences(
    object?: any,
    _state?: any,
    defaultValue?: any,
    customObjects = {},
    withError = false,
    forPreviewBox = false
) {
    if (object === '{{{}}}') return '';

    object = _.clone(object);
    const objectType = typeof object;
    let error;

    const state = _state ?? useCurrentStateStore.getState(); //!state=currentstate => The state passed down as an argument retains the previous state.

    if (_state?.parameters) {
        state.parameters = { ..._state.parameters };
    }

    switch (objectType) {
        case 'string': {
            if (object.includes('{{') && object.includes('}}') && object.includes('%%') && object.includes('%%')) {
                object = resolveString(object, state, customObjects, reservedKeyword, withError, forPreviewBox);
            }

            if (object.startsWith('{{') && object.endsWith('}}')) {
                if ((object.match(/{{/g) || []).length === 1) {
                    const code = removeNestedDoubleCurlyBraces(object);

                    //Will be remove in next release

                    const { status, data }: any = validateMultilineCode(code);

                    if (status === 'failed') {
                        const errMessage = `${data.message} -  ${data.description}`;

                        return [{}, errMessage];
                    }

                    return resolveCode(code, state, customObjects, withError, [], true);
                } else {
                    const dynamicVariables = getDynamicVariables(object);

                    for (const dynamicVariable of dynamicVariables) {
                        const value = resolveString(
                            dynamicVariable,
                            state,
                            customObjects,
                            reservedKeyword,
                            withError,
                            forPreviewBox
                        );

                        if (typeof value !== 'function') {
                            object = object.replace(dynamicVariable, value);
                        }
                    }
                }
            } else if (object.startsWith('%%') && object.endsWith('%%')) {
                const code = object.replaceAll('%%', '');

                if (code.includes('server.') && !new RegExp('^server.[A-Za-z0-9]+$').test(code)) {
                    error = `${code} is invalid. Server variables can't be used like this`;
                    return [{}, error];
                }

                return resolveCode(code, state, customObjects, withError, reservedKeyword, false);
            }

            const dynamicVariables = getDynamicVariables(object);

            if (dynamicVariables) {
                if (dynamicVariables.length === 1 && dynamicVariables[0] === object) {
                    object = resolveReferences(dynamicVariables[0], state, null, customObjects, false, false);
                } else {
                    for (const dynamicVariable of dynamicVariables) {
                        const value = resolveReferences(dynamicVariable, state, null, customObjects, false, false);
                        if (typeof value !== 'function') {
                            object = object.replace(dynamicVariable, value);
                        }
                    }
                }
            }
            if (withError) return [object, error];
            return object;
        }

        case 'object': {
            if (Array.isArray(object)) {
                const new_array = [];

                object.forEach((element, index) => {
                    const resolved_object = resolveReferences(element);
                    new_array[index] = resolved_object;
                });

                if (withError) return [new_array, error];
                return new_array;
            } else if (!_.isEmpty(object)) {
                Object.keys(object).forEach((key) => {
                    const resolved_object = resolveReferences(object[key], state);
                    object[key] = resolved_object;
                });
                if (withError) return [object, error];
                return object;
            }
        }
        // eslint-disable-next-line no-fallthrough
        default: {
            if (withError) return [object, error];
            return object;
        }
    }
}

export function getDynamicVariables(text) {
    const matchedParams = text.match(/\{\{(.*?)\}\}/g) || text.match(/\%\%(.*?)\%\%/g);
    return matchedParams;
}

export const handleCircularStructureToJSON = () => {
    const seen = new WeakSet();

    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return 'Object';
            }
            seen.add(value);
        }
        return value;
    };
};

export function hasCircularDependency(obj, stack = new Set()) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    if (stack.has(obj)) {
        return true;
    }

    stack.add(obj);

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (hasCircularDependency(obj[key], new Set(stack))) {
                return true;
            }
        }
    }

    stack.delete(obj);
    return false;
}

export const verifyConstant = (value, definedConstants = {}, definedSecrets = {}) => {
    const globalConstantRegex = /{{constants\.([a-zA-Z0-9_]+)}}/g;
    const secretConstantRegex = /{{secrets\.([a-zA-Z0-9_]+)}}/g;
    if (typeof value !== 'string') {
        return [];
    }
    const matches = [...(value.match(globalConstantRegex) || []), ...(value.match(secretConstantRegex) || [])];
    if (!matches) {
        return [];
    }
    const resolvedMatches = matches.map((match) => {
        const cleanedMatch = match
            .replace(/{{constants\./, '')
            .replace(/{{secrets\./, '')
            .replace(/}}/, '');

        return Object.keys(definedConstants).includes(cleanedMatch) || Object.keys(definedSecrets).includes(cleanedMatch)
            ? null
            : cleanedMatch;
    });
    const invalidConstants = resolvedMatches?.filter((item) => item != null);
    if (invalidConstants?.length) {
        return invalidConstants;
    }
};


export const removeNestedDoubleCurlyBraces = (str: any) => {
    const transformedInput = str.split('');
    let iter = 0;
    const stack = [];

    while (iter < str.length - 1) {
        if (transformedInput[iter] === '{' && transformedInput[iter + 1] === '{') {
            transformedInput[iter] = 'le';
            transformedInput[iter + 1] = 'le';
            stack.push(2);
            iter += 2;
        } else if (transformedInput[iter] === '{') {
            stack.push(1);
            iter++;
        } else if (transformedInput[iter] === '}' && stack.length > 0 && stack[stack.length - 1] === 1) {
            stack.pop();
            iter++;
        } else if (
            transformedInput[iter] === '}' &&
            stack.length > 0 &&
            transformedInput[iter + 1] === '}' &&
            stack[stack.length - 1] === 2
        ) {
            stack.pop();
            transformedInput[iter] = 'ri';
            transformedInput[iter + 1] = 'ri';
            iter += 2;
        } else {
            iter++;
        }
    }

    iter = 0;
    let shouldRemoveSpace = true;
    while (iter < str.length) {
        if (transformedInput[iter] === ' ' && shouldRemoveSpace) {
            transformedInput[iter] = '';
        } else if (transformedInput[iter] === 'le') {
            shouldRemoveSpace = true;
            transformedInput[iter] = '';
        } else {
            shouldRemoveSpace = false;
        }
        iter++;
    }

    iter = str.length - 1;
    shouldRemoveSpace = true;
    while (iter >= 0) {
        if (transformedInput[iter] === ' ' && shouldRemoveSpace) {
            transformedInput[iter] = '';
        } else if (transformedInput[iter] === 'ri') {
            shouldRemoveSpace = true;
            transformedInput[iter] = '';
        } else {
            shouldRemoveSpace = false;
        }
        iter--;
    }

    return transformedInput.join('');
};
