function solution(progresses, speeds) {
  var answer = [];
  while (true) {
    progresses = progresses.map((v, idx) => (v += speeds[idx]));
    if (progresses[0] >= 100) {
      answer.push(1);
      progresses.shift();
      speeds.shift();
      while (true) {
        if (progresses[0] >= 100) {
          answer[answer.length - 1]++;
          progresses.shift();
          speeds.shift();
        } else {
          break;
        }
      }
    }
    if (progresses.length === 0) {
      break;
    }
  }
  return answer;
}
