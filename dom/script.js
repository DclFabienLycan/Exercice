// var laDivision = document.getElementById("yo");
// var lesClasses = document.getElementsByClassName("bouh");

// laDivision.innerHTML = "Hello World";

// lesClasses.innerHTML = "J'aime le code";


// var desApprenants = ["Fabien", "Edains", "Quentin"];
// desApprenants[3]= "Chris";
// console.log(desApprenants);

var laDivision = document.getElementById("yo");
var isActivated = false;

laDivision.addEventListener ("click",
function () {
    if (isActivated === false) {    
    laDivision.style.width = "500px";
    laDivision.style.height = "500px";
    isActivated = true;
} else {
    laDivision.style.width = "250px";
    laDivision.style.height = "250px";
    isActivated = false;
}
}
);