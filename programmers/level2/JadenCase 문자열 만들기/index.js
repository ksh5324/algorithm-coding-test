function solution(s) {
  s = s
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.substr(1).toLowerCase())
    .join(" ");
  return s;
}
