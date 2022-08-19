function solution(nums) {
  const kategory = [...new Set(nums)].length;
  const choose = nums.length / 2;

  return kategory > choose ? choose : kategory;
}
