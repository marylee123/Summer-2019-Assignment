var time = 10;
const timeDown = setInterval(function() {
  time--;
  let minutes = Math.floor(time/60);
  let seconds = time - minutes * 60;
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  let timer = minutes + ":" + seconds
  $("#timer").html(timer);
  if(time === 0){
    clearInterval(timeDown);
    console.log("Time's up!");
    $(".bottom").html("<h3>Time's Up!</h3>");
    $("#tryAgain").append("<a href='shift.html'><button type='button' class='btn btn-Default' id='back'>Back</button></a>");
    $("#tryAgain").append("<a href='shiftGame.html'><button type='button' class='btn btn-success' id='again'>Try Again</button></a>");
  }
}, 1000);

window.onload = timeDown;

//var timer = document.getElementById("timer");



//timer.appendChild(p);
