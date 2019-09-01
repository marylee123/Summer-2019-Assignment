$("#btn").click((e) => {
  const string = "hello world";
  let plaintext = string.split("");

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
});
