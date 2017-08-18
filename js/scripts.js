// back-end
function pingPongGame() {


}




// front-end
$(document).ready(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    result = "";
    
    $("#result").text(pingPongGame(parseInt(input)));
  });
});
