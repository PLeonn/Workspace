d3.selectAll("button").on("click", () => {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
  console.log(this.id);
});

d3.selectAll("li").on("click", () => {
  // you can select the element just like any other selection
  let listItem = d3.select(this);
  console.log(listItem.style("color"));

  listItem.style("color", "blue");

  let listItemText = listItem.text();
  console.log(listItemText);
});

// to toggle the color from blue and back:
// d3.selectAll("li").on("click", () => {
//   let listItem = d3.select(this);
//   listItem.style("color") === "blue" ? listItem.style("color", "") : listItem.style("color", "blue");
// });
