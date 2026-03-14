
// Hero Carosol
$('.hero-carosol').slick({
    dots: true,
    dotsClass: 'slick-dots',
    arrows: false,
    infinite: false,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
});
// Flash Sale Carosol
jQuery(document).ready(function($) {
    $(".flash-slider").slick({ 
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<span class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></span>',
        nextArrow: '<span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m647-440-224 224 57 56 320-320-320-320-57 56 224 224h-487v80H647Z"/></svg></span>',
        responsive: [
        {
            breakpoint: 1024, // max-width: 1023.98px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768, // max-width: 767.98px
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    });

// Category Slider
jQuery(document).ready(function($) {
    $(".category-slider").slick({ 
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<span class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></span>',
        nextArrow: '<span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m647-440-224 224 57 56 320-320-320-320-57 56 224 224h-487v80H647Z"/></svg></span>',
        responsive: [
        {
            breakpoint: 768, // max-width: 767.98px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576, // max-width: 575.98px
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    });
// Best Sale Carosol
jQuery(document).ready(function($) {
    $(".best-sell-sliders").slick({ 
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        prevArrow: '<span class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></span>',
        nextArrow: '<span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m647-440-224 224 57 56 320-320-320-320-57 56 224 224h-487v80H647Z"/></svg></span>',
        responsive: [
        {
            breakpoint: 1024, // max-width: 1023.98px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768, // max-width: 767.98px
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    });
    //Our Products Slider
    jQuery(document).ready(function($) {
    $(".our-product-sliders").slick({ 
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<span class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></span>',
        nextArrow: '<span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m647-440-224 224 57 56 320-320-320-320-57 56 224 224h-487v80H647Z"/></svg></span>',
        responsive: [
        {
            breakpoint: 1024, // max-width: 1023.98px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768, // max-width: 767.98px
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    });

