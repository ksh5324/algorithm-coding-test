function solution(num) {
  let answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num === 1) return answer;
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 2 === 1) {
      num *= 3;
      num += 1;
    }
    answer++;
  }
  return -1;
}
