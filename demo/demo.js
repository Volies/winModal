jQuery(document).ready(function($) {

	$('.link').modal({
		'padding' 		: true,
		'style'			: 'white',
		'defaultStyle' 	: true,
		'close' 		: false,
		'closeAddClass'	: 'myCustomClass'
	});

	$('.linksecond').modal({
		'style'			: 'dark'
	});

});