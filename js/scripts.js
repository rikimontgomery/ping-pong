var numberArr =[];
var i = "";

function pongGame(number) {
  for (var i = 1; i <= number; i += 1) {
      if (i % 3 === 0 && i % 5 === 0) {
      numberArr.push("pingpong");
    } else if (i % 3 === 0) {
      numberArr.push("ping");
    } else if (i % 5 === 0) {
      numberArr.push("pong");
    } else {
      numberArr.push(i)
    }
  }
  console.log(numberArr.toString());
}






// front-end
$(document).ready(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    i = "":

    $("ul#list").text(createArr(parseInt(input));
    $("#solution").show();
  });
});
