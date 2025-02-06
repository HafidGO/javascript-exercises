const fibonacci = function(number) {
    if (typeof number !== "number"){
        number = parseInt(number);
    }
    
    if (number == 0) return 0;
    if (number < 0) return "OOPS";
    
    let firstNumber = 0;
    let secondNumber = 1;

    for (let index = 2; index <= number; index++) {
        let current =  firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = current;
    }

    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
