function solution(places) {
  const answer = places.map((v) => {
    v = v.map((k) => k.split(""));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (v[i][j] === "X") {
          continue;
        }
        let temp = 0;

        if (j < 4 && v[i][j + 1] === "P") {
          temp++;
        }
        if (j > 0 && v[i][j - 1] === "P") {
          temp++;
        }
        if (i > 0 && v[i - 1][j] === "P") {
          temp++;
        }
        if (i < 4 && v[i + 1][j] === "P") {
          temp++;
        }

        if (v[i][j] === "O" && temp > 1) {
          return 0;
        } else if (v[i][j] === "P" && temp >= 1) {
          return 0;
        }
      }
    }
    return 1;
  });
  return answer;
}
