function solution(n) {
  const tempArray = [];
  const num = [4, 1, 2];

  for (; n > 0; ) {
    tempArray.push(num[n % 3]);
    n = Math.floor((n - 1) / 3);
  }

  return tempArray.reverse().join("");
}
