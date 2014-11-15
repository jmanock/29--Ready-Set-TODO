//Keep count of incompleted tasks
function todoCounter(){
	var todoCount = ($('#todo-list').children('li').length) - ($('#todo-list').children('.completed').length);
	$('#todo-count strong').html(todoCount);
	//Display footer only if tasks are in the list
	if ($('#todo-list').children('li').length === 0){
		$('#footer').css('display', 'none');
	} else {
		$('#footer').css('display', 'block');
	}
}

//Call todoCounter on startup
todoCounter();

//Entering a new LI into the list when you hit Enter
var $input = $('#new-todo');

$input.keyup(function(enter){
	if(enter.keyCode === 13) {
		if ($input.val().trim().length > 0) {
			$('#todo-list').show().append('<li><div class="view"><input class="toggle" type="checkbox"><label>' + $input.val() + '</label><button class="destroy"></button></input></div><input class="edit" value="' + $input.val() + '"></input></li>');
			$('#main').css({display: 'block'});
			$input.val('');
			todoCounter();
		}
	}
});

//Delete functionality for each LI
$('#todo-list').on('click', '.destroy', function(){
	$(this).closest('li').remove();
	todoCounter();
});

//Edit functionality for each LI
$('#todo-list').on('dblclick','.view label', function(e){
	$newInput = $(e.target).closest('li').addClass('editing').find('.edit');
	$newInput.html($('.editing label').val());
	$newInput.focus();
	//Change the value of the LI being edited and remove the Editing class
	$('#todo-list').on('keyup', '.edit', function(enter){
		if(enter.keyCode === 13) {
			$('.editing label').html($newInput.val().trim());
			$('.editing').removeClass('editing');
		}
	});
});

//Remove the Editing class when you click anywhere in the document
$(document).click(function(){
	$('.editing label').html($newInput.val().trim());
	$('.editing').removeClass('editing');
});
