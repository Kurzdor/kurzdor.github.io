$(document).ready(function(){
  $('.slick').slick({
    prevArrow: '<button class="arrow arrow-left"><picture><source srcset="img/arrow-left.svg"><img src="img/arrow-left.png" alt="arrow-left"></picture></button>',
    nextArrow: '<button class="arrow arrow-right"><picture><source srcset="img/arrow-right.svg"><img src="img/arrow-right.png" alt="arrow-right"></picture></button>',
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
        breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
        breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
});