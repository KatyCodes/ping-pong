// backend




//front end user interface
$(document).ready(function(){
  $("button").submit(function(event){
    event.preventDefault();
    var userInput = $("#number").val();
    $("ul").append("<li>" + userInput + "</li>");

  });
});
