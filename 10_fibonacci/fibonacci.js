const fibonacci = function(number) {
    let firstNumber = 0
    let secondNumber = 1;
    if (number < 0) {
        return 'OOPS';
    }
    for (i = 1; i < number; i++) {
        let nextNumber = secondNumber;
        secondNumber = firstNumber + secondNumber;
        firstNumber = nextNumber;
    };
    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
