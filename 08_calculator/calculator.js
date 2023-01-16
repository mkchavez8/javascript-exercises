const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function(array) {
  return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};


const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let total = 1
	for (i = num; i > 0; i--) {
    total *= i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
