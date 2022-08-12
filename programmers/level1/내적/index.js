function solution(a, b) {
  const answer = a.reduce((acc, cur, index) => acc + cur * b[index], 0);
  return answer;
}
