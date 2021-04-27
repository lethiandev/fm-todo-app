function entitify<T extends { id: any }>(arr: T[]): Record<string, T> {
  const reducer = (acc: Record<string, T>, item: T) => ({
    ...acc,
    [item.id]: item,
  })

  return arr.reduce(reducer, {})
}

export default entitify
