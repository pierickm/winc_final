const dropdown = document.getElementById("dropdown");

const hamburgerButton = document.getElementById("burger-menu");

hamburgerButton.addEventListener("mouseover", function() {
    dropdown.classList.add("show");
});
hamburgerButton.addEventListener("mouseout", function() {
    dropdown.classList.remove("show");
});

const body = document.body;
const colorText = document.getElementById("color-txt");
const home = document.getElementById("home");
home.addEventListener("click",function home(){
body.classList.remove("blue-bg", "yellow-bg", "green-bg", "red-bg");
dropdown.classList.remove("show");
colorText.innerHTML="";
document.getElementById("radio-home").checked = true;
});

const blueButton = document.getElementById("blue-btn");

blueButton.addEventListener("click", function blue(){
    body.classList.remove("home-bg", "yellow-bg", "green-bg", "red-bg");
    body.classList.toggle("blue-bg");
    dropdown.classList.remove("show");
    colorText.innerHTML="Blue";
    document.getElementById("radio-blue").checked = true;
});

const yellowButton = document.getElementById("yellow-btn");

yellowButton.addEventListener("click", function yellow(){
    body.classList.remove("blue-bg", "home-bg", "green-bg", "red-bg");
    body.classList.toggle("yellow-bg");
    dropdown.classList.remove("show");
    colorText.innerHTML="Yellow";
    document.getElementById("radio-yellow").checked = true;
});

const greenButton = document.getElementById("green-btn");

greenButton.addEventListener("click", function green(){
    body.classList.remove("blue-bg", "home-bg", "yellow-bg", "red-bg");
    body.classList.toggle("green-bg");
    dropdown.classList.remove("show");
    colorText.innerHTML="Green";
    document.getElementById("radio-green").checked = true;
});

const redButton = document.getElementById("red-btn");
    redButton.addEventListener("click", function(){
        body.classList.remove("blue-bg", "yellow-bg", "green-bg", "home-bg");
        body.classList.toggle("red-bg");
        dropdown.classList.remove("show");
        colorText.innerHTML="Red";
        document.getElementById("radio-red").checked = true;
    });



document.addEventListener("keydown", function(event) {

    if (event.key == 1) {
        body.classList.remove("blue-bg", "yellow-bg", "green-bg", "red-bg");
        body.classList.toggle("home-bg");
        colorText.innerHTML="";
    } else if(event.key == 2){
        body.classList.remove("home-bg", "yellow-bg", "green-bg", "red-bg");
        body.classList.toggle("blue-bg");
        colorText.innerHTML="Blue";
    }else if(event.key == 3){
        body.classList.remove("blue-bg", "home-bg", "green-bg", "red-bg");
        body.classList.toggle("yellow-bg");
        colorText.innerHTML="Yellow";
    }else if(event.key == 4) {
        body.classList.remove("blue-bg", "yellow-bg", "home-bg", "red-bg");
        body.classList.toggle("green-bg");
        colorText.innerHTML="Green";
    }else if(event.key == 5) {
        body.classList.remove("blue-bg", "yellow-bg", "green-bg", "home-bg");
        body.classList.toggle("red-bg");
        colorText.innerHTML="Red";
    }else {
        alert("This key has no color assigned to it!");
    }
});