function solution(n) {
  const sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  }
  return -1;
}
