//YOUR FIREBASE LINKS

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
room_name = localStorage.getItem("ROOM_NAME")

function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            like:0,
            message:msg

      })
      document.getElementById("msg").value=""

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        console.log(firebase_message_id);
                        console.log(message_data);
                        Name = message_data["name"]
                        message = message_data["message"]
                        like = message_data["like"]

                        name_tag = "<h4>" + Name + "<img class = 'user_tick' src = 'tick.png'></h4>"
                        message_tag = "<h4 class = 'message_h4'>"+ message + "</h4>"
                        button_tag = "<button class = 'btn btn-warning' id = "+ firebase_message_id +" value = "+like+" onclick = 'updateLikes(this.id)'>"
                        span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : "+ like + "</span> </button> <hr>"
                        row = name_tag + message_tag + button_tag + span_tag;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();

function updateLikes(message_id){
      currentLikes = document.getElementById(message_id).value
      updated_likes = Number(currentLikes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}

function logout(){
      localStorage.removeItem("ROOM_NAME")
      localStorage.removeItem("userName")
      window.location="index.html"
}


