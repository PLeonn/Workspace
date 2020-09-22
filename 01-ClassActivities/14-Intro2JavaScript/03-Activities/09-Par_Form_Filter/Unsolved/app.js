// Assign the data from `data.js` to a descriptive variable
// Select the button
// Select the form

let people = data,
    button = d3.select("#button"),
    form = d3.select("#form");

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing

  // Select the input element and get the raw HTML node

  // Get the value property of the input element

  // Use the form input to filter the data by blood type

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag

};

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);