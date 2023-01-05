var firebaseConfig = { 
    apiKey: "AIzaSyCwil7HATWH4zt-YZbDepHdE28f-Xa7KGw", 
    authDomain: "anisha-wuorkb.firebaseapp.com", 
    databaseURL: "https://anisha-wuorkb.firebaseio.com", 
    projectId: "anisha-wuorkb", 
    storageBucket: "anisha-wuorkb.appspot.com", 
    messagingSenderId: "832944856594", 
    appId: "1:832944856594:web:b45d824353e96b204b82cb", 
     measurementId: "G-QHPR0JRXGW" }
      firebase.initializeApp(firebaseConfig);

      var user_name = localStorage.getItem("user name")
      var room_name = localStorage.getItem("room name")
      
 function send() {
 var msg = document.getElementById("msg").value
 firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
 });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       console.log(firebase_message_id)
       console.log(message_data)
       name1 = message_data['name']
       message1 = message_data['message']
       like1 = message_data['like']
       name_with_tag = "<h4>"+name1+"<img class='user_tick' src ='tick.png'</h4>"
       message_with_tag = "<h4 class='message_h4'>"+message1+"</h4>"
       like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like1+" onclick='update_like(this.id)'>"
       span_with_tag = " <span class='glyphicon glyphicon-thumbs-up'>Like: "+like1+"</span></button><hr>"
       row = name_with_tag+message_with_tag+like_button+span_with_tag
       document.getElementById("output").innerHTML += row
    } });  }); }
getData();

function update_like(message_id){
 console.log(message_id)
 button_id = message_id
 Likes = document.getElementById(button_id).value
 //console.log(likes)
 updated_likes1 = Number(Likes)+1
 console.log(updated_likes1)
 firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes1
 })
}

