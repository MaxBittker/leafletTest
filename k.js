var map = L.map('map').setView([48.862, 2.3508], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    // id: 'mapbox.pencil',
    accessToken: 'pk.eyJ1IjoibWF4Yml0dGtlciIsImEiOiJjaWhmZTBjbmswbTgxdjVrbHN5aWtpd3ptIn0.9p2cAfwVJKTkFamnfaT7eA'
}).addTo(map);


var BlueMarker = L.AwesomeMarkers.icon({
    icon: 'dot-circle-o',
    prefix: 'fa',
    markerColor: 'blue'
});

// Lilly - Hostel in Marseille/train from Paris to Marseille

// Shane - Near the eiffel tower in his apartment/Sciences Po paris
var marker = L.marker([48.8540763, 2.3283652], {
    opacity: .7,
    icon: BlueMarker

}).addTo(map);
// Charly - Queen’s campus 

// Katarina - train from Paris to London
// var marker = L.marker([48.8537627, 2.3819893], {
//     opacity: 1.0,
//     icon: BlueMarker
// }).addTo(map);

// Candice - dorm room at Aix-Marseille Graduate School of Management
// var marker = L.marker([43.5863647, 5.4226695], {
//     opacity: 1.0,
//     icon: BlueMarker
// }).addTo(map);

// Claire - restaurant in Paris (10 minutes from the restaurant that got shot) 

// Johnathan - Le Gaulois pub in the 6th arrondissement of Paris
var marker = L.marker([48.8518864, 2.3560525], {
    opacity: .7,
    icon: BlueMarker
}).addTo(map);
// var popup = L.popup({
// closeButton: false,
// }).setContent("Johnathan")
// marker.bindPopup(popup).openPopup();


var Attacks = {
    "keys": ["1", "2", "5", "3", "4"],
    "data": {
        "1": {
            "cartodb_id": 1,
            "critical": 0,
            "dead": 4,
            "injured": 11,
            "lats": 48.92445,
            "longs": 2.36016,
            "name": "Stade de France",
            "type_of_attack": "Bombing"
        },
        "2": {
            "cartodb_id": 2,
            "critical": 10,
            "dead": 14,
            "injured": 20,
            "lats": 48.8717,
            "longs": 2.36822,
            "name": "Le Petit Cambodge",
            "type_of_attack": "Shooting"
        },
        "3": {
            "cartodb_id": 3,
            "critical": 7,
            "dead": 80,
            "injured": 11,
            "lats": 48.863,
            "longs": 2.37061,
            "name": "Bataclan",
            "type_of_attack": "Shooting"
        },
        "4": {
            "cartodb_id": 4,
            "critical": 13,
            "dead": 19,
            "injured": 23,
            "lats": 48.8551,
            "longs": 2.38464,
            "name": "Charonne\n",
            "type_of_attack": "Shooting"
        },
        "5": {
            "cartodb_id": 5,
            "critical": 11,
            "dead": 4,
            "injured": 21,
            "lats": 48.86484,
            "longs": 2.37674,
            "name": "Avenue de la République",
            "type_of_attack": "Shooting"
        }
    }
};

var redMarker = L.AwesomeMarkers.icon({
    icon: 'flash',
    prefix: 'fa',
    markerColor: 'red'
});

var popup = L.popup({
    closeButton: false,
}).setContent("La Belle Equipe")

L.marker([51.941196, 4.512291], {
    icon: redMarker
}).addTo(map);
Attacks.keys.forEach(key => {
    var marker = L.marker([Attacks.data[key].lats, Attacks.data[key].longs], {
        opacity: 1,
        icon: redMarker
    }).addTo(map);
    if (key === "4")
        marker.bindPopup(popup).openPopup();

})





//shane eifel tower
//Katarina - belle equipe

//Johnathan 6 arrondissement
