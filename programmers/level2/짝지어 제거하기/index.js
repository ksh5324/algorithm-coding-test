function solution(s) {
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    if (temp[temp.length - 1] === s[i]) {
      temp.pop();
    } else {
      temp.push(s[i]);
    }
  }
  return temp.length === 0 ? 1 : 0;
}
