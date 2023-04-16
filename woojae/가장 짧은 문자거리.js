/**
 *
 * @param {string} str
 * @param {string} char
 */
function solution(str, char) {
  strArray = str.split("");
  const indexs = strArray.reduce(
    (acc, v, idx) => (v === char ? [...acc, idx] : acc),
    []
  );

  const result = strArray.map((v, idx) =>
    indexs.reduce(
      (acc, k) => (Math.abs(k - idx) > acc ? acc : Math.abs(k - idx)),
      Infinity
    )
  );

  result.forEach((v) => console.log(v));
}

solution("abcdedgeda", "e");
