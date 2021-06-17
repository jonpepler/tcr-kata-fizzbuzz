import { kata } from './kata'

it('returns an array for undefined', () => {
  const result = kata()
  expect(result).toHaveLength(0)
})
