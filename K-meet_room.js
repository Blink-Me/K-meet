
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBXSGpQpIa7FAVAV7K-Bruh20cnqCWJtAg",
      authDomain: "practice-test-88883.firebaseapp.com",
      databaseURL: "https://practice-test-88883-default-rtdb.firebaseio.com",
      projectId: "practice-test-88883",
      storageBucket: "practice-test-88883.appspot.com",
      messagingSenderId: "584515471490",
      appId: "1:584515471490:web:e7fb3a7c59788df8c1cc9b",
      measurementId: "G-K19MC3JQXY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var username=localStorage.getItem("user_namekey")
    document.getElementById("welcome").innerHTML="Welcome "+username+"!";

    function addroom(){
      var roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_namekey", roomname);
      window.location="K-meet_page.html";
    }
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
      {
      document.getElementById("output").innerHTML ="";
      snapshot.forEach(function(childSnapshot) 
      {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     var row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>"
     document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logoff(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}