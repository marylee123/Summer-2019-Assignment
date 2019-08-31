$("#btn").click((e) => {

});

let plaintext = ["h", "e", "l", "l", "o"];
/*let removeDuplicateUsingSet = (arr) => {
    let unique = Array.from(new Set(arr));
    return unique
}
const base = removeDuplicateUsingSet(plaintext);
let simple = removeDuplicateUsingSet(plaintext);
console.log(simple);
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let n = 26;
for(let num = 0; num < simple.length; num++){
  let i = 0;
  while(i < 1){
    let x = parseInt(Math.random() * n);
    if(alphabet[x] !== simple[num]){
      simple[num] = alphabet[x];
      delete alphabet[x];
      n = n - 1;
      i++
    }
  }
}
console.log(simple);

for(let x = 0; x < plaintext.length; x++){
  for(let y = 0; y < base.length; y++){
    if(base[x] == plaintext[y]){
      simple.splice(y, 0, simple[x]);
    }
  }
}
console.log(simple);
simple.splice(3, 0, plaintext[3]);
console.log(simple);*/
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
shuffle(alphabet);
console.log(alphabet);
let shuffle = () => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
