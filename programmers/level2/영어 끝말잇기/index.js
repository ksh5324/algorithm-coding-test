function solution(n, words) {
  var answer = [words[0]];
  if (words[0].length < 2) {
    return [1, 1];
  }
  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1].slice(-1) === words[i].slice(0, 1) &&
      !answer.includes(words[i]) &&
      words[i].length > 1
    ) {
      answer.push(words[i]);
      continue;
    }
    return [(i % n) + 1, Math.floor(i / n) + 1];
  }

  return [0, 0];
}
