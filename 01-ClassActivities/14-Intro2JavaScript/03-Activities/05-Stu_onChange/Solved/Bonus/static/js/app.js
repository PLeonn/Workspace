// grab references to the input element and the output div
let text = d3.select("#text"), output = d3.select(".output");

const counter = (text) => {

  // convert text to lowercase characters (chars)
  let chars = text
    .toLowerCase()
    .replace(/\s+/g, "") // regex for removing spaces
    .split("");

  let counts = {};
  chars.forEach(char => char in counts ? counts[char] += 1 : counts[char] = 1);

  return counts;
}

// Function to handle input change
const handleChange = (event) => {
  // grab the value of the input field
  let value = d3.event.target.value;

  // clear the existing output
  output.html("");

  let frequencyCounts = counter(value);
  Object.entries(frequencyCounts).forEach(([key, value]) => {
    let li = output.append("li").text(`${key}: ${value}`);
  });
}

text.on("change", handleChange);
