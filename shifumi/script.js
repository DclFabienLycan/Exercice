// Mettre les variables
var bouton = document.getElementById("stone");
var bouton2 = document.getElementById("paper");
var bouton3 = document.getElementById("scissors");
var Vous = document.getElementById("You");
var IA = document.getElementById("ordi");
var score = document.getElementById("resultats");
var restart = document.getElementById("button2");

// function
bouton.addEventListener ("click",
function () {
    Vous.style.backgroundImage = "url('img/if-39-harry-potter-colour-philosophers-stone-2730349_88175.svg')";
}
);

bouton2.addEventListener ("click", 
function () {
    document.getElementById("You").style.backgroundImage = "url('./img/receipt-paper_icon-icons.com_56152.svg')";
}
);

// function VotreChoix3 () {
//     document.getElementById("You").img.src = "...";
// };

// Créer le système réactif des clics

// Créer le choix aléatoire de l'ordi
var IA2;
IA2 = Math.floor(Math.random() *3);
console.log(IA2);
function ChoixOrdi () {
    // IA = Math.floor(Math.random() *3);
    if (IA2 == 0) {
        IA = bouton;
        console.log(bouton);
    } else if (IA2 == 1) {
        IA = bouton2;
        console.log(bouton2);
    } else if (IA2 == 2) {
        IA = bouton3;
        console.log(bouton3);
    }
    // console.log(IA);
};
ChoixOrdi ();

// function VotreChoix (vous) {
//     Vous = image choisis suivant le click;
//     choix IA;
// }

// function ChoixOrdi (IA) {
//     IA = Math.random(); avec source image;
// }

// function 