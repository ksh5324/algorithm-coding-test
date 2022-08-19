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
  let left = 0;
  let right = queue1.length;

  let queueTemp = [queue1, queue2].flat();

  for (; i >= 0; i--) {
    if (queue1Sum < average) {
      const temp = queueTemp[right++];
      queue1Sum += temp;
      length++;
    } else if (queue1Sum > average) {
      const temp = queueTemp[left++];
      queue1Sum -= temp;
      length++;
    } else if (queue1Sum === average) {
      return length;
    }
  }
  return -1;
}
