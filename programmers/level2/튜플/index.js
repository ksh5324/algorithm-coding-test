function solution(s) {
  var answer = {};
  s = s.substring(2, s.length - 2);
  s = s.split("},{");

  s = s
    .join(",")
    .split(",")
    .sort((a, b) => Number(a) - Number(b));

  s.map((v) => {
    const k = answer[`${v}`] || 0;
    answer[`${v}`] = k + 1;
  });

  const sortable = [];
  for (var name in answer) {
    sortable.push([name, answer[name]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return sortable.map((v) => Number(v[0]));
}
