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

	// Adjust body margin top with fixed navbar
	$('body').css({
		marginTop: navbarHeight
	});

	// Make FAQ header 100% viewport height
	$('.faq-header').css({
		height: $(window).height() - navbarHeight
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
		$('.our-process.selection-process .step-title span').each(function () {
			if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
				$(this).addClass('animatedOnScrollToLeftForward');
			}
		});
		if ($(window).outerWidth() <= 768){
			$('.our-process.selection-process .step-description').each(function () {
				if ($(window).scrollTop() + ($(window).height() * 7 / 8) > $(this).offset().top) {
					$(this).addClass('animatedOnScrollToLeftForward');
				}
			});
		}
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

	// toggle navbar in mobile view
	$('#navbar-toggler').click(function () {
		$('.top-menu .navbar').slideToggle(500);
		$(this).toggleClass('df');
		$('.navbar-toggler span').toggleClass('pabs');
		$('.navbar-toggler span:first-child').toggleClass('rotate-minus-40');
		$('.navbar-toggler span:nth-child(2)').toggleClass('hidden');
		$('.navbar-toggler span:nth-child(3)').toggleClass('rotate-plus-40');
	});

});