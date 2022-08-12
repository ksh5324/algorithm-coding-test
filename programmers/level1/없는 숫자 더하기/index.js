function solution(numbers) {
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer = numberArray
    .filter((v) => !numbers.includes(v))
    .reduce((value, cur) => value + cur, 0);
  return answer;
}
