window.lat = 44.9398;
window.lng = -93.2533;
function circlePoint(time) {
  var radius = 0.01;
  var x = Math.cos(time) * radius;
  var y = Math.sin(time) * radius;
  return {lat:window.lat + y, lng:window.lng + x};
};

var map;
var lineCoords = [];

var pubnub = new PubNub({
    publishKey:   'pub-c-47103c0c-b922-4ebd-ba7b-bd170efb6843',
    subscribeKey: 'sub-c-a6c6a3b8-70c2-11e8-80d3-e2460f47e7ae'
  });

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat:late, lng:lng}, 
  		zoom: 15
	});
	var marker = new google.maps.Marker({
		position:{lat:lat, lng:lng},
		map:map
	});
};
initMap();

var redraw = function(payload) {
    lat = payload.message.lat;
    lng = payload.message.lng;
    map.setCenter({lat:lat, lng:lng, alt:0});
    marker.setPosition({lat:lat, lng:lng, alt:0});
  };

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
    pubnub.publish({channel:pnChannel, message:circlePoint(new Date().getTime()/1000)});
  }, 500);

var caleandar;
var events = [
	{'Date': new Date(2018, 4, 19), 'Title': 'Powderhorn Shark Tank Final', 'Link': 'https://www.facebook.com/events/161369324497953/'},
];

var settings = {
    Color: 'black',
    LinkColor: 'teal',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: false,
    DisabledDays: [],
    ModelChange: '',
};

var element = document.getElementById('caleandar');

caleandar(element, events, settings);