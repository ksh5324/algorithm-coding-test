function solution(x) {
  return (
    x %
      String(x)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0) ===
    0
  );
}
