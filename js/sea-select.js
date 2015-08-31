// sea.select
// version 1.0.0
// © Oleg Morev, 2015
// https://github.com/DpOLEGapx/ 
//
// =====================================================================================================================
$(function(){
	var container = $('.sea-select');

	container.each(function(){
		var current = $(this);
		var selected = current.find('.sea-selected');
		var select = current.find('select');
		var option = current.find('option');
		var optionSelected = current.find('option:selected');
		var list = current.find('.sea-list');

		selected.text(select.val());

		option.each(function(i, item){
			list.append('<li>' + $(item).text() + '</li>');
		});

		current.find('li').each(function(i, item){
			$(item).click(function(){
				selected.text('');
				selected.append($(this).text());
				optionSelected.text(selected.text());
			});
		});

		current.click(function(){
			if(selected.hasClass('focus')){
				list.slideUp(300, function(){
					selected.removeClass('focus');
				});
				return;
			};

			list.slideDown(300);
			selected.addClass('focus');
		});

		$(document).click(function(event){
			if ($(event.target).parents(".sea-select").is(current)) return;
			list.slideUp(300, function(){
				selected.removeClass('focus');
			});
		});
	});
});