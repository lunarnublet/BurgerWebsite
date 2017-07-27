var burgers = {}

burgers.initMap = function() {
    burgers.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 40.766246, lng: -111.8908555},
    });

    // if (navigator.geolocation) {

    // }
}