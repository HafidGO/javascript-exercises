const add = function(firstNumber, secondNumber) {
  return (typeof firstNumber === 'number' && typeof secondNumber ==='number')
  ? firstNumber + secondNumber 
  : "Not a number";
}
  
const subtract = function(firstNumber, secondNumber) {
  return (typeof firstNumber === 'number' && typeof secondNumber ==='number')
  ? (firstNumber - secondNumber) 
  : 'Not a number';
};

const sum = function(arrayOfNumbers){
    return arrayOfNumbers.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0)
}

const multiply = function(arrayOfNumbers) {
return arrayOfNumbers.reduce((accumulator, currentValue) => 
  accumulator * currentValue)
}

const power = function(firstNumber, secondNumber) {
  if (typeof(firstNumber === 'number') && typeof(secondNumber) === 'number'){
    var accumulator = firstNumber;
    var counter = 1
    while(counter<secondNumber){
      accumulator *= firstNumber;
      counter++;
  }
    return accumulator
  }
};

const factorial = function(firstNumber) {
  if (firstNumber === 0) {
    return 1;
  }
  else if (typeof firstNumber === 'number'){
    let counter = firstNumber-1;
    while(counter > 1){
      firstNumber *= counter;
      counter--;
  }
  return firstNumber
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
