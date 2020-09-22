// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// Use a for loop to iterate through the movie scores
for (var i = 0; i < movieScores.length; i++) {

  // Add each score to the ratings count
  var score = movieScores[i];
  sum += score;

  // If the movie's rating is greater than 7, add it to the list of good movies
  if (score > 7) {
    goodMovieScores.push(score);
  }
  // If the movie's rating is between 5 and 7, add it to the list of "Ok" movies
  else if (score <= 7 && score > 5) {
    okMovieScores.push(score);
  }
  // Otherwise, if the movie's rating is less than or equal to 5, add it to the list of bad movies
  else {
    badMovieScores.push(score);
  }
}

// Find the average score
var avg = sum / movieScores.length;

// Store the length of movie ratings
var numGoodMovies = goodMovieScores.length;
var numOkMovies = okMovieScores.length;
var numBadMovies = badMovieScores.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");

// ES6
// Starting a rating count
let sum2 = 0;

// Arrays to hold movie scores
const goodMovieScores2 = [];
const okMovieScores2 = [];
const badMovieScores2 = [];

movieScores.forEach(score => {
  sum2 += score;
  score > 7 ? goodMovieScores2.push(score) : score > 5 ? okMovieScores2.push(score) : badMovieScores2.push(score)
});

// Find the average score
avg = sum2 / movieScores.length;

// Store the length of movie ratings
numGoodMovies = goodMovieScores2.length;
numOkMovies = okMovieScores2.length;
numBadMovies = badMovieScores2.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");