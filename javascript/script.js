// var a=15;

// var b=30;

// var c=a+b;

// console.log(c);
// console.log(c=a-b);
// console.log(c=a*b);
// console.log(c=a/b);
// console.log(c=a%b);

// a=12;
// a=a+5;
// a=a+5;
// console.log(a);

// a++;
// console.log(a);

// console.clear();

// var a;
// var b;

// a = parseInt(prompt("a?", "000"));
// b = parseInt(prompt("b?", "000"));

// function add() {
//     var c;
//     c="choucroute";
//     console.log(a+b);  
//     console.log(c);

// };

// add();

// var age;
// var annee;
// var c;
// var annee2;
// var an;

// annee = 2018;

// age = parseInt(prompt("Quel âge avez-vous ?", "000"));

// c = annee-age;

// console.log("Vous êtes né en "+c);

// annee2 = parseInt(prompt("Donnez-nous une année", "000"));

// an = annee2-c;

// // console.log("En "+annee2+", vous auriez "+ an, " ans.");

// if (annee2 < annee) {
//     console.log("En "+annee2+", vous aviez "+ an, " ans.");
    
// } else if (annee2 > annee) {
//     console.log("En "+annee2+", vous aurez "+ an, " ans.");
// } else {
//     console.log("En "+annee2+", vous avez "+ an, " ans.");
// }

// different type operators

// console.log(true && true); // true
// console.log(1==1 && 1<2); // true

// console.log(true && false); // false
// console.log(1==1 && 1>2); // false

// // OU

// console.log(true || false); // true
// console.log(1==1 || 1>2); // true

// // conditions

// var a = 5;
// var b = 12;

// if (a!=b) {
//     console.log("les chiffres sont différents")
// }

// var a = 5;
// var b = 5;

// if (a==b) {
//     console.log("les chiffres sont égaux")
// }

// // else 

// var a = 5;
// var b = 6;
// var c = 7;

// if (a == b) {
//     console.log("a et b sont égaux");
// } else if (a == c) {
//     console.log("a et c sont égaux");
// } else if (b == c) {
//     console.log("b et c sont égaux");
// } else {
//     console.log("tous les chiffres sont différents");
// }

// var age;
// var annee;
// var c;
// var annee2;
// var an;

// annee = 2018;

// age = parseInt(prompt("Quel âge avez-vous ?", "000"));

// c = annee-age;

// console.log("Vous êtes né en "+c);

// annee2 = parseInt(prompt("Donnez-nous une année", "000"));

// an = annee2-c;

// console.log("En "+annee2+", vous auriez "+ an, " ans.");

// if (age > 18) {
//     console.log("Vous êtes majeur !");
    
// } else if (age < 18) {
//     console.log("Vous êtes mineur :o");
// } if (age > 60) {
//     console.log("Oulala, c'est l'heure de la retraite !!")
// } else {
//     console.log("c'est encore la jeunesse !")
// }

// var chiffre;
// var random;

// random = Math.floor(Math.random() * 100) + 1;


// chiffre = parseInt(prompt("Proposez un chiffre entre 1 et 100", "000"));

// if (chiffre > random) {
//     console.log("Le chiffre est trop grand !!");
// } else if (chiffre < random) {
//     console.log("Le chiffre est trop petit !");
// } else  {
//     console.log("Bonne pioche, c'est gagné !")
// }

// Demande un chiffre

    // si le chiffre est bon, c'est gagné !

    // si le chiffre est faux, redemande un chiffre

// while (chiffre != random) {
//     chiffre = parseInt(prompt("Proposez un chiffre entre 1 et 100", "000"));
//     if (chiffre > random) {
//         console.log("Le chiffre est trop grand !!");
//     } else if (chiffre < random) {
//         console.log("Le chiffre est trop petit !");
//     } else  {
//         console.log("Bonne pioche, c'est gagné !")
//     }
// } 

//  Déclaration des variables.

// var MaxNumber;
// var random;
// var chiffre;
// var compteur=0;
// var nrbCoups;

// // Demande de chiffre max.

// MaxNumber = parseInt(prompt("Choisissez votre Nombre Maximum", "000"));

// // Nombre de coups max
// // nbrCoups = parseInt(prompt("Définissez votre nombre de coups Max", "000"));

// random = Math.floor(Math.random() * MaxNumber) + 1;
// console.log(random);

// // Définir le nombre de coup en fonction du choix du nombre max.
// if (MaxNumber <= 101) {
//     nbrCoups = 8;
// } else if (MaxNumber <= 201) {
//     nbrCoups = 15;
// } else if (MaxNumber <= 501) {
//     nbrCoups = 20;
// } else {
//     nbrCoups = 35;
// }

// // Mettre un compteur de coups.
// // Demander au joueur de sélectionner un chiffre, pour trouver le random, suivant son nombre max.
// var i;

// for (i = 0; i < nbrCoups; i++) {
//     chiffre = parseInt(prompt("Proposez un chiffre entre 1 et votre Nombre Maximum choisis", "000"));

//     while (chiffre < 0 || chiffre > MaxNumber) {
//         chiffre = parseInt(prompt("Rentres un nombre valide, Baka !!", "000"));
//     }

//     compteur++;

//     if (chiffre == random) { 
//     console.log("Bonne pioche, c'est gagné !");
//     break;
//     // compteur qui compte le coup

//     } else if (chiffre > random) {
//         console.log("Le chiffre est trop grand !!");
//         // compteur qui compte le coup
//     } else if (chiffre < random) {
//         console.log("Le chiffre est trop petit !");
//         // compteur qui compte le coup
    
// }
// }

// // Les petits messages de compteur !

// console.log(compteur);

// if (compteur == 1) {
//     console.log("Your are The Best !");
// } else if (compteur <= 5) {
//     console.log("Not Bad Baby !")
// } else if (compteur <= 10) {
//     console.log("Hmm, you can do better");
// } else if (compteur <= 15) {
//     console.log("So bad");
// } else {
//     console.log("Try Again Noob !");
// }

a = parseInt(prompt("1, 2 ou 3?"));

switch(a) {
    case 1:
    console.log("Vous avez choisis 1");
    break;
    case 2:
    console.log("Vous avez choisis 2");
    break;
    case 3:
    console.log("Vous avez choisis 3");
    break;
    default:
    console.log("J'ai dis 1, 2 ou 3, idiot !");
}