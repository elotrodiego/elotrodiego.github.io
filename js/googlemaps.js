var divMapa = document.getElementById('mapa');
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);

function fn_mal() { }

function fn_ok(rta) {
    var lat = rta.coords.latitude;
    var lon = rta.coords.longitude;

    var gLatLon = new google.maps.LatLng(lat,lon);
    var objConfig = {
        zoom: 17,
        center: gLatLon
    }

    var gMapa = new google.maps.Map(divMapa, objConfig);

    var objConfigMarker = {
        position: gLatLon,
        map: gMapa,
        title: 'Estás aquí.'
    }

    var gMarker = new google.maps.Marker(objConfigMarker);
}