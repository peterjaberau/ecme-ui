import { resolveReferences as newResolveReference } from '../code-editor/utils';

const handleResolveReferences = (initialValue: any, defaultValue: any, customResolvers: any) => {
  const [_, error, value]: any = newResolveReference(initialValue, {}, customResolvers);

  if (error) {
    return defaultValue;
  }

  return value;
};

export const resolveProperties = (component: any, currentState: any, defaultValue: any, customResolvables: any) => {
  if (currentState) {
    return Object.entries(component.definition.properties).reduce(
      (properties: any, entry: any) => ({
        ...properties,
        ...{
          [entry[0]]: entry[1]?.skipResolve
            ? entry[1].value
            : handleResolveReferences(entry[1].value, defaultValue, customResolvables),
        },
      }),
      {}
    );
  } else return {};
};

export const resolveStyles = (component: any, currentState: any, defaultValue: any, customResolvables: any) => {
  if (currentState) {
    const styles = component.definition.styles;
    return Object.entries(styles).reduce((resolvedStyles: any, entry: any) => {
      const key = entry[0];
      const value = entry[1]?.skipResolve
        ? entry[1].value
        : handleResolveReferences(entry[1].value, defaultValue, customResolvables);
      return {
        ...resolvedStyles,
        ...{ [key]: value },
      };
    }, {});
  } else {
    return {};
  }
};

export const resolveGeneralProperties = (component: any, currentState: any, defaultValue: any, customResolvables: any) => {
  if (currentState) {
    const generalProperties: any = component.definition?.general ?? {};
    return Object.entries(generalProperties).reduce((resolvedGeneral: any, entry: any) => {
      const key = entry[0];
      const value = entry[1]?.skipResolve
        ? entry[1].value
        : handleResolveReferences(entry[1].value, defaultValue, customResolvables);
      return {
        ...resolvedGeneral,
        ...{ [key]: value },
      };
    }, {});
  } else {
    return {};
  }
};

export const resolveGeneralStyles = (component: any, currentState: any, defaultValue: any, customResolvables: any) => {
  if (currentState) {
    const generalStyles = component.definition?.generalStyles ?? {};
    return Object.entries(generalStyles).reduce((resolvedGeneral: any, entry: any) => {
      const key = entry[0];
      const value = entry[1]?.skipResolve
        ? entry[1].value
        : handleResolveReferences(entry[1].value, defaultValue, customResolvables);
      return {
        ...resolvedGeneral,
        ...{ [key]: value },
      };
    }, {});
  } else {
    return {};
  }
};
