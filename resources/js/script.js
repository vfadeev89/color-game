const scrollSpeed = 1000;

$(document).ready(function () {
    setupMobileNav();
    setupStickyNav();
    setupScrollOnButtons();
    setupScrollOnAnchors();
    setupAnimations();
});

function setupMobileNav() {
    $('.js--nav-icon').click(function (event) {
        event.preventDefault();
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        icon.toggleClass('icon ion-md-menu');
        icon.toggleClass('icon ion-md-close');
    })
}

function setupStickyNav() {
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

function setupAnimations() {
    $('.js--waypoint-1').waypoint(function () {
        $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    $('.js--waypoint-2').waypoint(function () {
        $('.js--waypoint-2').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    $('.js--waypoint-3').waypoint(function () {
        $('.js--waypoint-3').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    $('.js--waypoint-4').waypoint(function () {
        $('.js--waypoint-4').addClass('animated tada');
    }, {
        offset: '50%'
    });
}