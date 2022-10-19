function solution(people, limit) {
  people.sort((a, b) => a - b);

  let count = 0;

  let length = people.length - 1;
  let start = 0;

  for (; start <= length; ) {
    if (people[length] + people[start] <= limit) {
      count++;
      ++start;
      --length;
    } else {
      ++count;
      --length;
    }
  }
  return count;
}
