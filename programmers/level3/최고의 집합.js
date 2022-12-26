function solution(n, s) {
  if (n > s) {
    return [-1];
  }
  const array = new Array(n).fill(Math.floor(s / n));

  for (let i = 1; i <= s - n * Math.floor(s / n); i++) {
    array[array.length - i] += 1;
  }

  return array;
}
