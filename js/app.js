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


$('#todo-list').on('click', '.toggle', function(){
	if($(this).closest('li').hasClass('completed')){
		$(this).closest('li').removeClass('completed');
	} else {
		$(this).closest('li').addClass('completed');
	}
});

$('#main').on('click', '#toggle-all', function(){
	var $todo = $('todo-list > li');
	console.log('hi');
	$($todo).each(function(){
		if($(todo).closest('li').hasClass('completed')){
			$(todo).closest('li').removeClass('completed');
		} else {
			$(todo).closest('li').addClass('completed');
		}
	});
	// return false;
});


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
