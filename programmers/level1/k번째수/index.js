function solution(array, commands) {
  const answer = commands.reduce((acc, currentIndex) => {
    const tempArray = [...array].slice(currentIndex[0] - 1, currentIndex[1]);
    tempArray.sort((a, b) => a - b);
    return [...acc, tempArray[currentIndex[2] - 1]];
  }, []);
  return answer;
}
