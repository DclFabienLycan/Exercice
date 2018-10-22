var carre = document.getElementById("carre");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
// var isActivated = false;

button1.addEventListener ("click", 
function () {
    carre.style.backgroundColor = "yellow";
}
);

button2.addEventListener ("click", 
function () {
    carre.style.backgroundColor = "blue"; 
}
);

button3.addEventListener ("click", 
function () {
    carre.style.width = "300px";
    carre.style.height = "300px";
}
);

button4.addEventListener ("click", 
function () {
    carre.style.backgroundColor = "transparent";
}
);

button5.addEventListener ("click",
function () {
    carre.style = "none";
}
)