function solution(numbers) {
  return numbers
    .sort((a, b) => {
      if (String(a) + String(b) > String(b) + String(a)) {
        return -1;
      } else if (String(a) + String(b) < String(b) + String(a)) {
        return 1;
      }
    })
    .join("");
}
