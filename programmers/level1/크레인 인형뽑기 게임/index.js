// 문제 잘못 이해
function solution(board, moves) {
  const stackArray = [];
  const resultStack = new Stack([]);
  board.forEach((v) => {
    stackArray.push(new Stack(v));
  });

  moves.forEach((v) => {
    const curValue = stackArray[v - 1].customPop();
    resultStack.customPush(curValue);
  });

  console.log(resultStack);
  return resultStack.result;
}
class Stack {
  result = 0;
  constructor(array) {
    this.array = array;
  }
  customPop() {
    return this.array.pop();
  }
  customPush(value) {
    if (!this.compare(value)) {
      this.array.push(value);
    } else {
      this.customPop();
      this.customPop();
      this.result += 2;
    }
  }
  compare(value) {
    return this.array[this.array.length - 1] === value;
  }
}
