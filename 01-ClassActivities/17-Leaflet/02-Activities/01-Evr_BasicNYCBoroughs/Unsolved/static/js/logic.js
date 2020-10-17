var map = L.map("map", {
    center: [40.7128, -74.0060],
    zoom: 10
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

var link = "static/data/nyc.geojson";


function chooseColor(borough) {
    switch (borough) {
        case "Brooklyn":
            return "yellow";
        case "Bronx":
            return "red";
        case "Manhattan":
            return "orange";
        case "Queens":
            return "green";
        case "Staten Island":
            return "purple";
        default:
            return "black";
    }
}

d3.json(link).then(data => {
    L.geoJson(data, { 
        style:  function(feature) {
            return {
                color: "white",
                fillColor: chooseColor(feature.properties.borough),
                fillOpacity: 0.5,
                weight: 1
            };
        }, 
        onEachFeature: function(feature, layer) {
            layer.on({
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({ 
                        fillOpacity: 0.5
                    });
                },
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1><hr><h2>"+ feature.properties.borough+"</h2>");
        }
    }).addTo(map);
});