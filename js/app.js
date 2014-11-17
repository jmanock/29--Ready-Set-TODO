(function( window ) {
	'use strict';

//Input
	var $input = $('#new-todo');

$input.keyup(function(enter){
	if(enter.keyCode === 13) {
		$(this).trigger('addTask');
	}
});

$input.bind('addTask', function(){
	if ($input.val().trim().length > 0) {
		$('#todo-list').show().append('<li><div class="view"><input class="toggle" type="checkbox"><label>' + $input.val() + '</label><button class="destroy"></button></input></div></li>');
		$('#main').css({display: 'block'});
		$input.val('');
	}
});



$('#todo-list').on('click', '.destroy', function(){
	$(this).closest('li').remove();
});




var $complete = $('#todo-list li');
var $toggleAll = $('#toggle-all');
$toggleAll.click(function() {
	if ($('#todo-list li').hasClass('')) {
		$('#todo-list li').addClass('completed');
		$('.toggle').prop('checked', true);
	} else {
		$('.toggle').prop('checked', false);
		$('#todo-list li').removeClass('completed');
	}
});

$('#todo-list').on('click', '.toggle', function(){
	$(this).closest('li').toggleClass('completed');
	if($('.completed').length === $('#todo-list li').length) {
		$('#toggle-all').prop('checked', true);
	} else {
    $('#toggle-all').prop('checked', false);
  }
});


// $('#todo-list').on('click', '.toggle', function(){
// 	if($(this).closest('li').hasClass('completed')){
// 		$(this).closest('li').removeClass('completed');
// 	} else {
// 		$(this).closest('li').addClass('completed');
// 	}
// });
//
// $('#main').on('click', '#toggle-all', function(){
// 	var $todos = $('#todo-list > li');
// 	console.log('test');
// 	$todos.each(function(){
// 		console.log('test2');
// 		if($todos.closest('li').hasClass('completed')){
// 			$todos.closest('li').removeClass('completed');
// 		} else {
// 			$todos.closest('li').addClass('completed');
// 		}
// 	});
// });


$("#filters").click(function() {
	$('.active, .completed').show();
});

$('#filters .active').click(function() {
	$('.active').show();
	$('.completed').hide();
	return false;
});

$('#filters .completed').click(function() {
	$('.completed').show();
	$('.active').hide();
	return false;
});

})( window );
