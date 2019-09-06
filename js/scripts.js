
$(document).ready(function(){
	$('.phones').prepend( '<div id="in_phones"></div>' );
	$('header .logo').prepend('<div id="in_logo"></div>');
	$('.banner__info__title').prepend('<div id="in_title"></div>');
	$('header img').after('<div class="divider"></div>');
	$('.banner__info__descr-cont__descr').after('<div class="shape"></div>');

	var user = detect.parse(navigator.userAgent);
	console.log(user.browser.family === 'Edge');
	if (user.browser.family !== 'Edge') {
		$('footer').append('<div class="polygon_outer"><div class="polygon_inner"></div></div>');
	}

})