var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Using the .map method
var mapSimpleArray = theStagesOfJS.map(function(item) {
  return item;
});

// An Arrow function is a new concise syntax for function
// Arrow functions allow us to drop the `function` keyword and just show the parameters.
// Note: The fat arrow `=>` that was added to indicate an arrow function.
var mapArrow1 = theStagesOfJS.map((item) => {
  return item;
});
console.log(mapArrow1);

// We can drop the parentheses around the parameter if there's only one of them, 
// but if we include the return keyword we must surround the return statement with curly braces.
var mapArrow2 = theStagesOfJS.map(item => { return item; });
console.log(mapArrow2);

// And finally, we can just drop the `return` keyword. The return is implied.
var mapArrow3 = theStagesOfJS.map(item => item);
console.log(mapArrow3);

// function(item) { return item; }
// item => item

// Functions with more than one parameter still need the parenthesis
var mapReturn1 = theStagesOfJS.map((item, index) => {
  return `Stage ${index}: ${item}`;
});
console.log(mapReturn1);

// We can also drop the curly braces here
var mapReturn2 = theStagesOfJS.map((item, index) => `Stage ${index}: ${item}`);
console.log(mapReturn2);

// function(item, index) { return `Stage ${index}: ${item}`; }
// (item, index) => `Stage ${index}: ${item}`

// Map and Arrow makes it really easy to build an array of values for an array of objects
var students = [
  { name: "Malcolm", score: 80 },
  { name: "Zoe", score: 85 },
  { name: "Kaylee", score: 99 },
  { name: "Simon", score: 99 },
  { name: "Wash", score: 79 }
];

// function(student) { return student.name; }
var names = students.map(student => student.name);
var scores = students.map(student => student.score);

console.log(names);
console.log(scores);

// Challenge Activity!
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
var names = princesses.map(princess => princess.name.toLowerCase());
console.log("names: ", names);


