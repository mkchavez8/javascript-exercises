const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof(num1 && num2) !== 'number' || ((num1 || num2) < 0)) {
        return "ERROR";
    }
    else if (num1 < num2) {
        for (i = 0; i < num2; i++) {
            sum += (i + 1);
        }
    return sum;
    }
    else if (num1 > num2) {
        for (i = 0; i < num1; i++) {
            sum += (i + 1);
        }
    return sum;
    }
};


// Do not edit below this line
module.exports = sumAll;
