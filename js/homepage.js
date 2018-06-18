(function($) {
    
    function runSlider(){
         $('#main-slider').flexslider({
            animation: "slide",
            directionNav: false,
            drag: true
          });
         $('#main-mobile-slider').flexslider({
            animation: "slide",
            directionNav: false,
            drag: true
          });
        $('#product-detail-slider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 210,
            itemMargin: 25,
            minItems: 2,
            maxItems: 4,
            move: 1,
            slideshowSpeed: 5000,
            controlNav: false,
            pauseOnAction: true,
            pauseOnHover: true,
            drag: true
          });
        $('#product-list-slider').flexslider({
            animation: "slide",
            directionNav: false,
            drag: true
          });
        $('.customer-reviews-slider').flexslider({
            animation: "slide",
            directionNav: false,
            drag: true
          });
    }
    /* ----------------------------------------------- */
    /* ------------- FrontEnd Functions -------------- */
    /* ----------------------------------------------- */

    /* OnLoad Page */
    $(document).ready(function($) {
        runSlider();

    });

    /* OnLoad Window */
    var init = function() {

    };
    window.onload = init;
})(jQuery);