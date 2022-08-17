function solution(s, n) {
  return s
    .split("")
    .map((_, idx) =>
      String.fromCharCode(
        s.charCodeAt(idx) === 32
          ? 32
          : s.charCodeAt(idx) + n > 122
          ? s.charCodeAt(idx) + n - 26
          : s.charCodeAt(idx) >= 97
          ? s.charCodeAt(idx) + n
          : s.charCodeAt(idx) + n > 90
          ? s.charCodeAt(idx) + n - 26
          : s.charCodeAt(idx) + n
      )
    )
    .join("");
}
