var captureEmail = function (id) {
	$('.bp' + id + '-getaheadbutton a').on('click', function () {
		window.open('https://app.2hats.com.au/signup?email=' + $('.bp' + id + '-textyouremail').val());
	});
};
$(document).ready(function () {
	captureEmail(1);
	captureEmail(2);
	captureEmail(3);

	// Banner height
	if ($(window).width() > 992) {
		$('header .banner').css('height', $(window).height() - $('nav').outerHeight());
	}

	// Line 1 - start --> dest-1
	var myLine1 = new LeaderLine(
		document.getElementById('start'),
		document.getElementById('dest-1'), {
			color: '#fff',
			size: 6,
			startPlug: 'disc',
			endPlug: 'disc',
			path: 'arc'
		}
	);
	var myLine2 = new LeaderLine(
		document.getElementById('dest-1'),
		document.getElementById('dest-2'), {
			color: '#fff',
			size: 6,
			startPlug: 'disc',
			endPlug: 'disc',
			path: 'arc'
		}
	);
});