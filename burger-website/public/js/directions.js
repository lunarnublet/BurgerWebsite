var burgers = {}

burgers.initMap = function() {
    burgers.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 40.6448081, lng: -111.8475633 },
        zoomControl: true
    });

    // if (navigator.geolocation) {

    // }
}