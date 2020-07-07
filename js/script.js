$(document).ready(function(){

	$('.list__link').on('click', function(e){
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('html, body').animate({
			scrollTop: offset,
		}, 500);
  });

  
  
  $('.contacts__btn').on('click', function(e){
				$('.popup').addClass('popup-active');
				$('body').addClass('scroll-off');
		});

		$('.contacts-phone').on('click', function(e){
			$('.popup').addClass('popup-active'); 
			$('body').addClass('scroll-off'); 
	});

		$('.footer-social__btn').on('click', function(e){
			$('.popup').addClass('popup-active');
			$('body').addClass('scroll-off');
	});
		
		$('.popup-header__close').on('click', function(e){
			$('.popup').removeClass('popup-active');
			$('body').removeClass('scroll-off');
		});


		$('.box__brg').on('click', function(e){
			$('.box-nav').addClass('box-nav-open');
		});

		$('.box-nav__close').on('click', function(e){
			$('.box-nav').removeClass('box-nav-open');
		});


		$('.element').removeClass('anim');

		$('.element-left').removeClass('anim');

		$('.element-right').removeClass('anim');

});