function solution(s) {
  let length = s.length;
  let count = 0;
  let count2 = 0;

  while (s.length > 1) {
    s = s
      .split("")
      .filter((v) => v !== "0")
      .join("");
    count += length - s.length;
    s = s.length.toString(2);
    length = s.length;
    count2++;
  }
  return [count2, count];
}
