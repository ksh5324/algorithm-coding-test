function solution(v) {
  const x = v.map((v) => v[0]).sort((a, b) => a - b);
  const y = v.map((v) => v[1]).sort((a, b) => a - b);

  const xAnswer = x.find((v, index, arr) => {
    if (index % 2 === 0) {
      if (v !== arr[index + 1]) {
        return v;
      }
    }
  });
  const yAnswer = y.find((v, index, arr) => {
    if (index % 2 === 0) {
      if (v !== arr[index + 1]) {
        return v;
      }
    }
  });

  return [xAnswer, yAnswer];
}
