var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 44.9398, lng: -93.2533},
  		zoom: 15
	});
}