var carre = document.getElementById("carre");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
// rajouter une variable pour incrémentation de 50 px
var growUp = 100; 
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
    carre.style.marginTop = "-150px";
}   setTimeout(function () {
    carre.style.width = carre + "px";
}, 2000)
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
);

// Faire une condition liée à l'incrémentation des 50 px
// augmente de 50px par clic
// arrivé à 500px, reset.
button6.addEventListener("click", 
function gUp () {
    if (growUp <= 500) {
        // incrémenter de 50px
        document.getElementById("carre").style.width = growUp + "px";
        document.getElementById("carre").style.height = growUp + "px";
        growUp = growUp + 50;
    } else {
        // retourner a 100px
        document.getElementById("carre").style.width = growUp +"px";
        document.getElementById("carre").style.height = growUp +"px";
        growUp = 100;
    }
}
);