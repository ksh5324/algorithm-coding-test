function solution(p) {
  if (p === "") {
    return "";
  }

  let count = 0;
  let issue = false;

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? count++ : count--;
    if (count < 0) issue = true;
    if (count === 0) {
      const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];

      if (!issue) {
        return u + solution(v);
      } else {
        const str = "(" + solution(v) + ")";
        return (
          str +
          u
            .slice(1, u.length - 1)
            .split("")
            .map((v) => (v === "(" ? ")" : "("))
            .join("")
        );
      }
    }
  }
}
