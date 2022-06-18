export function getValidObject<T = any>(obj: T, allowedKeys: (keyof T)[]): T {
  return allowedKeys.reduce((acc, k) => ({ ...acc, ...(obj.hasOwnProperty(k) && { [k]: obj[k] }) }), {} as T);
}
