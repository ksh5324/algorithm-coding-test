function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      return v
        .split("")
        .reduce(
          (acc, e, idx) =>
            idx % 2 === 0
              ? acc.concat(e.toUpperCase())
              : acc.concat(e.toLowerCase()),
          ""
        );
    })
    .join(" ");
}
