function solution(arr1, arr2) {
  return arr1.map((v, idx) => v.map((cur, idx2) => cur + arr2[idx][idx2]));
}
