import entitify from '@/utils/entitify'

const sample = [
  { id: 1, value: 123 },
  { id: 2, value: 234 },
  { id: 3, value: 345 },
  { id: 4, value: 456 },
  { id: 5, value: 567 },
]

describe('utils/entitify.ts', () => {
  it('should transform array to object', () => {
    const entities = entitify(sample)
    expect(entities).toEqual({
      '1': { id: 1, value: 123 },
      '2': { id: 2, value: 234 },
      '3': { id: 3, value: 345 },
      '4': { id: 4, value: 456 },
      '5': { id: 5, value: 567 },
    })
  })
})
