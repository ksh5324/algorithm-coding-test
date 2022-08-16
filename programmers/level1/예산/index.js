function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i];
      answer++;
    } else {
      break;
    }
  }

  return answer;
}
