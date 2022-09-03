function solution(numbers) {
  let answer = [];
  for (let r = 1; r <= numbers.length; r++) {
    answer.push(
      cases(numbers.split(""), r).map((arr) => parseInt(arr.join("")))
    );
  }
  answer = [...new Set(answer.flat())];
  answer = answer.filter((v) => v !== 0 && v !== 1);

  return answer.filter((v) => test(Number(v))).length;
}

function test(v) {
  for (let i = 2; i * i <= v; i++) {
    if (v % i === 0) {
      return false;
    }
  }
  return true;
}

function cases(numbers, r) {
  let result = [];
  if (r === 1) {
    return numbers.map((num) => [num]);
  }
  for (let i = 0; i < numbers.length; i++) {
    const a = cases(
      numbers.filter((v, idx) => idx !== i),
      r - 1
    );
    const b = a.map((number) => [numbers[i], ...number]);
    result.push(...b);
  }
  return result;
}
