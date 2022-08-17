function solution(arr) {
  const min = Math.min.apply(null, arr);
  return arr.filter((v) => v !== min).length === 0
    ? [-1]
    : arr.filter((v) => v !== min);
}
