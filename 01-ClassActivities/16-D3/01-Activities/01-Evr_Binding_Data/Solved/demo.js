// 1-.each()
d3.select("ul").selectAll("li");

d3.select("ul").selectAll("li")
    .each(function(d, i) {
      console.log("element", this);
      console.log("data", d);
      console.log("index", i);
    });


// 2-.data()
// Access elements' data
// returns an array of undefined items
console.log(d3.select("ul").selectAll("li").data());

// Assign data to elements in the selector object
// not enough
var arr = [50, 55];
console.log(d3.select("ul").selectAll("li").data(arr));
console.log(d3.select("ul").selectAll("li").data());

// just right
var arr = [50, 55, 53];
console.log(d3.select("ul").selectAll("li").data(arr));
console.log(d3.select("ul").selectAll("li").data());

// too many
var arr = [50, 55, 53, 56, 68];
console.log(d3.select("ul").selectAll("li").data(arr));
console.log(d3.select("ul").selectAll("li").data());

// trying to reassign with not enough
var arr = [1, 2];
console.log(d3.select("ul").selectAll("li").data(arr));
console.log(d3.select("ul").selectAll("li").data());


// 3-Multiple Methods
var arr = [50, 55, 53];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(d => d);

// Modify the returned data
d3.select("ul").selectAll("li")
    .data(arr)
    .text(d => d + 1000);

// 4-.enter()
// New data points are ignored here
var arr = [50, 55, 53, 56, 68];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(d => d);

// append affects existing elements = FAIL!
var arr = [50, 55, 53, 56, 68];
d3.select("ul").selectAll("li")
    .data(arr)
    .append("li")
    .text(d => d);

// Use `enter` to create new elements
var arr = [50, 55, 53, 56, 68];

// First, update existing elements
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .text(d => d);

// Second, create new elements for extra data points
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .enter()
    .append("li")
    .text(d => d);


// 5-.exit()
// Finally, what if we remove an item?
var arr = [50, 55];
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .exit()
    .remove();
