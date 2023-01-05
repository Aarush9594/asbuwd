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
  
      user_name = localStorage.getItem("user name")
      document.getElementById("user_name").innerHTML = "Welcome "+user_name;
  
      function add_room(){
         room_name=document.getElementById("room_name").value;   
         firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"
         });
         localStorage.setItem("room name",room_name)
        window.location = "kwitter_page.html"
      }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log(Room_names)
        row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div> <hr>"
        document.getElementById("output").innerHTML+=row
        }
        );
       });
       }
  getData();
  
  function redirecttoroomname(name) {
    console.log(name)
    localStorage.setItem("room name",name)
    window.location = "kwitter_page.html";   
  }
  
  function logout(){
    localStorage.removeItem("room_name")
    localStorage.removeItem("user_name")
    window.location = "index.html"
  }
  
  
  
  
  
  