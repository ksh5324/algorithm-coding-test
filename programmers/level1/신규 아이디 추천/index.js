function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^0-9a-z-_.]/gi, "");
  new_id = new_id.replace(/[..]+/g, ".");
  new_id = new_id.replace(/^[.]|[.]$/, "");
  new_id = new_id || "a";
  new_id = new_id.substring(0, 15);
  new_id = new_id.replace(/^[.]|[.]$/, "");

  if (new_id.length <= 2) {
    for (;;) {
      new_id = new_id.concat(new_id[new_id.length - 1]);
      if (new_id.length > 2) {
        break;
      }
    }
  }

  var answer = new_id;
  return answer;
}

// 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// 풀이2
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
