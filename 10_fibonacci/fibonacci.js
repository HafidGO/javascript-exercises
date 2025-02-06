const fibonacci = function(number) {
    if(number !== "number"){
        number = parseInt(number);
    }
    
    if (number = 0) return 0;
    if (number < 0) return "OOPS";
    

    let firstNumber = 0;
    let secondNumber = 1;

    for (let index = 0; index < number; index++) {
        let current =  firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
