function check(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 1; k < nums.length - 1; k++) {
      for (let q = k + 1; q < nums.length; q++) {
        console.log(nums[i] + nums[k] + nums[q]);
        answer += !check(nums[i] + nums[k] + nums[q]) ? 1 : 0;
      }
    }
  }

  return answer;
}
