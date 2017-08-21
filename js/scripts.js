// back-end logic
function pongGame(number) {
  $("#list").empty(number); //empties the div each time
  var numberArr =[];
  for (var i = 1; i <= number; i += 1) {
      if (i % 15 === 0) {
      numberArr.push("pingpong");
    } else if (i % 3 === 0) {
      numberArr.push("ping");
    } else if (i % 5 === 0) {
      numberArr.push("pong");
    } else {
      numberArr.push(i)
    }
  }
  return numberArr;
}
function buildList(numberArr) {
  var strings = "";
  for (ii = 0; ii < numberArr.length; ii++) {
    strings += "<li>"+numberArr[ii]+"</li>";
  }
  return strings;
}

// function to reset the form field each time
function resetFields() {
    $("input#number").val("");
}

// front-end
$(document).ready(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();
    $("#list").append(buildList(pongGame(input)));
    $("#result").show();
    resetFields();
  });
});
