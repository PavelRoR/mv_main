$(document).ready(function() {
    $("#main_slider").lightSlider({
        item: 2,
        autoWidth: false,
        slideMove: 1, 
        slideMargin: 20,
        mode: "slide",
        useCSS: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        controls: false,
        easing: 'linear', 
        speed: 2000, 
        auto: true,
        loop: true,
        slideEndAnimation: false,
        pause: 5000,
        pauseOnHover: true,
        keyPress: false,
        rtl:false,
        adaptiveHeight:true,
        vertical:false,
        pager: false,
        gallery: false,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
    });
    $("#cir_slider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, 
        mode: "slide",
        useCSS: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        controls: true,
        prevHtml: '&larr;',
        nextHtml: '&rarr;',
        speed: 1000, 
        auto: false,
        loop: false,
        slideEndAnimation: !0,
        pause: 3000,
        pauseOnHover: true,
        keyPress: false,
        rtl:false,
        adaptiveHeight:true,
        vertical:false,
        pager: false,
        gallery: false,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
    $("#last_posts_slider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, 
        mode: "slide",
        useCSS: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        controls: true,
        prevHtml: '&larr;',
        nextHtml: '&rarr;',
        speed: 1000, 
        auto: false,
        loop: false,
        slideEndAnimation: !0,
        pause: 3000,
        pauseOnHover: true,
        keyPress: false,
        rtl:false,
        adaptiveHeight:true,
        vertical:false,
        pager: false,
        gallery: false,
        enableTouch:true,
        enableDrag:true,
        freeMove:true
    });

/* Видео */
$("#about_eso_video_container ").click(function () {
    var a = $('.video_wrapper',this).attr("data-youtube");
    $('.video_wrapper',this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  class="video_testimonial" allowfullscreen></iframe>').css("z-index","19");
});


/*FAQ*/ 
$('.faq_container').on('click', function(){
        var a = $('.faq_title span', this);
    if (a.text() == '+') {
        a.text('-');
        $('.faq_content',this).slideDown(500);
    }
    else {
        a.text('+');
        $('.faq_content',this).slideUp(500);

    }



});


/*Конец документа*/
});