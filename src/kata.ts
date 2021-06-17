export const arrayBuilder = (n?: number): number[] =>
  n !== undefined
    ? Array.from({ length: n }).map((value, index) => index + 1)
    : []
