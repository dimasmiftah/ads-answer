function Max2([a, b]: number[]): number {
  return Math.max(a, b);
}

function Max3([a, b, c]: number[]): number {
  return Max2([a, Max2([b, c])]);
}

function Max9([a, b, c, d, e, f, g, h, i]: number[]): number {
  return Max3([Max3([a, b, c]), Max3([d, e, f]), Max3([g, h, i])]);
}
