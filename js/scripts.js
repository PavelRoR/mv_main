$(document).ready(function() {
    // $("#main_slider").owlCarousel({
    //     autoPlay : 3000,
    //     stopOnHover : true,
    //     navigation:true,
    //     paginationSpeed : 1000,
    //     goToFirstSpeed : 2000,
    //     Item : 3,
    //     autoHeight : true,
    //     transitionStyle:"fade"
    // });
/* Видео */
$(".video_wrapper").click(function () {
    var a = $(this).attr("data-youtube");
    $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  class="video_testimonial" allowfullscreen></iframe>')
});
$(".about_esoteric_title").click(function () {
    var a = $(this).next().attr("data-youtube");
    $(this).next().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>')
});
/*Конец документа*/
});