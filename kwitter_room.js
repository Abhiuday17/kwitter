
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBN4eslWB3TYySVy1eQG3YF7M0pq9A4kIA",
      authDomain: "kwitter-52ee0.firebaseapp.com",
      databaseURL: "https://kwitter-52ee0-default-rtdb.firebaseio.com",
      projectId: "kwitter-52ee0",
      storageBucket: "kwitter-52ee0.appspot.com",
      messagingSenderId: "683869804024",
      appId: "1:683869804024:web:cb7a7a0c17ea1156a5720d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("userName")
    document.getElementById("user_name").innerHTML="Welcome "+user_name
    
    function addRoom(){
          room_name = document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room "

          })
          localStorage.setItem("ROOM_NAME", room_name)
          window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row="<div class = 'room_name' id = "+ Room_names+" onclick = 'redirectToroom_name(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row
      

      //End code
      });});}
getData();

function redirectToroom_name(name){
      localStorage.setItem("ROOM_NAME",name)
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("ROOM_NAME")
      localStorage.removeItem("userName")
      window.location="index.html"
}


