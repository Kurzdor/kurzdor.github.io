$(document).ready(function () {
    $('.header__top-mobile').click(function() {
		$('.mobile').toggleClass('mobile--not-hidden');
	});
	$('.mobile-navigation__item a').click(function() {
		$('.mobile').toggleClass('mobile--not-hidden');
	});
	$('.mobile-navigation__close').click(function() {
        $('.mobile').toggleClass('mobile--not-hidden');
    });
});