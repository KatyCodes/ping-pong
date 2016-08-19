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
        for (var index = ""; index=userInput; index =+1) {
          userInput -= 1;
        $("#results").prepend("<li>" + userInput + "</li>");
       if ((userInput - 1) % 15=== 0) {
            $("#results").prepend("<li>" + "ping-pong" + "</li>");
            userInput -=1
          }
          if ((userInput - 1) % 5=== 0) {
               $("#results").prepend("<li>" + "pong" + "</li>");
               userInput -=1
          } else if ((userInput - 1) % 3=== 0) {
           $("#results").prepend("<li>" + "ping" + "</li>");
           userInput -=1
         }
        }
      }
  });
});
