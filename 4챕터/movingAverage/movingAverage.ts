// M * (N-M+1) -> N*M-M**2+M 알고리즘
const movingAverage1 = (numberArray: number[], M: number): number[] => {
  const tempArray: number[] = [];

  for (let i = M - 1; i < numberArray.length; ++i) {
    let partialSum = 0;
    for (let j = 0; j < M; ++j) {
      partialSum += numberArray[i - j];
    }
    tempArray.push(partialSum / M);
  }

  return tempArray;
};

// N 알고리즘 (linear time algorithm)
const movingAverage2 = (numberArray: number[], M: number) => {
  const tempArray: number[] = [];
  let partialSum = 0;
  numberArray.forEach((currentValue: number, index: number) => {
    partialSum += currentValue;

    if (index >= M - 1) {
      tempArray.push(partialSum / M);
      partialSum -= numberArray[index - M + 1];
    }
  });
  return tempArray;
};

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(movingAverage1(test, 4));
console.log(movingAverage2(test, 4));
