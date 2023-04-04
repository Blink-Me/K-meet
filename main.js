function login(){
    var user_name=document.getElementById("user").value;
    localStorage.setItem("user_namekey",user_name);
    window.location="K-meet_room.html";
}