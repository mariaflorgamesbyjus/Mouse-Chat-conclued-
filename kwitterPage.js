//LINKS FIREBASE

const firebaseConfig = {
      apiKey: "AIzaSyDjlgHa4XcWi-EGKIspJHJMQoLWrQ86xs0",
      authDomain: "live-chat-teste.firebaseapp.com",
      databaseURL: "https://live-chat-teste-default-rtdb.firebaseio.com",
      projectId: "live-chat-teste",
      storageBucket: "live-chat-teste.appspot.com",
      messagingSenderId: "966989881475",
      appId: "1:966989881475:web:8494f13c7d14fc91cfbbb6"
};

// Initialize Firebase


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Nomeouusername = localStorage.getItem("fixo")
roomName = localStorage.getItem("roomName")

function Batman() {

      GetMensagem = document.getElementById("mensagemtextodoinput").value

      firebase.database().ref(roomName).push({

            mensagem: GetMensagem,

            Nome: Nomeouusername,

            likes: 0
      })
      document.getElementById("mensagemtextodoinput").value = ""

}


function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebaseMessageId = childKey;
                        messageData = childData;
                        //Início do código

                        var Nome = messageData['Nome']
                        var likes = messageData['likes']
                        var mensagem = messageData['mensagem']

                        var linha01 = "<h4>" + Nome + "</h4>"
                        var linha02 = "<h5>" + mensagem + "</h5>"
                        var linha03LIKES = "<button id=" + firebaseMessageId + " onclick='DALIKEAUMENTARLIKE(this.id)' value = " + likes + ">" + likes + "</button>"
                        var linhas=linha01+linha02+linha03LIKES 
                        document.getElementById("output").innerHTML += linhas
                        
                   



                        //Fim do código
                  }
            });
      });
}
getData();

function DALIKEAUMENTARLIKE(messageId)
{

	buttonId = messageId;
	likes = document.getElementById(buttonId).value;
	updatedLikes = Number(likes) + 1;
	firebase.database().ref(roomName).child(messageId).update({
		likes : updatedLikes  
	 });

}