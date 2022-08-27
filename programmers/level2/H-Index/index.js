function solution(citations) {
  return citations.sort((a, b) => b - a).filter((v, idx) => v >= idx + 1)
    .length;
}
