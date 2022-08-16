function solution(id_list, report, k) {
  const message = {};
  const reportArray = {};
  const answer = [];

  report.forEach((current) => {
    const tempArray = current.split(" ");
    const choose = message[`${tempArray[0]}`] || [];
    let re = reportArray[`${tempArray[1]}`] || 0;

    if (!choose.includes(tempArray[1])) {
      message[`${tempArray[0]}`] = [...choose, tempArray[1]];
      reportArray[`${tempArray[1]}`] = ++re;
    }
  });

  id_list.forEach((currentKey) => {
    let count = 0;
    let array = message[`${currentKey}`];

    array = array || [];

    array.forEach((v) => {
      if (reportArray[`${v}`] >= k) {
        count++;
      }
    });

    answer.push(count);
  });
  return answer;
}

// 풀이
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
