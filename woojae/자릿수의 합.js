/**
 *
 * @param {number[]} numArray
 */
function solution(numArray) {
  const sum = numArray.map((v) =>
    String(v)
      .split("")
      .reduce((acc, v) => acc + Number(v), 0)
  );

  const filter = sum.reduce(
    (acc, v, idx) => {
      if (acc.value < v) {
        return { value: v, index: [idx] };
      } else if (acc.value === v) {
        return { ...acc, index: [...acc.index, idx] };
      } else {
        return acc;
      }
    },
    { value: 0, index: [0] }
  ).index;

  const bigSizeNumber = filter.reduce(
    (acc, v) => (acc > numArray[v] ? acc : numArray[v]),
    0
  );

  console.log(bigSizeNumber);
}

solution([128, 460, 603, 40, 521, 137, 123]);
