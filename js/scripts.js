$(document).ready(function() {

/* Видео */
$(".video_wrapper").click(function () {
    var a = $(this).attr("data-youtube");
    $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  class="video_testimonial" allowfullscreen></iframe>')
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