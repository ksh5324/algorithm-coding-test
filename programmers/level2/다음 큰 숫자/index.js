function solution(n) {
  for (let i = n + 1; ; i++) {
    if (
      i
        .toString(2)
        .split("")
        .filter((v) => v === "1").length ===
      n
        .toString(2)
        .split("")
        .filter((v) => v === "1").length
    ) {
      return i;
    }
  }
}
