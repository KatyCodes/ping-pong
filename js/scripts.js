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
        for (var index = 1; index=userInput; index =+1) {
          userInput -= 1;
        $("#results").append("<li>" + userInput + "</li>");
          if ((userInput - 1) % 3=== 0) {
            $("#results").append("<li>" + "ping" + "</li>");
            userInput -=1
            // {"continue";}
          }
      }
        }
  });
});
