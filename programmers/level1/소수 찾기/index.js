function solution(n) {
  var answer = 0;
  for (let num = 2; num <= n; num++) {
    if (소수(num)) {
      answer++;
    }
  }
  return answer;
}

function 소수(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
