function solution(expression) {
  const answer = cleave(expression);
  const result = [];
  result.push(calculate([...answer], "+*-"));
  result.push(calculate([...answer], "+-*"));
  result.push(calculate([...answer], "*+-"));
  result.push(calculate([...answer], "*-+"));
  result.push(calculate([...answer], "-*+"));
  result.push(calculate([...answer], "-+*"));

  result.sort((a, b) => b - a);

  return result[0];
}

function cleave(expression) {
  const reg = /[0-9]+/;
  const result = [];
  while (expression !== "") {
    const value = expression.match(reg);
    expression = expression.replace(reg, "");
    result.push(value[0]);
    result.push(expression[0]);
    expression = expression.substring(1, expression.length);
  }
  return result.splice(0, result.length - 1);
}

function calculate(number, operation) {
  operation = operation.split("");
  operation.forEach((c) => {
    let k = number.length;
    for (let i = 0; i < k; i++) {
      if (number[i] === c) {
        number[i - 1] = "(" + number[i - 1] + number[i] + number[i + 1] + ")";
        number[i] = undefined;
        number[i + 1] = undefined;
        number = number.filter((v) => v !== undefined);
        i = 0;
        k = number.length;
      }
    }
  });
  return Math.abs(eval(number.join("")));
}
