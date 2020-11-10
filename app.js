var mymap = L.map('mapid').setView([ 7.969178, -80.438886], 13);

const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tilesProvider, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="openstreetmap.org/">openstreetmap</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

var marker = L.marker([7.969178, -80.438886]).addTo(mymap);