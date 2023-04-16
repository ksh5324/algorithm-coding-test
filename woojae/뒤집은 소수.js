/**
 *
 * @param {number[]} numberList
 */
function solution(numberList) {
  numberList = numberList.map((v) =>
    Number(String(v).split("").reverse().join(""))
  );
  numberList.forEach((v) => {
    if (numberCheck(v)) console.log(v);
  });
}

/**
 * @param {number} number
 */
function numberCheck(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
