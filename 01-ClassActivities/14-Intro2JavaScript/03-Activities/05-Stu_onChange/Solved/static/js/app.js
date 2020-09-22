// grab references to the input element and the output div
let text = d3.select("#text"), output = d3.select(".output");

// Function to reverse a string
const reverseString = (str) => str.split("").reverse().join("");

// Function to handle input change
const handleChange = (event) => {
  // grab the value of the input field
  let inputText = d3.event.target.value;

  // reverse the input string
  let reversedInput = reverseString(inputText);

  // Set the output text to the reversed input string
  output.text(reversedInput);
}

text.on("change", handleChange);
