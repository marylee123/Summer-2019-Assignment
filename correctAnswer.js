const runScript = (e) => {
  let script = $("input").val();
  if(e.keyCode == 13){
    if(script == "m"){
      console.log("yay");
    }
    else{
      console.log("nope");
    }
  }
}
