$(document).ready(function(){
	$('#top-button').fadeOut();
	$('.preloader').removeClass("preloader_active");
	$('.header-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500
	});
	$('.slider').slick();
	$('.header-mobnav').click(function() {
		$('.navigation-mobile').toggleClass('navigation-mobile_active');
	});
	$('.navigation-menu-item a').click(function() {
		$('.navigation-mobile').toggleClass('navigation-mobile_active');
	});
	$('.navigation-mobile-exit').click(function() {
		$('.navigation-mobile').toggleClass('navigation-mobile_active');
		});
	$(".slowly").on("click", function (event) {
    	//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1400 мс
        $('body,html').animate({scrollTop: top}, 2000);
    });
    var top_show = 350; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  	var delay = 2000; // Задержка прокрутки
  	$(document).ready(function() {
    	$(window).scroll(function () { // При прокрутке попадаем в эту функцию
     	 /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      	if ($(this).scrollTop() > top_show) $('#top-button').fadeIn();
      		else $('#top-button').fadeOut();
    	});
    	$('#top-button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      	/* Плавная прокрутка наверх */
      	$('body, html').animate({
        	scrollTop: 0
      	}, delay);
    });
  });
});
