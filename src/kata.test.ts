import { kata } from './kata'

it('returns an array for undefined', () => {
  const result = kata()
  expect(result).toHaveLength(0)
})

it('returns array of length n', () => {
  expect(kata(1)).toHaveLength(1)
  expect(kata(2)).toHaveLength(2)
  expect(kata(50)).toHaveLength(50)
  expect(kata(113)).toHaveLength(113)
})

it('returns an array of elements 1 to n', () => {
  expect(kata(1)).toEqual(expect.arrayContaining([1]))
})
