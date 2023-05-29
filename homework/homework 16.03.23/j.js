$(document).ready(function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      type: 'GET',
      dataType: 'json',
      success: function(data) {    //то что мы получаем от сервера 
        listItems = "";
        $.each(data, function(index,item) {
          listItems += "<li>" + item.title + "</li>";
        });
        $('#list').append(listItems);
      },
    });
});