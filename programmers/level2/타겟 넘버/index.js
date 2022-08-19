function solution(numbers, target) {
  function getNum(acc, cur, numbers, target) {
    if (cur === numbers.length) {
      return acc === target ? 1 : 0;
    }
    let num1 = acc + numbers[cur];
    let num2 = acc - numbers[cur];

    return (
      getNum(num1, cur + 1, numbers, target) +
      getNum(num2, cur + 1, numbers, target)
    );
  }

  return getNum(0, 0, numbers, target);
}
