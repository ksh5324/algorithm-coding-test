function solution(w, h) {
  return w * h - (w + h - GCD(w, h));
}

function GCD(num1, num2) {
  while (!num2 == 0) {
    let temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
}
