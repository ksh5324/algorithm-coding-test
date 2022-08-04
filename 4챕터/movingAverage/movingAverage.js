// M * (N-M+1) -> N*M-M**2+M 알고리즘
var movingAverage1 = function (numberArray, M) {
    var tempArray = [];
    for (var i = M - 1; i < numberArray.length; ++i) {
        var partialSum = 0;
        for (var j = 0; j < M; ++j) {
            partialSum += numberArray[i - j];
        }
        tempArray.push(partialSum / M);
    }
    return tempArray;
};
// N 알고리즘 (linear time algorithm)
var movingAverage2 = function (numberArray, M) {
    var tempArray = [];
    var partialSum = 0;
    numberArray.forEach(function (currentValue, index) {
        partialSum += currentValue;
        if (index >= M - 1) {
            tempArray.push(partialSum / M);
            partialSum -= numberArray[index - M + 1];
        }
    });
    return tempArray;
};
var test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(movingAverage1(test, 4));
console.log(movingAverage2(test, 4));
