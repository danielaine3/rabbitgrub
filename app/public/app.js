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
}

// var park1 = {lat: 44.9398, lng: -93.2533};
// var map1;
// function initMap() {
// 	map1 = new google.maps.Map(document.getElementById('map1'), {
//   		center: park1,
//   		zoom: 15
// 	});
// 	var marker1 = new google.maps.Marker({
// 		position:park1,
// 		map:map1
// 	});
// }
