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
