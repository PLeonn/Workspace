// Dataset we will be using to set the height of our rectangles.
var booksReadThisYear = [17, 23, 20, 34];

// setup for margins and area dimensions
var margin = { top: 25, right: 25, bottom: 25, left: 25}
var width = 625 - margin.left - margin.right
var height = 425 - margin.top - margin.bottom

let barWidth = (width/booksReadThisYear.length) - 20

// Append the SVG wrapper to the page, set its height and width, 
// and create a group element shifted to accomodate the svg margins
var svg = d3.select('#svg-area')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

let barGroup = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

// Selects all rectangles currently on the page - which is none - 
// and binds our dataset to them. If there are no rectangles, 
// it will append one for each piece of data.
barGroup.selectAll("rect")
  .data(booksReadThisYear)
  .join("rect")
  .attr("width", barWidth)
  .attr("height", d => d * 10)
  .attr("x", (d, i) => i * (barWidth+20))
  .attr("y", d => height - d * 10)
  .attr("class", "bar");

var textGroup = svg.append("g")
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

textGroup.selectAll("text")
  .data(booksReadThisYear)
  .join("text")
  .attr("x", (d, i) => (i*(barWidth+20))+(barWidth-20)/2)
  .attr("y", d => (height-10) - d * 10)
  .text(d => d)
  .attr("font-family", "sans-serif")
  .attr("font-size", "20px")
  .attr("font-weight", "700")
  .attr("fill", "red");
