// Store the vote data in an array
const data = [];

// Randomly select an episode number for Star Wars
d3.select(".star-wars").text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
let upvote = d3.select(".upvote"), downvote = d3.select(".downvote");

// Select the counter h1 element
let counter = d3.select(".counter");

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", () => {
  // Select the current count
  let currentCount = parseInt(counter.text());

  // Upvotes should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  counter.text(currentCount);

  // BONUS: Save the vote data
  data.push(["upvote", currentCount]);

  console.log(data);
});

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", () => {
  // Select the current count
  let currentCount = parseInt(counter.text());

  // Downvotes should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  counter.text(currentCount);

  // BONUS: Save the vote data
  data.push(["downvote", currentCount]);

  console.log(data);
});

// Bonus Bonus: use event target in a single function to both downvote and upvote
// let counter = d3.select(".counter");
// let buttons = d3.selectAll("button");
// buttons.on('click', () => {
//   let direction = d3.event.target.id;
//   let currentCount = parseInt(counter.text());
//   direction === 'upvote' ? currentCount += 1 : currentCount -= 1;
//   counter.text(currentCount);
//   data.push([direction, currentCount]);
//   console.log(data);
// });

