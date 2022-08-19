// 시간초과 (수정중)
function solution(queue1, queue2) {
  let [queue1Sum, queue2Sum] = queue1.reduce(
    ([a, b], cur, idx) => {
      return [a + cur, b + queue2[idx]];
    },
    [0, 0]
  );
  let average = (queue1Sum + queue2Sum) / 2;
  let i = (queue1.length - 1) * 3 + 1;
  let length = 0;

  for (; i >= 0; i--) {
    if (queue1Sum < queue2Sum) {
      const temp = queue2.shift();
      queue1.push(temp);
      queue1Sum += temp;
      queue2Sum -= temp;
      length++;
    } else if (queue1Sum > queue2Sum) {
      const temp = queue1.shift();
      queue2.push(temp);
      queue2Sum += temp;
      queue1Sum -= temp;
      length++;
    } else if (queue1Sum === queue2Sum) {
      return length;
    }
  }
  return -1;
}
