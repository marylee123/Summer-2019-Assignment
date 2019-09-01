const stringArray = ["hello world", "we will meet again", "a big elephant"];

let choose = parseInt(Math.random() * 3);

let text = stringArray[choose];
let plaintext = stringArray[choose].split("");
console.log(plaintext);

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

const runScript = (e) => {
  let script = $("input").val();
  if(e.keyCode == 13){
    if(script == text){
      $(".bottom").html("<h3>Great Job!</h3>");
    }
  }
}
