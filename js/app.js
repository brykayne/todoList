// curious what this is doing? https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
    //1. if there are no todos, hide #main and #footer

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

          var listItem =
          "<li data-id=" + todoId + "> \
            <div class = \"view\"> \
              <input class=\"toggle\" type=\"checkbox\"> \
              <label>" + todoContent + "</label> \
              <button class=\"destroy\"></button> \
            </div> \
            <input class=\"edit\" value=" + todoContent + "> \
          </li>"

          //4. Populate unordered list
          $(".todo-list").append(listItem);
          };
    });

    $('.toggle-all').click(function() {
      //console.log("toggle-all checked");
      //mark collection of todo objects as completed
      //Reference for line 50: http://stackoverflow.com/questions/22301116/jquery-dynamically-mark-all-checkboxes-checked
      $('input:checkbox').not(this).prop('checked', this.checked);

    });


});
