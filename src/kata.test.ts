import { kata } from './kata'

it('returns an array for undefined', () => {
  const result = kata()
  expect(result).toHaveLength(0)
})

it('returns array of length n', () => {
  expect(kata(1)).toHaveLength(1)
})
