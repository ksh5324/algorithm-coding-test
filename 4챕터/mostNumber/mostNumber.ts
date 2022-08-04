// N ** 2 알고리즘
const mostNumber1 = (numberArray: number[]): number => {
  let majority = -1,
    majorityCount = 0;

  numberArray.forEach((currentValue) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] === currentValue) {
        count++;
      }
    }

    if (count > majorityCount) {
      majorityCount = count;
      majority = currentValue;
    }
  });
  return majority;
};

// N + range 알고리즘
const mostNumber2 = (numberArray: number[], range: number): number => {
  const tempArray: number[] = [];
  numberArray.forEach((currentValue) => {
    tempArray[currentValue]++;
  });

  let majority = 0;
  for (let i = 0; i < range; i++) {
    if (tempArray[i] > tempArray[majority]) {
      majority = i;
    }
  }
  return majority;
};

// const test = [
//   1, 3, 24, 13, 54, 65, 23, 45, 34, 77, 65, 2, 11, 2, 2, 2, 11, 3, 44, 5, 6, 6,
//   5, 24,
// ];

// console.log(mostNumber1(test));
