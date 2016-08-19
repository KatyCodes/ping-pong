//backend

function pingPongFun(userInput){
for (var index = 1; index<= userInput; index ++){
  if (index % 15 === 0){
    $("ul").append("<li>" + "ping-pong" + "</li>")
}
  else if (index % 5 === 0){
    $("ul").append("<li>" + "pong" + "</li>")
  }
  else if (index % 3 === 0) {
    $("ul").append("<li>" + "ping" + "</li>")
  }
  else {
    $("ul").append("<li>" + index + "</li>")
  }
}
}

//front end user interface
$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    return(pingPongFun(userInput))
  
  });
});
