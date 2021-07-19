document.getElementById("avatar").src = "../img/pato.png";
document.getElementById("name").value = "Pablo";
document.getElementById("lastName").value = "Laborde González";

function fnConsole() {
    console.log(("%c Apellido: " + document.getElementById("lastName").value), "background: black; color: green;");
}