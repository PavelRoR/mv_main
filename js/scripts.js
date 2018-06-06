$(document).ready(function() {
    $("#main_slider").lightSlider({
        item: 2,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 20,
        mode: "slide",
        useCSS: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        controls: false,
        easing: 'linear', //'for jquery animation',////
        speed: 2000, //ms'
        auto: false,
        loop: false,
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
        // slideMargin: 60,
        mode: "slide",
        useCSS: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        // easing: 'linear',
        controls: true,
        prevHtml: '&larr;',
        nextHtml: '&rarr;',
        speed: 1000, //ms'
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
        // swipeThreshold: 40,
    });
    $("#last_posts_slider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, 
        // slideMargin: 60,
        mode: "slide",
        useCSS: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        // easing: 'linear',
        controls: true,
        prevHtml: '&larr;',
        nextHtml: '&rarr;',
        speed: 1000, //ms'
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
        // swipeThreshold: 40,
    });

/* Видео */
$("#about_eso_video_container ").click(function () {
    var a = $('.video_wrapper',this).attr("data-youtube");
    $('.video_wrapper',this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  class="video_testimonial" allowfullscreen></iframe>').css("z-index","19");
});
$(".about_esoteric_title").click(function () {
    var a = $(this).next().attr("data-youtube");
    $(this).next().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>')
});

/*FAQ*/ 
$('.faq_container').on('click', function(){
        var a = $('.faq_title span', this);
        // $('.faq_title span').text('+');
        // $('.faq_content').slideUp(500);
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