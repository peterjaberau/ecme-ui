export function reservedKeywordReplacer(key: any, value: any) {
  if ([window, window.app, document].includes(value)) {
    return {};
  }
  return value;
}
