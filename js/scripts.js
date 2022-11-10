function newItem(){
  //adding a new item to list
  let li = $('<li></li>')
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something.");
  } else {
    $('#list').append(li);
  }

  //crossing out item from list
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //adding a delete button
  let crossOutButton = $('<span></span>')
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  //adding class delete
  function deleteListItem(){
    li.addClass('delete')
  }

  //reordering items
  $('#list').sortable();
};
