const findTheOldest = function(people) {
    currentDate = new Date().getFullYear();
    const oldest = people.sort((a,b) => ((a.yearOfDeath ?? currentDate) - a.yearOfBirth) > ((b.yearOfDeath ?? currentDate)- b.yearOfBirth)? -1 : 1) 
    
    return (oldest[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
