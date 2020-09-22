const theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];
let theOtherStagesOfJS = ["glee", "excitement", "curiosity", "accomplishment", "astonishment", "elation"];

// Using the .map method
let mapSimpleArray = theStagesOfJS.map(item => item);

console.log(mapSimpleArray);

// Map will also provide the index position of the array.
// This is similar to enumerate in Python.
let mapArrayWithIndex = theStagesOfJS.map( (item, index) => `Stage ${index}: ${item}` );

console.log(mapArrayWithIndex);

// Note: The original array is unchanged
console.log(theStagesOfJS);

// Mapping over an array of objects
const students = [
    { name: "Malcolm", score: 80 },
    { name: "Zoe", score: 85 },
    { name: "Kaylee", score: 99 },
    { name: "Simon", score: 99 },
    { name: "Wash", score: 79 }
];

let names = students.map( student => student.name );

let scores = students.map( student => student.score );

console.log(names);
console.log(scores);

// Map vs forEach
// Part A
var forEachStages = theStagesOfJS.forEach( (each, index) => {
  // the return of forEach is ignored
  return `Stage ${index + 1}: ${each}`;
});

// undefined
console.log(forEachStages);

// unaltered
console.log(theStagesOfJS);

// Part B
// The original array is mutated with forEach
theStagesOfJS.forEach( (each, index) => theStagesOfJS[index] = `Stage ${index + 1}: ${each}` );

// Note that the original array has been altered (mutated)
console.log(theStagesOfJS);

theOtherStagesOfJS.forEach( (each, index) => theOtherStagesOfJS[index] = `Stage ${index + 1}: ${each}` );
console.log(theOtherStagesOfJS);

// theStagesOfJS = theOtherStagesOfJS;
theOtherStagesOfJS = theStagesOfJS;

// Challenge Activity!
const princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`) );

// Create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
let names2 = princesses.map(princess => princess.name.toLowerCase());
console.log("names: ", names2);

// to accomplish the same with forEach you need to prepare a list outside of the loop and fill it.
const justnames = [];
princesses.forEach(princess => justnames.push(princess.name));
console.log(justnames);
