import { kata, arrayBuilder } from './kata'

it('returns an array for undefined', () => {
  const result = arrayBuilder()
  expect(result).toHaveLength(0)
})

it('returns array of length n', () => {
  expect(arrayBuilder(1)).toHaveLength(1)
  expect(arrayBuilder(2)).toHaveLength(2)
  expect(arrayBuilder(50)).toHaveLength(50)
  expect(arrayBuilder(113)).toHaveLength(113)
})

it('returns an array of elements 1 to n', () => {
  expect(arrayBuilder(1)).toEqual(expect.arrayContaining([1]))
  expect(arrayBuilder(5)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]))
})

it('returns fizz for elements divisible by 3', () => {
  expect(kata(3)[2]).toEqual('fizz')
  expect(kata(6)[5]).toEqual('fizz')
})

it('returns buzz for elements divisible by 5', () => {
  expect(kata(5)[4]).toEqual('buzz')
  expect(kata(10)[9]).toEqual('buzz')
})

it('returns fizzbuzz for elements divisible by 3 and 5', () => {
  expect(kata(15)[14]).toEqual('fizzbuzz')
})
