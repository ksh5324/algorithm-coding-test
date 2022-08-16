function solution(N, stages) {
  let answer = [];
  let temp = [];
  for (let i = 1; i <= N; i++) {
    const tempArray = stages.filter((v) => v >= i);
    const fail = tempArray.filter((v) => v === i);

    answer.push([i, fail.length / tempArray.length]);
  }

  answer.sort((a, b) => b[1] - a[1]);
  return answer.reduce((acc, current) => {
    return [...acc, current[0]];
  }, []);
}
