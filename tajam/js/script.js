$(document).ready(function(){
  $('.preloader').removeClass("preloader_active");
  $('.header-slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500
});
  $('.slider').slick();
});