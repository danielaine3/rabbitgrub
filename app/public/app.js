window.lat = 44.9398;
window.lng = -93.2533;
var map;
var marker; 
var lineCoords = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat:lat, lng:lng}, 
  		zoom: 15
	});
	marker = new google.maps.Marker({
		position:{lat:lat, lng:lng},
		map:map
	});
};

var redraw = function(payload) {
    lat = payload.message.lat;
    lng = payload.message.lng;
    map.setCenter({lat:lat, lng:lng, alt:0});
    marker.setPosition({lat:lat, lng:lng, alt:0});

  lineCoords.push(new google.maps.LatLng(lat, lng));

    var lineCoordinatesPath = new google.maps.Polyline({
    path: lineCoords,
    geodesic: true,
    strokeColor: '#2E10FF'
    });

    lineCoordinatesPath.setMap(map);
};

var pnChannel = "map-channel";
var pubnub = new PubNub({
  publishKey:   'pub-c-47103c0c-b922-4ebd-ba7b-bd170efb6843',
  subscribeKey: 'sub-c-a6c6a3b8-70c2-11e8-80d3-e2460f47e7ae'
});

pubnub.subscribe({channels: [pnChannel]});
pubnub.addListener({message:redraw});

setInterval(function() {
    pubnub.publish({channel:pnChannel, message:{lat:window.lat + 0.000, lng:window.lng + 0.000001}});
}, 
5000);

initMap();
