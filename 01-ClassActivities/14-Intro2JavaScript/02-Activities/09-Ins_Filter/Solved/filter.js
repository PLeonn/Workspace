// filter()
// An array of objects, representing a cartoon family
const simpsons = [{
  name: "Homer",
  age: 45
}, {
  name: "Lisa",
  age: 8
}, {
  name: "Marge",
  age: 43
}, {
  name: "Bart",
  age: 10
}, {
  name: "Maggie",
  age: 1
}];

// Create a custom filtering function
const selectYounger = (person) => person.age < 30;

// filter() uses the custom function as its argument
let youngSimpsons = simpsons.filter(selectYounger);

// only those elements that meet the condition are included in the new array
console.log(youngSimpsons);
