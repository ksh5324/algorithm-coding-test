function solution(s) {
  s = s.toLowerCase();
  s = s.split("");
  const p = s.filter((v) => v === "p").length;
  const y = s.filter((v) => v === "y").length;
  return p === y;
}
