//backend
function myFunction (userinput) {
  for (var i = 0; i <= userInput; index =+1)
    alert(userInput);
}



//front end user interface
$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    for (var index = 1; index <= userInput; index += 1) {
      if (userInput >= 2) {
        userInput -= 1;
        $("#results").append("<li>" + userInput + "</li>");
      }
        else  {
        alert("enter a number larger than 2")
      }

  }


  });
});
