//backend



//front end user interface
$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    if ((userInput === 2) || (userInput ===1)) {
        alert("please enter a number larger than 2");
      }
     else {
        for (var index = 0; index=userInput; index =+1) {
        userInput -= 1;
        $("#results").append("<li>" + userInput + "</li>");

      }
        }
  });
});
