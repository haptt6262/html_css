$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbs',
    });
    $('.thumbs').slick({
        slidesToShow: 3.5,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        // autoplay:true,
        // autoplayDelay: 1000,
        arrows: false,
        // centerMode: true,
        focusOnSelect: true
    });
    $('.main-slider').slick({
        infinite: false,
        lazyLoad: 'ondemand',
        asNavFor: '.thumbs',
    });
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.thumbs',
    });
})