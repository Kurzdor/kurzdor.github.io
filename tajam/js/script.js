$(document).ready(function(){
  $('.header-slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500
});
$('.slider').slick({
  nextArrow: '<button class="arrow arrow-next"> <i class="icon-right"></i></button>',
  prevArrow: '<button class="arrow arrow-prev"> <i class="icon-left"></i></button>',
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});