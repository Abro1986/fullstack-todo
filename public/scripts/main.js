// Your jQuery Logic will go here
console.log("linked up")
let $todosList;
let allToDo = [];

$(document).ready(function(){
	
	$todosList = $('#container');
	$.ajax({
		method: 'GET',
		url: '/api/todos',
		success: handleSuccess,
		error:handleError
	});


});

function getToDoHtml(todo) {
	return `<p> 
				${todo.task}
				priority: ${todo.difficulty}
			<p>`;

}

function taskstoHtml(todos) {
	return todos.map(getToDoHtml).join("");
};

function render() {
	$todosList.empty();

	let todosHtml = taskstoHtml(allToDo);

	$todosList.append(todosHtml)
};

function handleSuccess(json) {
	allToDo = json;
	render();
}

function handleError(e) {
  console.log('uh oh');
  $('#container').text('Failed to load books, is the server working?');
}





// $(document).ready(function() {
// 	console.log("ready");

// 	$("#target").submit(function(e) {
// 		e.preventDefault()
		
		
// 		$("#container").append(('<li id="newList">'  + $('#box').val()) + '  <button class="new">');
		
// 		$('.new').click(function() {
// 			$(this).html('Got It!');
// 		});

// 		$(document).ready(function() {
// 			$("#box").val(" ");

			
		

// 		});
		
	
// 	});
// });

// //$("#new").click(function() {
// 			$("#new").html('done');
// 		}