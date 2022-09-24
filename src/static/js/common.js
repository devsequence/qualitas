$('.qualitas-reviews__slider').slick({
    dots: true,
    arrows: false
});
$('.qualitas-team__item-media').on('click', function (e) {
    var $this = $(this);
    $this.parent().toggleClass('active');
});
$('.qualitas__header-search ').on('click', function (e) {
    var $this = $(this);
    $('.qualitas-header__search-wrap').toggleClass('active');
});
$('.qualitas-team__item-close').on('click', function (e) {
    var $this = $(this);
    $this.parents('.qualitas-team__item').removeClass('active');
});
$('.qualitas-play__button').on('click', function (e) {
    var $this = $(this);
    $('.qualitas-play__button').removeClass('qualitas__hidden');
    $this.addClass('qualitas__hidden');
    setTimeout(function() {
        $('.qualitas-video__media video').attr('controls', false).trigger('pause');
        $this.next().attr('controls', true).trigger('play');
    }, 100);
});
function popupOpen() {
    var $popupButton = $('.qualitas-course__nav a');
    $popupButton.on('click', function (e) {
        e.preventDefault();
        $('.qualitas-course__nav a').removeClass('active');
        var $this = $(this);
        $this.addClass('active');
        var popupButtonData = $this.data('tab');
        $('.qualitas-course__item').removeClass('active');
        $('div [data-tab='+popupButtonData+']').addClass('active');
    });
}
popupOpen();
$('.qualitas__header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.qualitas__header').toggleClass('active');
});
// AOS.init({disable: 'mobile'});

// $('.courses-item').each(function (e) {
//     var $ths = $(this);
//     var $thsText = $ths.find('.courses-item__text').text();
//     var dots = "...";
//     var limit = 290;
//     if($thsText.length > limit){
//         var string = '';
//         string = $thsText.substring(0,limit) +dots;
//         $ths.find('.courses-item__text').text(string);
//         $ths.find('.btn-secondary').on('click', function (e) {
//             e.preventDefault();
//             var $ths = $(this);
//             var $thsParents = $ths.parents('.courses-item');
//             var $thsParentsTop = $thsParents.offset().top;
//             $ths.find('span').toggleClass('hidden');
//             $thsParents.toggleClass('active');
//             $('html, body').animate({
//                 scrollTop: $thsParentsTop
//             }, 300);
//             if($thsParents.hasClass('active')){
//                 $thsParents.find('.courses-item__text').text($thsText);
//             }else {
//                 $thsParents.find('.courses-item__text').text(string);
//             }
//             return false;
//         });
//     }else{
//         $ths.find('.btn-secondary').on('click', function (e) {
//             e.preventDefault();
//             var $ths = $(this);
//             var $thsParents = $ths.parents('.courses-item');
//             var $thsParentsTop = $thsParents.offset().top;
//             $ths.find('span').toggleClass('hidden');
//             $thsParents.toggleClass('active');
//             $('html, body').animate({
//                 scrollTop: $thsParentsTop
//             }, 300);
//             return false;
//         });
//     }
//
// });
// $(".more-slider").slick({
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     prevArrow: $('.more-slider-prev'),
//     nextArrow: $('.more-slider-next')
// });
// $('.header-logo a, .footer-logo a').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });
//
// if($('.hero').length > 0){
//     $(window).on('scroll', function() {
//         var $this = $(this),
//             $header = $('.header');
//         if ($this.scrollTop() > 1) {
//             $header.addClass('scroll-nav');
//         }
//         else{
//             $header.removeClass('scroll-nav');
//         }
//     });
//     $('.header-nav a, .footer-nav a').on('click', function (e) {
//         e.preventDefault();
//         var ths = $(this);
//         var thsId = ths.data('id');
//         var headerHeight = $('.header').height();
//         if ($(ths).data('id')) {
//             $('html, body').animate({
//                 scrollTop: $('#'+thsId).offset().top - 120
//             }, 1000);
//             $('.header, .header-btn').removeClass('active');
//             return false;
//         }else{
//             $('.popup').addClass('active');
//             ths.addClass('active');
//         }
//     });
// }else{
//     $('.header').addClass('page-header');
//     $('.header-nav a, .footer-nav a').on('click', function (e) {
//         var ths = $(this);
//         if ($(ths).data('id')){}else{
//             $('.popup').addClass('active');
//             ths.addClass('active');
//         }
//     });
// }
// $(document).mouseup(function (e){
//     var div = $('.popup');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         div.removeClass('active');
//         $('.header-nav a, .footer-nav a').removeClass('active');
//     }
// });