var park = {lat: 44.9398, lng: -93.2533};
var map;

var pubnub = new PubNub({
    publishKey:   'pub-c-47103c0c-b922-4ebd-ba7b-bd170efb6843',
    subscribeKey: 'sub-c-a6c6a3b8-70c2-11e8-80d3-e2460f47e7ae'
  });

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: park,
  		zoom: 15
	});
	var marker = new google.maps.Marker({
		position:park,
		map:map
	});
};
initMap();

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