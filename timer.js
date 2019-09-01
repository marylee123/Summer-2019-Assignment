var time = 60;
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
  }
}, 1000);

window.onload = timeDown;

//var timer = document.getElementById("timer");



//timer.appendChild(p);
