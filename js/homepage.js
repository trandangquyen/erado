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
        $('#viewed-product-slider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 208,
            itemMargin: 30,
            minItems: 2,
            maxItems: 3,
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
            //  Function Click out site menu-> hide menu

        $.fn.clickOff = function(callback, selfDestroy) {
            var clicked = false;
            var parent = this;
            var destroy = selfDestroy || true;

            parent.click(function() {
                clicked = true;
            });

            $(document).click(function(event) {
                if (!clicked) {
                    callback(parent, event);
                }
                if (destroy) {
                    //parent.clickOff = function() {};
                    //parent.off("click");
                    //$(document).off("click");
                    //parent.off("clickOff");
                };
                clicked = false;
            });
        };
        
        $(".mega-menu-mobile").clickOff(function() {
            $(".mobile-menu-icon").removeClass('active');
            $(".mega-menu-mobile .sub-menu").hide();
            $('#overlay-region').hide();
        });
        $(".mobile-menu-icon").click(function(e){
             e.preventDefault();            
            if($(this).hasClass('active')){
                $(".mega-menu-mobile .sub-menu").hide();
                $('#overlay-region').hide();
                $(this).removeClass('active');
            }else{
                $(this).addClass('active');
                $(".mega-menu-mobile .sub-menu").show();
                $('#overlay-region').show();
            }
            
            
        });

    });

    /* OnLoad Window */
    var init = function() {

    };
    window.onload = init;
})(jQuery);