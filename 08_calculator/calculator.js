const add = function(firstNumber, secondNumber) {
  (typeof(firstNumber === 'number') && typeof(secondNumber)) ==='number' ? (firstNumber + secondNumber) : 'Not a number';
};

const subtract = function(firstNumber, secondNumber) {
  (typeof(firstNumber === 'number') && typeof(secondNumber)) ==='number' ? (firstNumber - secondNumber) : 'Not a number';
};

const sum = function(firstNumber, secondNumber) {
  (typeof(firstNumber === 'number') && typeof(secondNumber)) ==='number' ? (firstNumber + secondNumber) : 'Not a number';
};

const multiply = function(firstNumber, secondNumber) {
  (typeof(firstNumber === 'number') && typeof(secondNumber)) ==='number' ? (firstNumber * secondNumber) : 'Not a number';
};

const power = function(firstNumber, secondNumber) {
  if (typeof(firstNumber === 'number') && typeof(secondNumber) === 'number'){
    const acummulator = firstNumber;
    while(acummulator<=secondNumber){
      acummulator *= firstNumber;
  }
  return acummulator
  }
  else{
    return 'not a number'
  }
};

const factorial = function(firstNumber) {
  if (typeof(firstNumber === 'number') === 'number'){
    const counter = firstNumber;
    while(acummulator >= 1){
      firstNumber *= couter;
      counter--;
  }
  return acummulator
  }
  else{
    return 'not a number'
  }
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
