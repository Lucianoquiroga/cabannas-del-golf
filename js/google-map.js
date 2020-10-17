
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(-30.988778, -64.480949);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    var marker2 = new google.maps.Marker({
        position: {lat: -30.988778, lng: -64.480949},
        icon: "images/maps-and-flags-blue.png",
        draggable: false
    });

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    
    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    marker2.setMap(map);
    //marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    
    var key = "KEY";
    
    var addresses = "Jerónimo Luis De Cabrera 67, X5000GVB Córdoba";

    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addresses+'&sensor=false&key='+key, null, function (data) {
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        new google.maps.Marker({
            position: latlng,
            map: map,
            icon: 'images',
        });
    });
    
}
google.maps.event.addDomListener(window, 'load', init);