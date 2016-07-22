

function create_map_latlng(id, lat, lng, zoom) {
    var myOptions = {
        zoom: zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(lat, lng)
    }
    var map = new google.maps.Map(document.getElementById(id), myOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lng),
        icon: 'http://static.navystavke.ru/newassets/imgs/icons/page-contacts/map-marker.png',
        title: 'БП «Кожевники»'
    });
    return map;
}

$(function () {
    var map = create_map_latlng ('map', 55.720427, 37.646722, 15);
})