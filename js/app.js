// Your starting point. Enjoy the ride!

// $("#/active").click(function(){
// 	$( ".main > li" ).not( ".completed" ).css( "display", "none" );
// })

var $input = $('#new-todo'); // assigning the HTML element defined for this operation.

//Create Task

$input.keyup(function(enter){
	if(enter.keyCode === 13) {     // if the "enter" key is pressed, then it will trigger the 'addTask' function.
		$(this).trigger('addTask');
	}
});

$input.bind('addTask', function(){ //Show list of tasks, add the specific task to the bottom of the list, line 18 is a mystery.
	if ($input.val().trim().length > 0) { // As long as the field has more than 0 characters, then proceed.
		$('#todo-list').show().append('<li><div class="view"><input class="toggle" type="checkbox"><label>' + $input.val() + '</label><button class="destroy"></button></input></div></li>');// WTF with the checked? Isn't it supposed to be unchecked?
		$('#main').css({display: 'block'});
		$input.val('');
	}
});

/* .toggle on click add attr 'checked', and adding class completed to the closest li.
1. Text strikethrough
2. Text Light Grey
3. Checkmark becomes green.

*/

// Delete Task

$('#todo-list').on('click', '.destroy', function(){
	$(this).closest('li').remove();
});
