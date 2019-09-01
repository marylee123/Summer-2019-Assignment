const stringArray = ["hello world", "we will meet again", "a big elephant"];

let choose = parseInt(Math.random() * 3);

let text = stringArray[choose]
let plaintext = stringArray[choose].split("");
console.log(plaintext);

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let x = parseInt(Math.random() * 26);
console.log(x);

let m = 0;
while(m < plaintext.length){
  for(let n = 0; n < alphabet.length; n++){
    if(plaintext[m] == alphabet[n]){
      if((n+x) > 25){
        let remainder = x + n - 26;
        plaintext[m] = alphabet[remainder];
        m++
      }
      else{
        plaintext[m] = alphabet[n+x];
        m++
      }
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

///////

const runScript = (e) => {
  let script = $("input").val();
  if(e.keyCode == 13){
    if(script == text){
      $(".bottom").html("<h3>Great Job!</h3>");
      console.log("correct");
    }
  }
}
