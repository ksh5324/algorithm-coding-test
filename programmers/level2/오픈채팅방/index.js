function solution(record) {
  const nick = {};
  record = record.filter((cur) => {
    const [todo, id, name] = cur.split(" ");
    if (todo !== "Leave") {
      nick[`${id}`] = name;
    }
    return todo !== "Change";
  });

  return record.map((cur) => {
    const [todo, id, _] = cur.split(" ");
    return makeString(todo, id).replace(id, nick[id]);
  });
}

function makeString(todo, id) {
  return `${id}님이 ${todo === "Enter" ? "들어왔습니다." : "나갔습니다."}`;
}
