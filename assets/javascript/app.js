$(document).ready(function () {
    //Scroll Navigator
    $('.nav-item, #contactBtn, #aboutBtn').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1200);

        $('.navbar-collapse').collapse('hide');
    });

    $(".navbar-brand").on('click', function (event) {
        event.preventDefault();
    });
});


