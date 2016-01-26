
  var googleObj = {};
  var map;

  var styleArray = [
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#333739"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -7
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -28
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "visibility": "on"
          },
          {
              "lightness": -15
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -18
          }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -34
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#333739"
          },
          {
              "weight": 0.8
          }
      ]
  },
  {
      "featureType": "poi.park",
      "stylers": [
          {
              "color": "#2ecc71"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#333739"
          },
          {
              "weight": 0.3
          },
          {
              "lightness": 10
          }
      ]
  }
  ];
  var initMap = function(center) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      styles: styleArray,
      zoom: 10
    });
  }

var createMarkers = function(obj) {
    var marker = new google.maps.Marker({
      position: {lat: obj.latitude, lng: obj.longitude},
      map: map,
      title: obj.name
    });
  }
