function init() {

  var markers = [
    {
      locationName: 'Estadio Azteca',
      lat1: 19.3029,
      lng1: -99.1505,
      address1: '10 W Calz. de Tlalpan 3465, Sta. Úrsula Coapa, Coyoacán, 04650 Ciudad de México, CDMX, Mexico St,',
      
      locationName: 'Estadio Akron',
      lat2: 20.681667,
      lng2:  -103.462778,
      address2: 'Cto. J.V.C. 2800, El Bajío, 45014 Zapopan, Jal., MexicoCircuito JVC 2800, Zapopan, Jalisco, 45019, Mexico'
      
    }
  ];

  var MapCord = { lat: 19.3029, lng: -99.1505 }

  var mapOptions = {
    center: MapCord,
    zoom: 17,
    disableDefaultUI: true,
    zoomControl: true,
  }

  var map = new google.maps.Map(document.getElementById('Map'), mapOptions);

  var Azteca = new google.maps.Marker({
    position: { lat: markers[0]['lat1'], lng: markers[0]['lng1'] },
    map: map,
  });
  var Akron = new google.maps.Marker({
    position: { lat: markers[0]['lat2'], lng: markers[0]['lng2'] },
    map: map,
  });

  // use custom images from the `images/` folder for the markers
  Azteca.setIcon({
    url: 'images/america pin.jpg',
    scaledSize: new google.maps.Size(40, 40),
    anchor: new google.maps.Point(20, 40)
  });

  Akron.setIcon({
    url: 'images/chivas pin.webp',
    scaledSize: new google.maps.Size(40, 40),
    anchor: new google.maps.Point(20, 40)
  });

  var alertbox = document.getElementById("button").addEventListener("click", popup);

  function popup() {
    alert("If you have questions, contact me at: jVazquez19@hawk.illinoistech.edu");
    document.getElementById
  }

}


window.addEventListener('load', init);