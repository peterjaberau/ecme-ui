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
