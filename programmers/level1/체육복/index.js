function solution(n, lost, reserve) {
  lost = [...new Set(lost)];
  reserve = [...new Set(reserve)];

  const lostTemp = lost.filter((v) => !reserve.includes(v));
  const reserveTemp = reserve.filter((v) => !lost.includes(v));
  lost = lostTemp;
  reserve = reserveTemp;

  let answer = n - lost.length;
  reserve.sort();
  lost.sort();

  lost.forEach((current) => {
    if (reserve.includes(current - 1)) {
      reserve = reserve.filter((v) => v !== current - 1);
      answer++;
    } else if (reserve.includes(current + 1)) {
      reserve = reserve.filter((v) => v !== current + 1);
      answer++;
    }
  });

  return answer;
}
