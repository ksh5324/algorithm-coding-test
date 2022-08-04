var mostNumber1 = function (numberArray) {
    var majority = -1, majorityCount = 0;
    numberArray.forEach(function (currentValue) {
        var count = 0;
        for (var i = 0; i < numberArray.length; i++) {
            if (numberArray[i] === currentValue) {
                count++;
            }
        }
        if (count > majorityCount) {
            majorityCount = count;
            majority = currentValue;
        }
    });
    return majority;
};
var test = [
    1, 3, 24, 13, 54, 65, 23, 45, 34, 77, 65, 2, 11, 2, 2, 2, 11, 3, 44, 5, 6, 6,
    5, 24,
];
console.log(mostNumber1(test));
