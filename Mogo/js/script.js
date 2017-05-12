"use strict";
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });



}
$(document).ready(function(){
    $('#myModal').on('shown.bs.modal', function () {
        initMap();
    

})
    var img = document.getElementById('service_img');
    img.onload = function(){
        
        var accordion = document.getElementById('collapseOne');
        if (accordion.classList.contains("in")) {
            var elem_child = accordion.childNodes[1];
            elem_child.style.height = (img.height - 170)+"px";
        }
   
}
});