$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay:true,
		autoplaySpeed:5000,
	    adaptiveHeight: true,
	    prevArrow: '',
	    nextArrow: ''
	})
	$('.button_mob_menu').click(function(){
		$(this).toggleClass('active_button_mob_menu')
		$('.button_mob_menu span').toggleClass('rotate')
		$('.mob_menu').slideToggle(500)
	})
})
