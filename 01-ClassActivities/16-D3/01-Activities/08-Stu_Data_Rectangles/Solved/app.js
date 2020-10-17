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

// Data which we will be using to build our chart
var booksReadThisYear = [15];

// Append a rectangle and set its height in relation to the booksReadThisYear value
svg.append("rect")
  .classed("bar", true) // for bonus
  .data(booksReadThisYear)
  .attr("width", 100)
  .attr("height", d => d * 10);