// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 560;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


// Load csv data
d3.csv("NCHS_life_expectancy_at_birth.csv").then(lifeData => {

  console.log(lifeData);

  // cast the data from the csv as numbers
  lifeData.forEach(data => {
    data.year = +data.year;
    data.lifeExpectancy = +data.lifeExpectancy;
  });

  // Create a scale for your independent (x) coordinates
  var xScale = d3.scaleLinear()
    .domain(d3.extent(lifeData, d => d.year))
    .range([0, chartWidth]);

  // Create a scale for your dependent (y) coordinates
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(lifeData, d => d.lifeExpectancy)])
    .range([chartHeight, 0]);

  // create a line generator function and store as a variable
  // use the scale functions for x and y data
  var createLine = d3.line()
    .x(data => xScale(data.year))
    .y(data => yScale(data.lifeExpectancy));

  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.
  svg.append("path")
    .attr("stroke", "black")
    .attr("stroke-width", "1")
    .attr("fill", "none")
    .attr("d", createLine(lifeData));

}).catch(error => console.log(error));
