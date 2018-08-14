var captureEmail = function (id) {
	$('.bp' + id + '-getaheadbutton a').on('click', function () {
		window.open('https://app.2hats.com.au/signup?email=' + $('.bp' + id + '-textyouremail').val());
	});
};
$(document).ready(function () {
	captureEmail(1);
	captureEmail(2);
	captureEmail(3);

	// trigger css animations on scroll
	$(window).scroll(function(){
		$('.our-process .step-1 h3, .our-process .step-1 p, .our-process .step-2 h3, .our-process .step-2 p, .our-process .step-4 h3, .our-process .step-4 p').each(function(){
			if ( $(window).scrollTop() + ( $(window).height() * 7/8 ) > $(this).offset().top ) {
				$(this).addClass('animatedOnScrollToLeft');
			}

		});
		$('.our-process .step-3 h3, .our-process .step-3 p, .our-process .step-5 h3, .our-process .step-5 p').each(function(){
			if ( $(window).scrollTop() + ( $(window).height() * 7/8 ) > $(this).offset().top ) {
				$(this).addClass('animatedOnScrollToRight');
			}
		});
		$('.how-it-works, .testimonials, .cta').each(function(){
			if ( $(window).scrollTop() + ( $(window).height() * 7/8 ) > $(this).offset().top ) {
				$(this).addClass('animatedOnScrollToTop');
			}
		});
	});



	// Banner height
	var bannerHeightWideScreen = $(window).height() - $('nav').outerHeight();
	if ($(window).width() > 992) {
		$('header .banner').css('height', bannerHeightWideScreen);
	}

	// Adjust text and timeline bullets
	// desktop view
	var ourProcessSectionOffset = $('.our-process').offset().top;

	var step2offset = ($('.bullet-2').offset().top - ($('.step-2').height() / 2)) - ourProcessSectionOffset + 18;
	$('.step-2').css('top', step2offset);

	var step3offset = ($('.bullet-3').offset().top - ($('.step-3').height() / 2)) - ourProcessSectionOffset + 18;
	$('.step-3').css('top', step3offset);

	var step4offset = ($('.bullet-4').offset().top - ($('.step-4').height() / 2)) - ourProcessSectionOffset + 18;
	$('.step-4').css('top', step4offset);


	// adjust bullets offset top in mobile view
	/*
	if ($(window).width() <= 992) {
		// step-1
		var step1Offset = $('.step-1').offset().top,
			artwork1Offset = step1Offset - ourProcessSectionOffset;
		$('.artwork-1').css('top', artwork1Offset);
		// step-2
		var step2Offset = $('.step-2').offset().top,
			step2PaddingTop = parseInt($('.step-2').css('padding-top').slice(0, -2)),
			bullet1Offset = step2Offset - sectionOffset + step2PaddingTop;
		$('.bullet-2').css('top', bullet1Offset);
		// step-3
		var step3Offset = $('.step-3').offset().top,
			step3PaddingTop = parseInt($('.step-3').css('padding-top').slice(0, -2)),
			bullet2Offset = step3Offset - sectionOffset + step3PaddingTop;
		$('.bullet-3').css('top', bullet2Offset);
		// step-4
		var step4Offset = $('.step-4').offset().top,
			step4PaddingTop = parseInt($('.step-4').css('padding-top').slice(0, -2)),
			bullet3Offset = step4Offset - sectionOffset + step4PaddingTop;
		$('.bullet-4').css('top', bullet3Offset);
		// step-5
		var step5Offset = $('.step-5').offset().top,
			artwork2Offset = step5Offset - sectionOffset - 40;
		$('.artwork-2').css('top', artwork2Offset);
	}
	*/


});