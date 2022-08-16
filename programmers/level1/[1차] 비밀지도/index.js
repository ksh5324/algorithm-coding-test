function solution(n, arr1, arr2) {
  const value = arr1.reduce((acc, cur, idx) => {
    return [...acc, cur | arr2[idx]];
  }, []);

  let big = value.map((v) => Number(v.toString(2).length));
  big = Math.max.apply(null, big);

  for (let i = 0; i < value.length; i++) {
    value[i] = value[i]
      .toString(2)
      .padStart(big, 0)
      .replace(/1/g, "#")
      .replace(/0/g, " ");
  }

  return value;
}
