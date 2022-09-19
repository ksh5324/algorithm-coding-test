let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(input[0] + input[1]);
