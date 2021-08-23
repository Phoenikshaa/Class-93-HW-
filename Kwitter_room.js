var firebaseConfig = {
    apiKey: "AIzaSyB3sbV3UFZtkG_x0ZgT47NNqbBVEHS86sw",
    authDomain: "chat-app-62f76.firebaseapp.com",
    databaseURL: "https://chat-app-62f76-default-rtdb.firebaseio.com",
    projectId: "chat-app-62f76",
    storageBucket: "chat-app-62f76.appspot.com",
    messagingSenderId: "719477002383",
    appId: "1:719477002383:web:e1308150b72386a2b3a0fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

