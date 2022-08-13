function solution(numbers, hand) {
  const keypade = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  var answer = "";
  let left = { x: 0, y: 3 };
  let right = { x: 2, y: 3 };

  numbers.forEach((v) => {
    const wantPosition = findKey(keypade, v);
    if (wantPosition.x === 0) {
      answer = answer.concat("L");
      left.x = wantPosition.x;
      left.y = wantPosition.y;
    } else if (wantPosition.x === 2) {
      answer = answer.concat("R");
      right.x = wantPosition.x;
      right.y = wantPosition.y;
    } else {
      const leftMoveNum =
        Math.abs(left.x - wantPosition.x) + Math.abs(left.y - wantPosition.y);
      const rightMoveNum =
        Math.abs(right.x - wantPosition.x) + Math.abs(right.y - wantPosition.y);

      console.log(wantPosition, leftMoveNum, rightMoveNum);

      if (leftMoveNum > rightMoveNum) {
        answer = answer.concat("R");
        right.x = wantPosition.x;
        right.y = wantPosition.y;
      } else if (leftMoveNum < rightMoveNum) {
        answer = answer.concat("L");
        left.x = wantPosition.x;
        left.y = wantPosition.y;
      } else {
        if (hand === "right") {
          answer = answer.concat("R");
          right.x = wantPosition.x;
          right.y = wantPosition.y;
        } else {
          answer = answer.concat("L");
          left.x = wantPosition.x;
          left.y = wantPosition.y;
        }
      }
    }
  });

  console.log(answer);
  return answer;
}

function findKey(keypade, want) {
  for (let i = 0; i < 4; i++) {
    const result = keypade[i].indexOf(want);
    if (result !== -1) {
      return { x: result, y: i };
    }
  }
}
