function solution(s) {
  var answer = true;
  s = s.split("");
  const value = s.reduce((acc, cur) => {
    if (acc < 0) {
      return (answer = false);
    }
    return cur === "(" ? acc + 1 : acc - 1;
  }, 0);
  if (value > 0 || value < 0) {
    answer = false;
  }

  return answer;
}
