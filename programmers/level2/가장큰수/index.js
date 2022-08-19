function solution(numbers) {
  numbers = numbers
    .sort((a, b) => {
      if (String(a) + String(b) > String(b) + String(a)) {
        return -1;
      } else if (String(a) + String(b) < String(b) + String(a)) {
        return 1;
      }
    })
    .join("");
  return numbers[0] === "0" ? String(parseInt(numbers)) : numbers;
}
