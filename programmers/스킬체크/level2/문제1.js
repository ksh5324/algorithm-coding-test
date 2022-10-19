// 36.80점 (50점 만점)
let array = [];

function solution(n, k) {
  array = new Array(n).fill().map((_, idx) => idx + 1);

  let number = 1;

  while (next(array)) {
    number++;
    if (number === k) {
      return array;
    }
  }
}

function next(array) {
  let length = array.length - 1;

  while (length > 0 && array[length - 1] >= array[length]) length--;
  if (length <= 0) return false;

  let i = length - 1;
  for (; i < array.length - 1 && array[i + 1] > array[length - 1]; ) i++;

  swap(length - 1, i);

  i = array.length - 1;
  while (i > length) {
    swap(length, i);
    i -= 1;
    length += 1;
  }
  return true;
}

function swap(a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
