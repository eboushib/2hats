var captureEmail = function (id) {
	$('.bp' + id + '-getaheadbutton a').on('click', function () {
		window.open('https://app.2hats.com.au/signup?email=' + $('.bp' + id + '-textyouremail').val());
	});
};
$(document).ready(function () {
	captureEmail(1);
	captureEmail(2);
	captureEmail(3);
});