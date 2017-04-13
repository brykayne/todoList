// curious what this is doing? https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
    //1. if there are no todos, hide #main and #footer
    // var ulLength = $('ul.todo-list').children().length;
    // console.log(ulLength);
    // if (ulLength < 1) {
    //   $('.main').hide();
    //   $('.footer').hide();
    // } else {
    //   $('.main').show();
    //   $('.footer').show();
    // };

    $('.main').hide();
    $('.footer').hide();
    //2. New todos
    var todoCollection = [];
    //2a. Listen for press enter key
    $('.new-todo').keypress(function(e) {


        if(e.which == 13) {
          $('.main').show();
          $('.footer').show();

          //2b. Grab text typed into input tag
          var todoContent = $('.new-todo').val();
          var todoId = _.uniqueId();

          var todoObj = {
            id: todoId,
            content: todoContent,
            completed: false
          };

          todoCollection.push(todoObj);
          //3. create list item containing text
          // <li>
					// 	<div class="view">
					// 		<input class="toggle" type="checkbox">
					// 		<label>Buy a unicorn</label>
					// 		<button class="destroy"></button>
					// 	</div>
					// 	<input class="edit" value="Rule the web">
					// </li>

          var listItem =
          "<li> \
            <div class = \"view\"> \
              <input class=\"toggle\" type=\"checkbox\"> \
              <label data-id=" + todoId + ">" + todoContent + "</label> \
              <button class=\"destroy\"></button> \
            </div> \
            <input class=\"edit\" value=" + todoContent + "> \
          </li>"

          //4. Populate unordered list
          $(".todo-list").append(listItem);

          };
    });


});
