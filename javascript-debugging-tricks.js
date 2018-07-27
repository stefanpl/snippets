// Handy debugging tricks in the browser (tested in chrome)
// https://raygun.com/javascript-debugging-tips

// Print nicely as a table
let someArray = [
{
  name: 'horst',
  age: 27
},
{
  name: 'karlheinz',
  age: 51
},
{
  name: 'sandra',
  age: 28
},
];

console.table(someArray);


// Open the debugger every time a function is called
// (gotcha: only works with function references! function names as strings are not supported)
let myFunc = function() {
  console.log("something going on");
}
debug(functionReference);
myFunc();


// everytime a function gets executed, print information about the passed parameters:
monitor(functionReference);


// count how often something has happened
let theCounter = function(param){
  let label = param ? 'param passed' : 'no param passed';
  label = 'theCounter called with '+label;
  console.count(label);
}


// Chrome can break on DOM changes!


// Timing stuff
console.time('possible long operation');
thisMightTakeSomeTime();
console.timeEnd('possible long operation');