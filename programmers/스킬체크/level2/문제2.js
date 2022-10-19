// 50점 (50점 만점)
function solution(skill, skill_trees) {
  const skillArray = skill.split("");
  const result = skill_trees.reduce((acc, v) => {
    const k = skillArray
      .map((value) => v.indexOf(value))
      .map((v, idx) => (v === -1 ? 999 + idx : v));
    for (let i = 0; i < k.length - 1; i++) {
      if (k[i] > k[i + 1]) {
        return acc;
      }
    }
    return acc + 1;
  }, 0);
  return result;
}
