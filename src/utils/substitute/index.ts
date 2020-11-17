export type HashMap<I> = { [key: string]: I }

export const substitute = (value: string, toReplace: HashMap<string | number>): string =>
  Object.entries(toReplace).reduce((acc, [key, value]) => acc.replace(`:${key}`, value.toString()), value)
