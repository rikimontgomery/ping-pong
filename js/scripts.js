// back-end

var i = "";

function pongGame(number) {
  for (i = 1; i <= number; i++) {
    return(i);
  }
}


  if (number % 3 === 0 && number % 5 === 0) {
    return "pingpong";
  } else if (number % 3 === 0) {
    return "ping";
  } else if (number % 5 === 0) {
    return "pong";
  } else {
    return number;
  }
};




// front-end
$(document).ready(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    solution = "";
    var input = $("#input").val();
    $("span#solutionList").text(pongGame(input));
    $("#solution").show();
  });
});
