function solution(s) {
  s = s.split(" ").map((v) => Number(v));
  return Math.min.apply(null, s) + " " + Math.max.apply(null, s);
}
