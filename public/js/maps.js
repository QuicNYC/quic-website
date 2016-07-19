/**
 * Created by AngeloZamudio on 7/19/16.
 */
function initialize() {
	var quic = {lat: 40.734278, lng: -73.817094};
	
	var mapOptions = {
		zoom: 11,
		center: quic,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		},
		scrollwheel:  false
	};
	var map = new google.maps.Map(document.getElementById('map'),
		mapOptions);
	
	var styles = [
		{
			"featureType": "landscape",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 65
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "poi",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 51
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.highway",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 30
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "road.local",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 40
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "transit",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"lightness": -25
				},
				{
					"saturation": -100
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#ffff00"
				},
				{
					"lightness": -25
				},
				{
					"saturation": -97
				}
			]
		}
	];

	var styledMap = new google.maps.StyledMapType(styles, {name: "Quic"});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
	// var markerOps = new google.maps.MarkerOptions({
	// 	place: ChIJLU3qSV5gwokR8Asw7ySQ934	
	// })
	
	var marker = new google.maps.Marker({
		position: quic,
		map: map,
		// animation:google.maps.Animation.BOUNCE,
		title: 'Tech Incubator (Queens College)'
	});

	google.maps.event.addListener(marker,'click',function() {
		map.setZoom(17);
		map.setCenter(marker.getPosition());
	});

	

}
