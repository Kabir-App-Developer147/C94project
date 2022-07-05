
var firebaseConfig = {
      apiKey: "AIzaSyAqppROH8trLjk-bfLcrlCiSqdy1qvOLXE",
      authDomain: "c93-kwitter-76f07.firebaseapp.com",
      databaseURL: "https://c93-kwitter-76f07-default-rtdb.firebaseio.com",
      projectId: "c93-kwitter-76f07",
      storageBucket: "c93-kwitter-76f07.appspot.com",
      messagingSenderId: "99525006207",
      appId: "1:99525006207:web:9a1618c0f15964041e404a"
    };
    
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
