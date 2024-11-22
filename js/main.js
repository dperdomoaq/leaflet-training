// first_map.html First map
let map = L.map('mapx').setView([40.693936, -73.853493], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/diegoperdomouf/cm3rti5ns001301ryegxn7ics/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGllZ29wZXJkb21vdWYiLCJhIjoiY20zcXNyY2lmMHJicTJtb2hxYmptbWw3MSJ9.Ea8oXnS-GUzSNx16-hyV3Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20
}).addTo(map);

let home = L.marker([40.696533, -73.715879]).addTo(map);
let gma = L.marker([40.700127, -73.807554]).addTo(map);
let papa = L.marker([40.762626, -73.804619]).addTo(map);
let unc = L.marker([40.694886, -73.847035]).addTo(map);

home.bindPopup("This is where I grew up.").openPopup();
gma.bindPopup("This is where my grandma is from.");
papa.bindPopup("This is where my dad is from.");
unc.bindPopup("This is where my uncles are from");
