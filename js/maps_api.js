'use strict';

function initMap() {
    const center = new google.maps.LatLng(40.6775, -73.9224);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "a832e5cd995214a4",
        zoom: 12,
        center: center,
      
    });

    const imgMarker = './assets/img/Pin.png';
    new google.maps.Marker({
        position: center,
        icon: imgMarker,
        map: map,
        opacity: 0.7,
        width: '12px'
    });
}

window.initMap = initMap;


