// Your starting point. Enjoy the ride!

// $("#/active").click(function(){
// 	$( ".main > li" ).not( ".completed" ).css( "display", "none" );
// })

var $input = $('#new-todo');

$input.keyup(function(enter){
	if(enter.keyCode === 13) {
		$(this).trigger('addTask');
	}
})

$input.bind('addTask', function(){
	if ($input.val().trim().length > 0) {
		$('#todo-list').show().append('<li><label>' + $input.val() + '</label></li>');
		$('#main').css({display: 'block'});
		$input.val('');
	}
});
