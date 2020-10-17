// setup for margins and area dimensions
var margin = { top: 25, right: 25, bottom: 25, left: 25}
var width = 425 - margin.left - margin.right
var height = 625 - margin.top - margin.bottom

// Append the SVG wrapper to the page, set its height and width, 
// and create a group element shifted to accomodate the svg margins
var svg = d3.select('#svg-area')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)


// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(booksReadThisYear)
  .join("rect")
  .classed("bar", true)
  .attr("width", 50)
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", data => data * 10)
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", (data, index) => index * 60)
  // for bonus 2
  .attr("y", d => svgHeight - d * 10);

// // Horizontal Bar Chart
// svg.selectAll("rect")
//   .data(booksReadThisYear)
//   .join("rect")
//   .classed("bar", true)
//   .attr("width", d => d * 10)
//   .attr("height", 50)
//   .attr("x", 0)
//   .attr("y", (d, i) => i * 60);
