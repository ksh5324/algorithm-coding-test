const run = {
  I: (queue, value) => Function_I(queue, value),
  D: (queue, value) => Function_D(queue, value),
};

function solution(operations) {
  let queue = [];
  operations.forEach((v) => {
    const array = v.split(" ");
    run[array[0]](queue, array[1]);
    queue.sort((a, b) => a - b);
  });
  return [Number(queue[queue.length - 1]) || 0, Number(queue[0]) || 0];
}

const Function_I = (queue, value) => {
  queue.push(value);
};

const Function_D = (queue, value) => {
  if (value === "-1") {
    queue.shift();
    return;
  }
  queue.pop();
  return;
};
