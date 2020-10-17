// An unsorted array
const numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var descArray1 = numArray.sort(function compareFunction(a, b) {
    return b - a;
  });

// Print the results to the console
console.log(descArray1);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
var descArray2 = numArray.sort((a, b) => b - a);
console.log(descArray2);

// Reverse the array order
var revArray = descArray2.reverse();
console.log(revArray);

// Sort the array in ascending order using an arrow function
var ascArray = numArray.sort((a, b) => a - b);
console.log(ascArray);


// Slice the first five elements of the sortedAscending array, assign to a variable
var fiveArray = ascArray.slice(0, 5);
console.log(fiveArray);