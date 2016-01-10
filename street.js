var map = L.map('map').setView([44.23, -76.49], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    // id: 'mapbox.pencil',
    accessToken: 'pk.eyJ1IjoibWF4Yml0dGtlciIsImEiOiJjaWhmZTBjbmswbTgxdjVrbHN5aWtpd3ptIn0.9p2cAfwVJKTkFamnfaT7eA'
}).addTo(map);


var incidints = [
    [44.2298765, -76.4956382],
    [44.2318487, -76.4842244],
    [44.2326238, -76.4957187],
    [44.2311717, -76.4859544],
    [44.2311717, -76.4859544],
    [44.2298765, -76.4956382],
    [44.2279145, -76.4956081],
    [44.23449950000001, -76.4957039],
    [44.2316917, -76.4956918],
    [44.2298602, -76.49697929999999],
    [44.2311717, -76.4859544],
    [44.2279145, -76.4956081],
    [44.23449950000001, -76.4957039],
    [44.2312862, -76.4930096],
    [44.2333764, -76.49573869999999],
    [44.228634, -76.50151939999999],
    [44.2313497, -76.4809839],
    [44.2334541, -76.4930981],
    [44.2316917, -76.4956918],
    [44.2273174, -76.4997688],
    [44.2326238, -76.4957187],
    [44.2352529, -76.4975345],
    [44.2316917, -76.4956918],
    [44.2326238, -76.4957187],
    [44.2333764, -76.49573869999999],
    [44.2326238, -76.4957187],
    [44.2315668, -76.5002006],
    [44.2250744, -76.4956292],
    [44.2298765, -76.4956382],
    [44.22439199999999, -76.49962130000002],
    [44.2312862, -76.4930096],
    [44.2334541, -76.4930981],
    [44.2325854, -76.4890641],
    [44.2334541, -76.4930981],
    [44.2279145, -76.4956081],
    [44.2358371, -76.49369089999999],
    [44.2312862, -76.4930096],
    [44.2334541, -76.4930981],
    [44.2278652, -76.4967942],
    [44.2310092, -76.4911674],
    [44.2334541, -76.4930981],
    [44.2298602, -76.49697929999999],
    [44.2318487, -76.4842244],
    [44.2298044, -76.4944768],
    [44.2328506, -76.4908102],
    [44.2279145, -76.4956081],
    [44.2250744, -76.4956292],
    [44.23449950000001, -76.4957039],
    [44.2316648, -76.4892948],
    [44.2298092, -76.4985029],
    [44.2316917, -76.4956918],
    [44.2316917, -76.4956918],
    [44.2246611, -76.5012145],
    [44.2315668, -76.5002006],
    [44.2297592, -76.5000309],
    [44.2359082, -76.49910090000002],
    [44.2334541, -76.4930981],
    [44.2279145, -76.4956081],
    [44.2298044, -76.4944768],
    [44.2297103, -76.4930418],
    [44.23148800000001, -76.5027916],
    [44.2298765, -76.4956382],
    [44.2321905, -76.4927816],
    [44.2326238, -76.4957187],
    [44.2312862, -76.4930096],
    [44.2316917, -76.4956918],
    [44.2297064, -76.5016249],
    [44.2316917, -76.4956918],
    [44.2315668, -76.5002006],
    [44.2325133, -76.51003349999999],
    [44.2312862, -76.4930096],
    [44.2237039, -76.49959179999999],
    [44.23449950000001, -76.4957039],
    [44.2273174, -76.4997688],
    [44.2279145, -76.4956081],
    [44.2298765, -76.4956382],
    [44.2319329, -76.49105469999999],
    [44.2316648, -76.4892948],
    [44.2316917, -76.4956918],
    [44.2334541, -76.4930981],
    [44.2334541, -76.4930981],
    [44.2334541, -76.4930981],
    [44.232866, -76.49881119999999],
    [44.2334541, -76.4930981],
    [44.2441312, -76.51106779999999],
    [44.2311717, -76.4859544],
    [44.23449950000001, -76.4957039],
    [44.2314803, -76.4943025],
    [44.2326238, -76.4957187],
    [44.2298765, -76.4956382],
    [44.2298602, -76.49697929999999],
    [44.22439199999999, -76.49962130000002],
    [44.2295277, -76.4910275],
    [44.2279145, -76.4956081],
    [44.2290292, -76.49561800000001],
    [44.2313881, -76.50594319999999],
    [44.2297103, -76.4930418],
    [44.2328295, -76.50033739999999],
    [44.2326238, -76.4957187],
    [44.2326238, -76.4957187],
    [44.2306213, -76.494399],
    [44.2327891, -76.5028614],
    [44.2583257, -76.5439153],
    [44.2334541, -76.4930981],
    [44.2297103, -76.4930418],
    [44.2306213, -76.494399],
    [44.2316917, -76.4956918],
    [44.2334541, -76.4930981],
    [44.23449950000001, -76.4957039],
    [44.2314803, -76.4943025],
    [44.2326238, -76.4957187],
    [44.2298092, -76.4985029],
    [44.2329352, -76.48533309999999],
    [44.2311717, -76.4859544],
    [44.2316917, -76.4956918],
    [44.2312862, -76.4930096],
    [44.2328506, -76.4908102],
    [44.2365678, -76.50069359999999],
    [44.2306213, -76.494399],
    [44.2326238, -76.4957187],
    [44.2306674, -76.5001121],
    [44.2334541, -76.4930981],
    [44.2321905, -76.4927816],
    [44.2298765, -76.4956382],
    [44.2321905, -76.4927816],
    [44.2328737, -76.4972945],
    [44.2298765, -76.4956382],
    [44.2329352, -76.48533309999999],
    [44.2334541, -76.4930981],
    [44.2315668, -76.5002006],
    [44.2306575, -76.4956807],
    [44.2306674, -76.5001121],
    [44.2298765, -76.4956382],
    [44.2298765, -76.4956382],
    [44.2334541, -76.4930981],
    [44.2326238, -76.4957187],
    [44.2583257, -76.5439153],
    [44.2302388, -76.4910945],
    [44.2313881, -76.50594319999999],
    [44.2312862, -76.4930096],
    [44.2316917, -76.4956918],
    [44.2312862, -76.4930096],
    [44.23449950000001, -76.4957039],
    [44.2316917, -76.4956918],
    [44.2328295, -76.50033739999999],
    [44.2334541, -76.4930981],
    [44.2298092, -76.4985029],
    [44.23449950000001, -76.4957039],
    [44.2325854, -76.4890641],
    [44.2326238, -76.4957187],
    [44.2334541, -76.4930981],
    [44.2316917, -76.4956918],
    [44.2312862, -76.4930096],
    [44.2279145, -76.4956081],
    [44.2334541, -76.4930981],
    [44.2298765, -76.4956382],
    [44.23449950000001, -76.4957039],
    [44.2365678, -76.50069359999999],
    [44.2328506, -76.4908102],
    [44.2297103, -76.4930418],
    [44.2279145, -76.4956081],
    [44.2298765, -76.4956382],
    [44.2326238, -76.4957187],
    [44.2312862, -76.4930096],
    [44.2297592, -76.5000309],
    [44.2312862, -76.4930096],
    [44.2326238, -76.4957187],
    [44.2328737, -76.4972945],
    [44.2311717, -76.4859544],
    [44.2321905, -76.4927816],
    [44.2310092, -76.4911674],
    [44.2267677, -76.5025234],
    [44.2298765, -76.4956382],
    [44.2311717, -76.4859544],
    [44.2334541, -76.4930981],
    [44.2314803, -76.4943025],
    [44.2582518, -76.5673578],
    [44.2328737, -76.4972945],
    [44.2311717, -76.4859544],
    [44.2326238, -76.4957187],
    [44.2334541, -76.4930981],
    [44.2298044, -76.4944768],
    [44.2334541, -76.4930981],
    [44.2334541, -76.4930981],
    [44.2334541, -76.4930981],
    [44.2321905, -76.4927816],
    [44.2316917, -76.4956918],
    [44.2321905, -76.4927816],
    [44.2342036, -76.4974245],
    [44.2297103, -76.4930418],
    [44.2298044, -76.4944768],
    [44.2298765, -76.4956382],
    [44.2326238, -76.4957187],
    [44.2326238, -76.4957187],
    [44.2318487, -76.4842244],
    [44.2306213, -76.494399],
    [44.2326238, -76.4957187],
    [44.2316917, -76.4956918],
    [44.2311717, -76.4859544],
    [44.2297103, -76.4930418],
    [44.2321905, -76.4927816],
    [44.2333764, -76.49573869999999],
    [44.2326238, -76.4957187],
    [44.2315668, -76.5002006],
    [44.23449950000001, -76.4957039],
    [44.2583257, -76.5439153],
    [44.2314803, -76.4943025],
    [44.2328506, -76.4908102],
    [44.2319329, -76.49105469999999],
    [44.23449950000001, -76.4957039],
    [44.2315668, -76.5002006],
    [44.2306575, -76.4956807],
    [44.2326238, -76.4957187],
    [44.2334541, -76.4930981],
    [44.2298765, -76.4956382],
    [44.2297064, -76.5016249],
    [44.2315668, -76.5002006],
    [44.2267152, -76.4938468],
    [44.2334541, -76.4930981],
    [44.2270212, -76.50141649999999],
    [44.2352529, -76.4975345],
    [44.23449950000001, -76.4957039],
    [44.2297103, -76.4930418],
    [44.2312862, -76.4930096],
    [44.2326238, -76.4957187],
    [44.2316552, -76.4971644],
    [44.2334541, -76.4930981],
    [44.2319329, -76.49105469999999],
    [44.2334541, -76.4930981],
    [44.2326238, -76.4957187],
    [44.2230043, -76.4950454],
    [44.2298044, -76.4944768],
    [44.2306213, -76.494399],
    [44.2326238, -76.4957187],
    [44.2326238, -76.4957187],
    [44.2358371, -76.49369089999999],
    [44.2326238, -76.4957187],
    [44.2582518, -76.5673578],
    [44.2285648, -76.48653209999999],
    [44.2312862, -76.4930096],
    [44.2321905, -76.4927816],
    [44.2314803, -76.4943025],
    [44.2334541, -76.4930981],
    [44.2325133, -76.51003349999999],
    [44.2316917, -76.4956918],
    [44.2326238, -76.4957187],
    [44.2340863, -76.4932658],
    [44.23449950000001, -76.4957039],
    [44.2325854, -76.4890641]
]
var jittered = []
var factor = 1200
for (var i = 0; i < incidints.length; i++) {
    jittered.push([incidints[i][0] + ((Math.random() - .5) / factor),
        incidints[i][1] + ((Math.random() - .5) / factor)
    ])
}

// var redMarker = L.AwesomeMarkers.icon({
//     icon: 'flash',
//     prefix: 'fa',
//     markerColor: 'red'
// });

// incidints.forEach(function(inc) {
//     var marker = L.marker([inc[0] + ((Math.random() - .5) / 500),
//      inc[1] + ((Math.random() - .5) / 500)], {
//         opacity: 1,
//         icon: redMarker
//     }).addTo(map);
// })

var heat = L.heatLayer(jittered, {
    radius: 25
}).addTo(map);
