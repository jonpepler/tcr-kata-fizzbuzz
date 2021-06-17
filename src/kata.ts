export const kata = (n?: number): number[] =>
  n !== undefined ? Array.from({ length: n }) : []
