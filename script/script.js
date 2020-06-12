$(window).scroll(function () {
    let height = $(window).scrollTop();
    if (window.innerWidth >= 1020) {
        if (height > 1400) {
            $('.ani').addClass('animated slideOutRight');
            $('#contacts').addClass('animated slideInRight');
        } else {
            $('.ani').removeClass('animated slideOutRight slower');
            $('#contacts').removeClass('animated slideInRight slower');
        }
    }
});
$(window).scroll(function () {
    let heigh = $(window).scrollTop();
    if (heigh > 200) {
        $('.card').addClass('animated flipInY slow');
    } else {

        $('.card').removeClass('animated flipInY slow');
    }
});

