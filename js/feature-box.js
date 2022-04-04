 $(document).ready(function() {
    $('#carouselhAuto').jsCarousel({
    onthumbnailclick: function(src) { /* alert(src);*/  }, 
    autoscroll: true, 
    itemstodisplay: 3, 
    scrollspeed: 800, 
    delay: 3000,  
    orientation: 'h',
    circular: true
    });
    });
