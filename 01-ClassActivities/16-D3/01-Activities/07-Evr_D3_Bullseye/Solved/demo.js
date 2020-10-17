// Part 1
// Generating an SVG

let square = 300
var svg = d3.select("body").append("svg");

svg.attr("width", `${square}px`).attr("height", `${square}px`);

// Part 2
// Binding the SVG to data

var circles = svg.selectAll("circle");
let rings = 3;
var rValues = [];
for (let i = 1; i <= rings; i++) {
  rValues.push((square/2)-40*i)  
}

circles.data(rValues)
    .join("circle")
    .attr("cx", square/2)
    .attr("cy", square/2)
    .attr("r", d => d)
    .attr("stroke", "black")
    .attr("stroke-width", "10")
    .attr("fill", "red");
