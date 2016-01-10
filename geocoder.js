var GoogleMapsAPI = require('googlemaps');
var fs = require("fs");
var _ = require("underscore")

var publicConfig = {
    key: 'AIzaSyAktwD2RM37R9ywronzHZ6BgtluHOj4QYs',
    stagger_time: 1000, // for elevationPath
    encode_polylines: false,
    secure: true, // use https
    // proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);


// geocode API
var geoCodeIntersection = function(int) {
    if (int.length !== 2)
        return
    var query = int[0].toString() + " and " + int[1].toString() + " Kingston ON"
    var geocodeParams = {
        "address": query,
        // "components": "components=country:GB",
        // "bounds":     "55,-1|54,1",
        "language": "en",
        // "region":     "uk"
    };
    gmAPI.geocode(geocodeParams, function(err, result) {
        // console.log(result)
        if (!err) {
            console.log(result.results[0].geometry.location)
            coords.push(result.results[0].geometry.location)
        } else
            console.log(err)
    });
}

// 


var data = fs.readFileSync('Street-harassment-intersections.csv').toString();
var coords = []

function parseCSV(str) {
    return _.reduce(str.split("\n"), function(table, row) {
        table.push(_.map(row.split(","), function(c) {
            return c.trim()
        }));
        return table;
    }, []);
};

var intersections = parseCSV(data)
    // console.log(intersections[3])
_.forEach(intersections, geoCodeIntersection)

console.log(coords)
