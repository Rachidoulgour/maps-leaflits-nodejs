const map=L.map('map-template').setView([39.4840108, -0.7532808999999999], 13);

const socket = io();

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', event=>{
    const coords = [event.latlng.lat, event.latlng.lng];
    const marker=L.marker(coords).bindPopup('Estás aquí');
    marker.addTo(map);
})

const marker=L.marker([39.4840108, -0.7532808999999999]).bindPopup('Estás aquí');
marker.addTo(map);