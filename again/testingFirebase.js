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

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");

  btnLogin.addEventListener("click", e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener("click", e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log("not logged in");
    }
  });
}());
