// Sort the array in descending order
var numArray = [10, 22, 4];
numArray.sort(function compareFunction(a, b) {
  // resulting order is descending
  return b - a;
});

// Returns [22, 10, 4]
console.log(numArray);

// Sort the array in ascending order
var numArray2 = [2, 25, 17];
numArray2.sort(function compareFunction(a, b) {
  // resulting order is ascending
  return a - b;
});

// Returns [2, 17, 25]
console.log(numArray2);

// Sort the array in ascending order, using an arrow function
var numArray3 = [8, 14, 2, 60, 37];
numArray3.sort((a, b) => a - b);
console.log(numArray3);

// Reverse the array
var reversedArray = numArray3.reverse()
console.log(reversedArray);
