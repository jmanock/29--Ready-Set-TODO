//Entering a new LI into the list when you hit Enter
var $input = $('#new-todo');

$input.keyup(function(enter){
	if(enter.keyCode === 13) {
		if ($input.val().trim().length > 0) {
			$('#todo-list').show().append('<li><div class="view"><input class="toggle" type="checkbox"><label>' + $input.val() + '</label><button class="destroy"></button></input></div><input class="edit" value="' + $input.val() + '"></input></li>');
			$('#main').css({display: 'block'});
			$input.val('');
		}
	}
});

//Delete functionality for each LI
$('#todo-list').on('click', '.destroy', function(){
	$(this).closest('li').remove();
});

//Edit functionality for each LI
$('#todo-list').on('dblclick','.view label', function(){
	$(this).html($('.editing label').val());
	$(this).closest('li').addClass('editing');

	//Change the value of the LI being edited and remove the Editing class
	$('#todo-list').on('keyup', '.edit', function(enter){
		if(enter.keyCode === 13) {
			$('.editing label').html($(this).val().trim());
			$('.editing').removeClass('editing');
		}
	});
});

//Remove the Editing class when you click anywhere in the document
$(document).click(function (){
	$('.editing').removeClass('editing');
});
