var captureEmail = function (id) {
	$('.bp' + id + '-getaheadbutton a').on('click', function () {
		window.open('https://app.2hats.com.au/signup?email=' + $('.bp' + id + '-textyouremail').val());
	});
};
$(document).ready(function () {
	captureEmail(1);
	captureEmail(2);
	captureEmail(3);

	// adjust banner margin according to navbar height
	var navbarHeight = $('.top-menu').height();
	$('.banner').css({
		marginTop: navbarHeight
	});

	// trigger css animations on scroll
	$(window).scroll(function () {
		$('.our-process .step-1 h3, .our-process .step-1 p, .our-process .step-2 h3, .our-process .step-2 p, .our-process .step-4 h3, .our-process .step-4 p').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToLeftForward');
			}

		});
		$('.our-process .step-3 h3, .our-process .step-3 p, .our-process .step-5 h3, .our-process .step-5 p').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToRightForward');
			}
		});

		// comapnies page slide on scroll effect | our process section
		$('.our-process.selection-process .step-title').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToLeft');
			}
		});

		// Our history section animation | about us page
		$('.our-history .step-date').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToRightForward');
			}
		});
		$('.our-history .step-description').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToLeftForward');
			}
		});

		$('.how-it-works, .testimonials, .cta').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToTop');
			}
		});
	});



	// Banner height
	var bannerHeightWideScreen = $(window).height() - $('nav').outerHeight();
	if ($(window).width() > 1024) {
		$('header .banner').css('height', bannerHeightWideScreen);
	}

	// Adjust text and timeline bullets
	var ourProcessSectionOffset = $('.our-process').offset().top;

	// desktop view
	if ($(window).width() > 1024) {
		for (var i = 2; i < 5; i++) {
			if (($('.bullet-' + i)).length) {
				$('.main-process .step-' + i).css({
					top: ($('.bullet-' + i).offset().top - ($('.step-' + i).height() / 2)) - ourProcessSectionOffset + 18
				});
			}
		}
	}

	// mobile view
	if ($(window).width() <= 1024) {

		// step-1
		$('.artwork-1').css({
			top: $('.step-1').offset().top - ourProcessSectionOffset - 40
		});

		// step-5
		$('.artwork-2').css({
			top: $('.step-5').offset().top - ourProcessSectionOffset - 40
		});

		// step 2, 3 & 4
		for (var j = 2; j < 5; j++) {
			$('.bullet-' + j).css({
				top: $('.step-' + j).offset().top - ourProcessSectionOffset + parseInt($('.step-' + j).css('padding-top').slice(0, -2)) + 10
			});
		}
	}

	$(window).on('resize', function () {

		// desktop view
		if ($(window).width() > 1024) {
			ourProcessSectionOffset = $('.our-process').offset().top;
			console.log($(window).width());
			for (var i = 2; i < 5; i++) {
				$('.step-' + i).css({
					top: ($('.bullet-' + i).offset().top - ($('.step-' + i).height() / 2)) - ourProcessSectionOffset + 18
				});
			}
		}

		// mobile view
		if ($(window).width() <= 1024) {
			ourProcessSectionOffset = $('.our-process').offset().top;
			// step-1
			$('.artwork-1').css({
				top: $('.step-1').offset().top - ourProcessSectionOffset - 40
			});

			// step-5
			$('.artwork-2').css({
				top: $('.step-5').offset().top - ourProcessSectionOffset - 40
			});

			// step 2, 3 & 4
			for (var j = 2; j < 5; j++) {
				$('.bullet-' + j).css({
					top: $('.step-' + j).offset().top - ourProcessSectionOffset + parseInt($('.step-' + j).css('padding-top').slice(0, -2)) + 10
				});
				//
				console.log('bullet-' + j + ': ' + $('.bullet-' + j).offset().top);

			}
		}
	});


	// toggle navbar in mobile view
	$('#navbar-toggler').click(function () {
		$('.top-menu .navbar').slideToggle(500);
		$(this).toggleClass('df');
		$('.navbar-toggler span').toggleClass('pabs');
		$('.navbar-toggler span:first-child').toggleClass('rotate-minus-40');
		$('.navbar-toggler span:nth-child(2)').toggleClass('hidden');
		$('.navbar-toggler span:nth-child(3)').toggleClass('rotate-plus-40');
	});

	// mobile timeline height
	if ( $('.our-process .artwork-2').length ) {
		$('.our-process .timeline-path-sm').css({
			height: $('.our-process .artwork-2').offset().top - $('.our-process .artwork-1').offset().top - 40
		});
	}

	// toggle visibility of step title & step description in companies page
	// $('.selection-process .step-title').mouseenter(function(){
	// 	$(this).hide();
	// });
	// $('.selection-process .step-title').hover(function(){ $(this).hide(); }, function(){ $(this).show(); });
	// $('.selection-process .step-title').mouseenter(function(){ $(this).hide(); });
	// $('.selection-process .step-title').mouseleave(function(){ $(this).show(); });
});