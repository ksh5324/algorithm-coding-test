function solution(lottos, win_nums) {
  let result = 0;
  lottos.forEach((v) => {
    if (win_nums.includes(v)) {
      result++;
    }
  });

  const zero = lottos.filter((v) => v === 0);

  var answer = [];
  answer.push(rankCheck(result + zero.length));
  answer.push(rankCheck(result));

  return answer;
}

function rankCheck(value) {
  if (value >= 6) {
    return 1;
  } else if (value === 5) {
    return 2;
  } else if (value === 4) {
    return 3;
  } else if (value === 3) {
    return 4;
  } else if (value === 2) {
    return 5;
  } else {
    return 6;
  }
}

// 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
