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

          //Set back to nothing in input box
          $(".new-todo").val('');
          };
    });

    $('.toggle-all').click(function() {
      //console.log("toggle-all checked");
      //mark collection of todo objects as completed
      //Reference for line 50: http://stackoverflow.com/questions/22301116/jquery-dynamically-mark-all-checkboxes-checked
      $('input:checkbox').not(this).prop('checked', this.checked);

      console.log(todoCollection);
    });

    $('.todo-list').on('dblclick', 'li', function() {
      console.log(this);
      //create a new, editable li with edit style
      $(this).addClass("editing");
    });

    $('.todo-list').keypress(function(e) {
        if(e.which == 13) {
          console.log('you pressed enter');
          //taking DOM element and making it a JQuery element
          var input = $(e.target);
          //get content of edited field (using JQuery)
          var todoContent = input.val();
          //Getting parent - look up parents in JQuery docs
          var li = input.parents('li');
          //Update value of label
          var label = li.find('label');
          //Update content of label
          label.text(todoContent);
          //Change class to view
          li.removeClass("editing");
          //Update value of key content of corresponding object
          todoCollection[li.attr('data-id')-1].content = todoContent;

        };
    });


});
