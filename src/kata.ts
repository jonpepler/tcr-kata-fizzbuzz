type FizzBuzzValue = number | 'fizz'

export const arrayBuilder = (n?: number): number[] =>
  n !== undefined
    ? Array.from({ length: n }).map((value, index) => index + 1)
    : []

export const kata = (n?: number): FizzBuzzValue[] =>
  arrayBuilder(n).map((value) => (value % 3 === 0 ? 'fizz' : value))
