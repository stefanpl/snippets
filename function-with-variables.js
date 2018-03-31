// Create a function with internal scope variables
//
// We use an Immediately-Invoked Function Expression (IIEF)
//  and create a scope inside it by declaring (and returning) another function 

callThisFunctionMultipleTimes = (function() {
    let calledHowManyTimes = 0;
    return function() {
        console.log("Hi I have been called "+calledHowManyTimes+" times so far!");
        calledHowManyTimes++;
    }
})();


callThisFunctionMultipleTimes();
callThisFunctionMultipleTimes();
callThisFunctionMultipleTimes();