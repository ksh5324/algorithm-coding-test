function solution(priorities, location) {
  var answer = 0;

  while (priorities.length !== 0) {
    const k = priorities
      .slice(1, priorities.length - 1)
      .reduce((acc, v) => (v > priorities[0] ? true : acc), false);
    if (k) {
      priorities.push(priorities.shift());
    } else {
      priorities.shift();
      answer++;
      if (location === 0) {
        return answer;
      }
    }
    location--;

    if (location === -1) {
      location = priorities.length - 1;
    }
  }

  return answer;
}
