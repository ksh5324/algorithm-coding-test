function solution(n) {
  const str = "수박";
  return str.repeat(Math.ceil(n / 2)).substring(0, n);
}
