function solution(absolutes, signs) {
  const answer = absolutes.reduce(
    (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
    0
  );
  return answer;
}
