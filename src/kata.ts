type FizzBuzzValue = number | 'fizz' | 'buzz' | 'fizzbuzz'

export const arrayBuilder = (n?: number): number[] =>
  n !== undefined
    ? Array.from({ length: n }).map((value, index) => index + 1)
    : []

export const kata = (n?: number): FizzBuzzValue[] =>
  arrayBuilder(n).map((value) => {
    if (value % 3 === 0 && value % 5 === 0) return 'fizzbuzz'
    if (value % 3 === 0) return 'fizz'
    if (value % 5 === 0) return 'buzz'
    return value
  })
