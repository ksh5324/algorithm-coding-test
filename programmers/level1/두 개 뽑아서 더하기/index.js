function solution(numbers) {
  var answer = [];
  numbers.forEach((v, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      answer.push(v + numbers[i]);
    }
  });
  return [...new Set(answer)].sort((a, b) => a - b);
}
