export const sortByKey = (array: any, key: any) => {
  return array.sort((a: any, b: any) => b[key] - a[key])
}
