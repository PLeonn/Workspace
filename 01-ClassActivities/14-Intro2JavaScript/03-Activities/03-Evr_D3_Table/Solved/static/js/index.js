// Get a reference to the table body
const tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(weatherReport => console.log(weatherReport));

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(weatherReport => {
//   console.log(weatherReport);
//   let row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(weatherReport => {
//   let row = tbody.append("tr");
//   console.log(Object.values(weatherReport))
//   console.log(Object.entries(weatherReport))
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(weatherReport => {
//   let row = tbody.append("tr");
//   Object.values(weatherReport).forEach(value => {
//     console.log(value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     let cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(weatherReport => {
//   let row = tbody.append("tr");
//   Object.values(weatherReport).forEach(value => {
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// // BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
  let row = tbody.append("tr");
  Object.values(weatherReport).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});
