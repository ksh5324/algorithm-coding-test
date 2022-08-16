function solution(s) {
  const len = s.length;
  return s.substring(s.length / 2 - ((len + 1) % 2), s.length / 2 + 1);
}
