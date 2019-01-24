var restart = document.getElementById("button2");

function shifumi () {
    // Mettre les variables
    var bouton = document.getElementById("stone");
    var bouton2 = document.getElementById("paper");
    var bouton3 = document.getElementById("scissors");
    var Vous = document.getElementById("You");
    var IA = document.getElementById("ordi");
    var score; 
    var joueur;
    
    // Créer le choix aléatoire de l'ordi
    var IA2;
    
    function ChoixOrdi () {
        IA2 = Math.floor(Math.random() *3);
        if (IA2 == 0) {
            IA.style.backgroundImage = "url('img/if-39-harry-potter-colour-philosophers-stone-2730349_88175.svg')";
        } else if (IA2 == 1) {
            IA.style.backgroundImage = "url('./img/receipt-paper_icon-icons.com_56152.svg')";
        } else if (IA2 == 2) {
            IA.style.backgroundImage = "url('./img/Cut-80_icon-icons.com_57343.svg')";
        }
    };
    
    // functions
    // Créer la fonction résultat
    function Resultat () {
        if (joueur == 0 && IA2 == 1) {
            score = "You Loose !!";
            document.getElementById("resultats").innerHTML = score;
        } else if (joueur == 0 && IA2 == 2) {
            score = "You Win !!";
            document.getElementById("resultats").innerHTML = score;
        } else if (joueur == 1 && IA2 == 0) {
            score = "You Win !!";
            document.getElementById("resultats").innerHTML = score;
        } else if (joueur == 1 && IA2 == 2) {
            score = "You Loose !!";
            document.getElementById("resultats").innerHTML = score;
        } else if (joueur == 2 && IA2 == 0) {
            score = "You Loose !!";
            document.getElementById("resultats").innerHTML = score;
        } else if (joueur == 2 && IA2 == 1) {
            score = "You Win !!";
            document.getElementById("resultats").innerHTML = score;
        } else {
            score = "No one won this !!"
            document.getElementById("resultats").innerHTML = score;
        }
        // document.getElementById("resultats").innerHTML = score;
    };
    // Créer le système réactif des clics
    bouton.addEventListener ("click",
    function () {
        Vous.style.backgroundImage = "url('img/if-39-harry-potter-colour-philosophers-stone-2730349_88175.svg')";
        joueur = 0;
        ChoixOrdi ();
        Resultat ();
    }
    );
    
    bouton2.addEventListener ("click", 
    function () {
        Vous.style.backgroundImage = "url('./img/receipt-paper_icon-icons.com_56152.svg')";
        joueur = 1;
        ChoixOrdi ();
        Resultat ();
    }
    );
    
    bouton3.addEventListener ("click", 
    function () {
        Vous.style.backgroundImage = "url('./img/Cut-80_icon-icons.com_57343.svg')";
        joueur = 2;
        ChoixOrdi ();
        Resultat ();
    }
    );
};

shifumi ();

// restart.addEventListener ("click",
// location.reload (), false
// );
