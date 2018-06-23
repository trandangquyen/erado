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
    // Function to scroll to top on click arrow button event
    function scrollTop() {
        $(function() {
            // scroll body to 0px on click
            $('#scroll-top').click(function(e) {
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    }
    function toggleMenuLeftSide(){
        $('#collapse-left-menu').click(function(){
            $(this).parent().toggleClass('active');
        });
    }
    function showToolTipMenu(){
        var tip;
        $('a[title]').mouseover(function(e) {

            tip = $(this).attr('title');
            $(this).attr('title','');
            $('.tooltip').show().children('.tipBody').html( tip );

        }).mousemove(function(e) {

            $('.tooltip').css('top', e.pageY + 10 );
            $('.tooltip').css('left', e.pageX - 100 );

        }).mouseout(function(e) {
            $('.tooltip').hide();
            $(this).attr( 'title', tip );
        });
        
    }
    /* ----------------------------------------------- */
    /* ------------- FrontEnd Functions -------------- */
    /* ----------------------------------------------- */

    /* OnLoad Page */
    $(document).ready(function($) {
        scrollTop();
        runSlider();
        toggleMenuLeftSide();
        showToolTipMenu();
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

})(jQuery);