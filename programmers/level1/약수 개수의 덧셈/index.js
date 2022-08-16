function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (measure(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

function measure(number) {
  const array = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      array.push(i);
    }
  }
  return array.length;
}
