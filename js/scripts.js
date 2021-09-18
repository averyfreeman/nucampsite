window.$ = $;

// $(document).onReady(function () {
// 	console.log(this, 'ready');
// });

$.when($.ready).then(function () {
	console.log(this, Popper, '$ is ready');
});

$('#reserveModal').on('shown.bs.modal', function () {
	$('#reserveButton').trigger('focus');
});

// ('node_modules/bootstrap/js/dist/button.js');
$('.btn-group-toggle').button('toggle');
$('button[for="#search"]').click(function (e) {
	e.preventDefault();
	console.log('searching...');
	$('#reserveModal').modal('toggle');
});

$(function () {
	$('.carousel').carousel({ interval: 2000, pause: 'false' });
	$('#carouselButton').click(function () {
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
// every clicked button gets an active class!!!
// $('.btn').on('click', function () {
//   $(this).siblings('label').removeClass('active');
//   $(this).addClass('active');
// });
