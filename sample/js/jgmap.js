function asd(){
  alert("asd");
}
$(document).ready(function(){
  $("#search-map").Gmap({
    show_points: {
      dragend: null,
      lat: "lat",
      lng: "lng",
      infowindow: "infowindow",
      marker: {
        icon: "icon",
        shadow: "shadow",
        options: {
          draggable: false
        },
        dragend: null
      },
      infowindow_options: {
        disableAutoPan: false
      },
      autofit: false,
      icon:{
        src: "http://maps.google.com/mapfiles/ms/micons/purple.png",
        //shadow: "http://maps.google.com/mapfiles/ms/micons/pushpin_shadow.png"
      },
      group_markers: true,
      markermanager_options:{
        icon: {
          src: "http://maps.google.com/mapfiles/ms/micons/partly_cloudy.png",
          shadow: "http://maps.google.com/mapfiles/ms/micons/partly_cloudy.shadow.png"
        },
        cell: {
          width: 48,
          height: 96
        }
      }
    },

    geocoder: {
      clarification: "Petersburg",
      target: "search_id",
      //bounds: {sw: [37, 40], ne: [80, 140]},
      country: "RU",
      language: "ru",
      success: {
        zoom : 8
      },
      auto: "onkeyup",
      delay: 3000,
      icon: {
        src: "http://maps.google.com/mapfiles/ms/micons/question.png",
        //shadow: "http://maps.google.com/mapfiles/ms/micons/question.shadow.png"
      },
      track_coordinates:{
        lat: "lat",
        lng: "lng",
        accuracy: "accuracy",
        infowindow: "Вроде бы это здесь...",
        marker_options: {
          draggable: true
        }
      }
    },

    initial:{
      draggable: true,
      zoom: 14,
      center: [59.92932701990811, 30.35871306674805],
      mapTypeControl : true,
      scaleControl: true,
      min_zoom: 20
    }
  });

});