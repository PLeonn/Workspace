// Creating map object
var myMap = L.map("map", {
  center: [34.000, -117.000],
  zoom: 8
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Load in geojson data
var geoData = "static/data/Median_Household_Income_2016.geojson";

// Grab data with d3
d3.json(geoData).then(data => {

  console.log(data);

  // Create a new choropleth layer
  let geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "MHI2016",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`<strong>Zip Code</strong>: ${feature.properties.ZIP}<br>
        <strong>Median Household Income</strong>:<br>
        ${ feature.properties.MHI2016 ? 
          feature.properties.MHI2016.toLocaleString(undefined,{style:'currency',currency:'USD'}) :
          'unknown'
        }`);
    }
  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "bottomleft" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = `<h1>Median Income</h1>
      <div class="labels">
        <div class="min"> ${limits[0].toLocaleString(undefined,{style:'currency',currency:'USD',maximumSignificantDigits: 3})} </div>
        <div class="max"> ${limits[limits.length - 1].toLocaleString(undefined,{style:'currency',currency:'USD',maximumSignificantDigits: 4})} </div>
      </div>`;

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});
