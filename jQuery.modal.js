$.fn.modal = function(options) {

	var settings = $.extend({
		'padding' : true,				// Наличие паддингов
		'style' : 'white',				// {white;dark} цвет обертки
		'defaultStyle' : true,			// Стандартные стили
		'close' : false,				// Класс кнопки закрыть
		'closeAddClass' : false,		// Класс кнопки закрыть
	}, options);

	return this.each(function() {

		var th  = $(this),
			modal = $(th.attr('href')),
			close = '';

		// Показать
		function showModal(){
			modal.parent('.modal-wrap').fadeIn(250);
			modal.fadeIn(1000);
			$('body').css({'overflow':'hidden'});
		}

		// Скрыть
		function hideModal(){
			modal.parent('.modal-wrap').fadeOut(500);
			$('body').css({'overflow':'auto'});
		}

		// Создаем дом
		modal
		.addClass('modal')
		.wrap('<div class="modal-wrap">')
		.wrapInner('<div class="modal-content">');

		// Опции
		if ( settings.padding ) {
			modal.css({'padding' : '40px'});
		} else {
			modal.css({'padding' : '0'});
		}
		if ( settings.defaultStyle ) {
			modal.css({
				'background-color': '#FFF',
				'color': '#333',
				'box-shadow': '4px 4px 15px 0 rgba(0,0,0,.2)',
			});
		}
		switch(settings.style) {
			case 'dark':
				modal.parent('.modal-wrap').css({
					'background-color': 'rgba(0,0,0,.7)',
				});
				break;
			case 'white':
				modal.parent('.modal-wrap').css({
					'background-color': 'rgba(255,255,255,.9)',
				});
				break;
			default:
				modal.parent('.modal-wrap').css({
					'background-color': 'rgba(255,255,255,.9)',
				});
		}
		if ( settings.close === false ) {
			modal.prepend('<span class="modal-close"></span>');
			close = modal.find('.modal-close');
			close.css({

			})
		} else {
			close = modal.find(settings.close);
		}

		if (settings.closeAddClass !== false) {
			var closeClass = settings.closeAddClass;
			if ( closeClass[0] == '.' ) {
				closeClass = closeClass.substr(1,closeClass.length);
			}
			close.addClass(closeClass);
		}

		// Hide & Show
		close.click(function() {
			hideModal();
		});

		th.click(function(event) {
			event.preventDefault();
			showModal();
		});

		// Скрыть при нажатии все modal
		$(document).mouseup(function (e){
			if ( !modal.is(e.target) && modal.has(e.target).length === 0 ) {
				hideModal();
			}
		});

	});

}
