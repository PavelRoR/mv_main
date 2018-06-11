$(document).ready(function () {
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
        rtl: false,
        adaptiveHeight: true,
        vertical: false,
        pager: false,
        gallery: false,
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
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
        rtl: false,
        adaptiveHeight: true,
        vertical: false,
        pager: false,
        gallery: false,
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
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
        rtl: false,
        adaptiveHeight: true,
        vertical: false,
        pager: false,
        gallery: false,
        enableTouch: true,
        enableDrag: true,
        freeMove: true
    });

    /* Видео */
    $("#about_eso_video_container ").click(function () {
        var a = $('.video_wrapper', this).attr("data-youtube");
        $('.video_wrapper', this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  class="video_testimonial" allowfullscreen></iframe>').css("z-index", "19");
    });


    /*FAQ*/
    $('.faq_container').on('click', function () {
        var a = $('.faq_title span', this);
        if (a.text() == '+') {
            a.text('-');
            $('.faq_content', this).slideDown(500);
        } else {
            a.text('+');
            $('.faq_content', this).slideUp(500);

        }
    });
    $(function () {
        var check = $('.check', this),
            email = $('.main_form_email', this),
            button = $('.main_form_button', this);

        $("body").on("submit", ".main_form", function () {
            let check = $('.check', this),
                reNone = /.+/,
                email = $('.main_form_email', this),
                button = $('.main_form_button', this);
            if (!email.val().match(reNone)) {
                email.css("border", "1px solid red");
                button.text('Введите email');
                return false;
            };
            if (!check.prop("checked")) {
                check.next().css("color", "red");
                button.text('Подтвердите соглашение');
                return false;
            };
        });
        email.click(function () {
            email.css("border-color", "rgba(85, 94, 124, .3)");
            button.text('Получить материалы');
        });
        email.keypress(function () {
            email.css("border-color", "rgba(85, 94, 124, .3)");
            button.text('Получить материалы');
        });
        check.click(function () {
            check.next().css("color", "rgba(17, 17, 18, .8)");
            button.text('Получить материалы');
        });
    });
    $(function () {
        $("#menu_icon").on("click", function () {
            if (!$(this).hasClass("clicked")) {
                $(this).addClass("clicked");
                $(".upper_span").addClass("upper_span_opened");
                $(".middle_span").addClass("middle_span_opened");
                $(".lower_span").addClass("lower_span_opened");
                $("#menu_container").delay(300).css({
                    left: "0",
                    transition: "all .65s ease-out"
                })
            } else {
                $(this).delay(300).removeClass("clicked");
                $(".upper_span").removeClass("upper_span_opened");
                $(".middle_span").removeClass("middle_span_opened");
                $(".lower_span").removeClass("lower_span_opened");
                $("#menu_container").css({
                    left: "-999px",
                    transition: "all .65s ease-in-out"
                });
                    $("#menu_icon").delay(300).removeClass("clicked");
                    $(".upper_span").removeClass("upper_span_opened");
                    $(".middle_span").removeClass("middle_span_opened");
                    $(".lower_span").removeClass("lower_span_opened")
            }
        });
    });
    $(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 100) {

					$("#menu_icon").css({"position": "fixed", "top": "33px"});
				
			} else {
				$("#menu_icon").css({"position": "absolute", "top": "0"});
			
			}
		})
	})
    /*Конец документа*/
});