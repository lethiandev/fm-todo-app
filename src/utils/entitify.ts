function entitify<T extends { id: any }>(arr: T[]): Record<string, T> {
  const reducer = (acc: Record<string, T>, it: T) => ({ ...acc, [it.id]: it })
  return arr.reduce(reducer, {})
}

export default entitify
