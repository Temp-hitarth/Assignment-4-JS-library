// glide start
const config = {
    type: 'carousel',
    autoplay: 2000,
    perView: 1
}
new Glide('.glide', config).mount();
// glide end


// leaflet start
var map = L.map('map').setView([51.505, -0.09], 13);

// display map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// add marker
var marker = L.marker([51.5, -0.09]).addTo(map);

// user interaction with map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
// leaflet end