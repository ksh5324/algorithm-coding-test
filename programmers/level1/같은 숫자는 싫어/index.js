function solution(arr) {
  return arr
    .map((v, idx) => {
      if (v !== arr[idx + 1]) {
        return v;
      }
    })
    .filter((v) => v !== undefined);
}
