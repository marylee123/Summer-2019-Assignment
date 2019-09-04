(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyBsQkjgWqZzIwB5pNnjh9SI5Rb2bqohjHA",
    authDomain: "test-94645.firebaseapp.com",
    databaseURL: "https://test-94645.firebaseio.com",
    projectId: "test-94645",
    storageBucket: "",
    messagingSenderId: "1087752185737",
    appId: "1:1087752185737:web:f56c44b5fa5ed2b0"
  };
  firebase.initializeApp(firebaseConfig);

  const btnLogout = document.getElementById("btnLogout");

  btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  });

}());

const stringArray = ["hello world", "we will meet again", "a big elephant"];

let choose = parseInt(Math.random() * 3);

let text = stringArray[choose];
let plaintext = stringArray[choose].split("");
console.log(text);

let compare = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomized = [];
let i = 0;
let y = 0;
while(i < 26){
  let x = parseInt(Math.random() * 26);
  if(alphabet[x] !== alphabet[y] && alphabet[x] !== undefined){
    randomized.push(alphabet[x]);
    delete alphabet[x];
    i++
    y++
  }
}
console.log(randomized);
console.log(compare);

let m = 0;
while(m<plaintext.length){
  for(let n = 0; n < compare.length; n++){
    if(plaintext[m] == compare[n]){
      plaintext[m] = randomized[n];
      m++
    }
    else if(plaintext[m] == " "){
      plaintext[m] = " ";
      m++
    }
  }
}
console.log(plaintext);

let ciphertext = plaintext.join("");
$(".info").append("<p>" + ciphertext + "</p>");

/////////
let script = $("input").val();
const runScript = (e) => {
  script = $("input").val();
  if(e.keyCode == 13){
    if(script == text){
      $(".bottom").html("<h3>Great Job!</h3>");
      $("#tryAgain").append("<a href='shift.html'><button type='button' class='btn btn-Default' id='back'>Back</button></a>");
      $("#tryAgain").append("<a href='substitutionGame.html'><button type='button' class='btn btn-success'>Try Again</button></a>");
    }
  }
}


var time = 900;
const timeDown = setInterval(function() {
  time--;
  let minutes = Math.floor(time/60);
  let seconds = time - minutes * 60;
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  let timer = minutes + ":" + seconds
  $("#timer").html(timer);
  if(time === 0 && script !== text){
    clearInterval(timeDown);
    console.log("Time's up!");
    $(".bottom").html("<h3>Time's Up!</h3>");
    $("#tryAgain").append("<a href='shift.html'><button type='button' class='btn btn-Default' id='back'>Back</button></a>");
    $("#tryAgain").append("<a href='shiftGame.html'><button type='button' class='btn btn-success' id='again'>Try Again</button></a>");
  }
}, 1000);

window.onload = timeDown;
