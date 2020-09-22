d3.select("#click-me").style("display", "none")

let inputField = d3.select("#input-field");

const giphyme = (q) => new Promise ((resolve,reject) => {
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=U9UoFTIAxsZx8cTEz0CSQ7zXbJqQag3Y&tag=${q}&rating=pg`)
    .then(response => {
        if(!response.ok){
            reject(response)
        } 
        return response.json()
    }).then(data => resolve(data.data))
});

inputField.on("change", () => {
    let query = d3.event.target.value;
    giphyme(query).then(url => {
        d3.select(".giphy-me").html(`<iframe src="${url.embed_url}" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/showtime-season-1-comedy-3o6fIXsUZ1jAxaz4kM">via GIPHY</a></p>`);
    });
});