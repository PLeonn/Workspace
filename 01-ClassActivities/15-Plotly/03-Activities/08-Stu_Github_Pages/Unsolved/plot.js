// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/data.json").then((incomingData) => {
  function filterMovieRatings(movie) {
    return movie.imdbRating > 8.9;
  }

  // Use filter() to pass the filterMovieRatings function as its argument

  // Check to make sure your are filtering your movies.

  // Use the map method with the arrow function to return all the filtered movie titles.

  // Use the map method with the arrow function to return all the filtered movie metascores.

  // Check your filtered metascores.

  // Create your trace.

  // Create the data array for our plot

  // Define the plot layout

  // Plot the chart to a div tag with id "bar-plot"

});
