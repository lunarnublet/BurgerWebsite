var burgers = {}

burgers.initMap = function() {
    var myLatLng = {lat: 40.766246, lng: -111.8908555};

    burgers.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: burgers.map,
        title: 'Express Burger'
    });

    // if (navigator.geolocation) {

        // }
}
