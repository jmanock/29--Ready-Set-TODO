<<<<<<< HEAD
jQuery(function ($) {
	'use strict';
	var App = {
		//Run these functions when init is called
		init: function() {
			this.cacheEle();
			this.bindEvents();
			this.todoCounter();
		},
		//Cashe elements into variables
		cacheEle: function() {
			this.$todoApp = $('#todoapp');
			this.$header = this.$todoApp.find('#header');
			this.$main = this.$todoApp.find('#main');
			this.$footer = this.$todoApp.find('#footer');
			this.$newTodo = this.$header.find('#new-todo');
			this.$todoList = this.$main.find('#todo-list');
			this.$count = this.$footer.find('#todo-count');
		},
		//Bind events to elements
		bindEvents: function() {
			var list = this.$todoList;
			this.$newTodo.on('keyup', this.createEle.bind(this));
			list.on('click', '.destroy', this.destroy.bind(this));
			list.on('dblclick','.view label', this.edit.bind(this));
			list.on('keyup', '.edit', this.editKeyup.bind(this));
			$(document).bind('click', this.stopEdit);
		},
		//Make item left plural if more than 1 incomplete task on the list
		plural: function(count) {
			var text;
			if (count > 1 || count === 0) {
				text = $('#todo-count').html().replace('item left','items left');
			} else {
				text = $('#todo-count').html().replace('items','item');
			}
			$('#todo-count').html(text);
		},
		//Keep count of incompleted tasks
		todoCounter: function() {
			var todoCount = $('#todo-list').children('li').length;
			var completedTodos = $('#todo-list').children('.completed').length;
			var activeTodos = todoCount - completedTodos;
			$('#todo-count strong').html(activeTodos);
			this.plural(todoCount);
			//Display footer only if tasks are in the list
			if ($('#todo-list').children('li').length === 0){
				$('#footer').css('display', 'none');
			} else {
				$('#footer').css('display', 'block');
			}
		},
		//Entering a new LI into the list when you hit Enter
		createEle: function(enter) {
			var $input = $('#new-todo');
			if(enter.keyCode === 13) {
				if ($input.val().trim().length > 0) {
					$('#todo-list').show().append('<li><div class="view"><input class="toggle" type="checkbox"><label>' + $input.val() + '</label><button class="destroy"></button></input></div><input class="edit" value="' + $input.val() + '"></input></li>');
					$('#main').css({display: 'block'});
					$input.val('');
					this.todoCounter();
				}
			}
		},
		//Edit functionality for each LI
		edit: function(e) {
			var newInput = $(e.target).closest('li').addClass('editing').find('.edit');
			newInput.focus();

<<<<<<< HEAD
		},
		//Keyup functionality for edit
		editKeyup: function(enter) {
			//Abort the changes made when escape is pressed
				if(enter.keyCode === 27) {
					$('.editing').children('.edit').val($('.editing label').html());
					$('.editing').removeClass('editing');
				}
				//Change the value of the LI being edited and remove the Editing class when enter is pressed
				else if(enter.keyCode === 13) {
					$('.editing label').html($('.editing').children('.edit').val().trim());
					$('.editing').removeClass('editing');
				}
		},
		//Delete functionality for each LI
		destroy: function(e) {
			$(e.target).closest('li').remove();
			this.todoCounter();
		},
		//Remove the Editing class when you click anywhere in the document
		stopEdit: function() {
			$('.editing label').html($('.editing').children('.edit').val().trim());
			$('.editing').removeClass('editing');
		}
	};
	App.init();
=======
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

$('.toggle').on('click', function(){

});


$('#todo-list').on('click', '.destroy', function(){
	$(this).closest('li').remove();
});
>>>>>>> Update index.html and app.js
