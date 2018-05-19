var park = {lat: 44.9398, lng: -93.2533};
var map;

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