function solution(s) {
  var answer = 1000;
  for (let i = 1; i <= s.length; i++) {
    let tempS = [];
    let count = 1;
    for (let p = 0; p < s.length + i; p += i) {
      const temp = s.substr(p, i);
      if (tempS[tempS.length - 1] === temp) {
        count++;
      } else {
        if (count >= 2) {
          tempS.push(count);
          tempS.push(temp);
          count = 1;
        } else {
          tempS.push(temp);
        }
      }
    }
    if (count !== 1) {
      tempS.push(count);
    }
    tempS = tempS.join("");
    if (tempS.length < answer) {
      answer = tempS.length;
    }
    tempS = [];
  }
  return answer;
}

// 풀이
const solution = (s) => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map((i) => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ""}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
      ["", "", 0]
    )
  );
};

const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
