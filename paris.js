var map = L.map('map').setView([48.8567, 2.3508], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    // id: 'mapbox.pencil',
    accessToken: 'pk.eyJ1IjoibWF4Yml0dGtlciIsImEiOiJjaWhmZTBjbmswbTgxdjVrbHN5aWtpd3ptIn0.9p2cAfwVJKTkFamnfaT7eA'
}).addTo(map);



var marker = L.marker([48.85, 2.33],{opacity: 0.5}).addTo(map);
var marker = L.marker([48.86, 2.35],{opacity: 0.5}).addTo(map);
var marker = L.marker([48.87, 2.32],{opacity: 0.5}).addTo(map);
var marker = L.marker([48.863, 2.37],{opacity: 0.5}).addTo(map);
var marker = L.marker([48.85, 2.36],{opacity: 1.0}).addTo(map);
