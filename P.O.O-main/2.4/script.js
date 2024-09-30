var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoimg = document.querySelector(".navimg");
var h3 = document.querySelector("h3");
h3.innerText = "New Title";

var petimg = document.querySelector("#pet-img");

function switchimg(){
    petimg.src = "logo.png"
}

function setActive(element){
    if(element.classlist.includes("dark-mode")){
        element.innerText = "cambiar al modo claro";
        element.classlist.remove("dark-mode");
    } else{
        element.innerText = "cambiar al modo oscuro";
        element.classlist.add("dark-mode")
    }
}