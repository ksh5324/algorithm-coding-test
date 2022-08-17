function solution(phone_number) {
  return phone_number
    .split("")
    .reduce(
      (acc, cur, idx) =>
        phone_number.length - idx <= 4 ? (acc += cur) : (acc += "*"),
      ""
    );
}
