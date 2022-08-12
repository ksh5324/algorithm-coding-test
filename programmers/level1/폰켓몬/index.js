function solution(nums) {
  const kategory = nums.reduce(
    (acc, cur) => (!acc.includes(cur) ? acc.concat(cur) : acc),
    []
  ).length;
  const choose = nums.length / 2;

  return kategory > choose ? choose : kategory;
}
