export const getDynamicVariables = (text) => {

    const matchedParams = text.match(/\{\{(.*?)\}\}/g) || text.match(/\%\%(.*?)\%\%/g);
    return matchedParams;
};
