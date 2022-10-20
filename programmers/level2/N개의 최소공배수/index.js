function solution(arr) {
  var answer = arr.shift();
  return arr.reduce((acc, v) => lcm(acc, v), answer);
}

function gcd(a, b) {
  while (b != 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
