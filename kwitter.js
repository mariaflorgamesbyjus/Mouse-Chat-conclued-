function addUser(){

nome = document.getElementById("userName").value
localStorage.setItem("fixo", nome)

window.location = "kwitterRoom.html"

}