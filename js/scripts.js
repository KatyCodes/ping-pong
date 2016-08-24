//backend
function notEnough(userInput){
  if (userInput <= 2) {
    alert ("Please enter a number higher than 2")
  }
}
function pingPongFun(userInput){
    var pingPongArray = [ ];
    for (var index = 1; index<= userInput; index ++){
      if (index % 15 === 0){
        pingPongArray.push("ping-pong");
      }
      else if (index % 5 === 0){
        pingPongArray.push("pong");
      }
      else if (index % 3 === 0) {
        pingPongArray.push("ping");
      }
      else {
        pingPongArray.push(index);
      }
      } return(pingPongArray);
    }

//front end user interface
$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    notEnough(userInput);
    var result = pingPongFun(userInput);
      result.forEach(function(item)
      { $("ul").append("<li>" + item + "</li>")
      });
  });
});
