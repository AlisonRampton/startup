//Clone the hidden element and shows it
function addOne() {
  document.querySelector('.dynamic-element').firstElementChild().clone().appendTo('.dynamic-stuff').show();
  attach_delete();
}


//Attach functionality to delete buttons
function attach_delete(){
  $('.delete').off();
  $('.delete').click(function(){
    console.log("click");
    $(this).closest('.form-group').remove();
  });
}