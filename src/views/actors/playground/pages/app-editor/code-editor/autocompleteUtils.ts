export function getLastSubstring(inputString: any) {
  if (!inputString.includes('.')) return '';

  let parts = inputString.trim().split('.').filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : '';
}

export function getLastDepth(inputString: any) {
  let parts = inputString.split('.').filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : '';
}
