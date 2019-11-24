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
})