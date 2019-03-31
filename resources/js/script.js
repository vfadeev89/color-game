const scrollSpeed = 1000;

$(document).ready(function () {
    setupStickyNavigation();
    setupScrollOnButtons();
    setupScrollOnAnchors();
});

function setupStickyNavigation() {
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
}

function setupScrollOnButtons() {
    $('.js--scroll-to-plans').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, scrollSpeed);
    });
    $('.js--scroll-to-start').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, scrollSpeed);
    });
}

function setupScrollOnAnchors() {
    $('a[href^="#"]').click(function (event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, scrollSpeed);
        }
    });
}