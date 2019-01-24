// Déclaration des variables.
var MaxNumber;
var random;
var chiffre;
var compteur=0;
var nrbCoups;

// Demande de chiffre max.
MaxNumber = parseInt(prompt("Choisissez votre Nombre Maximum", "000"));

// Nombre de coups max
// nbrCoups = parseInt(prompt("Définissez votre nombre de coups Max", "000"));
random = Math.floor(Math.random() * MaxNumber) + 1;
console.log("random");
// Définir le nombre de coup en fonction du choix du nombre max.
if (MaxNumber <= 101) {
    nbrCoups = 8;
} else if (MaxNumber <= 201) {
    nbrCoups = 15;
} else if (MaxNumber <= 501) {
    nbrCoups = 20;
} else {
    nbrCoups = 35;
}

// Mettre un compteur de coups.
// Demander au joueur de sélectionner un chiffre, pour trouver le random, suivant son nombre max.
var i;

for (i = 0; i < nbrCoups; i++) {
    chiffre = parseInt(prompt("Proposez un chiffre entre 1 et votre Nombre Maximum choisis", "000"));

    while (chiffre < 0 || chiffre > MaxNumber) {
        chiffre = parseInt(prompt("Rentres un nombre valide, Baka !!", "000"));
    }

    compteur++;

    if (chiffre == random) {
    console.log("Bonne pioche, c'est gagné !");
    break;
    // compteur qui compte le coup

    }else if (chiffre > random) {
        console.log("Le chiffre est trop grand !!");
        // compteur qui compte le coup
    } else if (chiffre < random) {
        console.log("Le chiffre est trop petit !");
        // compteur qui compte le coup
     } else {
         console.log("You failed, Noob !!");
     }
} 

// Les petits messages de compteur !
console.log(compteur);

if (compteur == 1) {
    console.log("Your are The Best !");
} else if (compteur <= 5) {
    console.log("Not Bad Baby !")
} else if (compteur <= 10) {
    console.log("Hmm, you can do better");
} else if (compteur <= 15) {
    console.log("So bad");
} else {
    console.log("Try Again Noob !");
}