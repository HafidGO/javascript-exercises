const palindromes = function (userString) {
    let cleanedString = userString.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    let reverseString = cleanedString.split('').reverse().join('');

    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

