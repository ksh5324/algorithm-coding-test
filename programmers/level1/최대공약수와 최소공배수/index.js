function solution(n, m) {
  return [GCD(n, m), LCM(n, m)];
}

function GCD(num1, num2) {
  [num1, num2] = [num1, num2].sort((a, b) => a - b);
  let temp;
  while (num2 != 0) {
    temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
}

function LCM(num1, num2) {
  return (num1 * num2) / GCD(num1, num2);
}
