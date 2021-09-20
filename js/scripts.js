window.$ = $;

$.when($.ready).then(function () {
	// console.log(this, Popper, '$ is ready');
});

$('#reserveButton').on('click', function () {
	$('#reserveModal').modal('show');
});

$('#loginButton').on('click', function () {
	$('#loginModal').modal('show');
});

// this works, but API manual recommended pure css selector: https://api.jquery.com/button-selector/
// so I added a new class to all the close/cancel buttons
// Also, these selectors triggered multiple console.logs:
// $(':button.close, :contains(Cancel)').on('click', function (e) {
$('.btn-close').on('click', function (e) {
	e.preventDefault();
	// console.log('closing...');
	$('.modal').modal('hide');
});

$('.btn-group-toggle').button('toggle');

$('button[for="#search"]').on('click', function (e) {
	e.preventDefault();
	console.log('searching...');
	$('#reserveModal').modal('hide');
});

$(function () {
	$('.carousel').carousel({ interval: 2000, pause: 'false' });
	$('#carouselButton').on('click', function () {
		if ($('#carouselButton').children('i').hasClass('fa-pause')) {
			$('.carousel').carousel('pause');
			$('#carouselButton').children('i').removeClass('fa-pause');
			$('#carouselButton').children('i').addClass('fa-play');
		} else {
			$('.carousel').carousel('cycle');
			$('#carouselButton').children('i').removeClass('fa-play');
			$('#carouselButton').children('i').addClass('fa-pause');
		}
	});
	$('#carouselPlay').click(function () {
		$('.carousel').carousel('cycle');
	});
});
