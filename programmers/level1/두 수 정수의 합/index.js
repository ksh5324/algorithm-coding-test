function solution(a, b) {
  var answer = 0;
  const k = [a, b].sort((a, b) => a - b);
  for (let i = k[0]; i <= k[1]; i++) {
    answer += i;
  }
  return answer;
}
