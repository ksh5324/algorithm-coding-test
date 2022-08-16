function solution(answers) {
  const method = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let tempArray = 0;

  const answer = method.reduce((acc, current, index) => {
    const temp = answers.filter(
      (currentValue, idx) => current[idx % current.length] === currentValue
    );
    if (tempArray === temp.length) {
      return [...acc, index + 1];
    } else if (tempArray < temp.length) {
      tempArray = temp.length;
      return [index + 1];
    } else {
      return acc;
    }
  }, []);

  return answer;
}
