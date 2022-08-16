function solution(n) {
  var answer = 0;
  const temp = [];
  for (; n > 0; ) {
    temp.push(n % 3);
    n = Math.floor(n / 3);
  }
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    answer += temp[i] * Math.pow(3, temp.length - i - 1);
  }
  return answer;
}

// 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
