function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

function division(nombreA, nombreB) {
    if (nombreB == 0){
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

// On entre ici dans la boucle principale
let restart = false;
do {
    // Etape 1 : Demander un mode de calcul
    do {
        var choixOperation = Number(prompt("Que souhaitez-vous faire ? (tapez le numéro correspond à l'opération)\n\n 1 - addition \n 2 - multiplication \n 3 - soustraction \n 4 - division \n "));
    } while( isNaN(choixOperation) == true || choixOperation == null || choixOperation <= 0 || choixOperation > 4  );

    switch(choixOperation){
        case 1 :
            alert("Vous avez choisi de faire une addition");
            break;
        case 2 :
            alert("Vous avez choisi de faire une multiplication");
            break;
        case 3 :
            alert("Vous avez choisi de faire une soustraction");
            break;
        case 4 :
            alert("Vous avez choisi de faire une division");
            break; 

    }

    //Etape 2 : Demander deux nombres à utiliser
    do {
        var premierNombre = Number(prompt("Tapez un nombre."));
        if(isNaN(premierNombre)){
            alert("Oups, ce n'est pas un nombre...");
        }
    } while(isNaN(premierNombre));

    do {
        var deuxiemeNombre = Number(prompt("Tapez un autre nombre."));
        if(isNaN(deuxiemeNombre)){
            alert("Oups, ce n'est pas un nombre...");
        }
    } while(isNaN(deuxiemeNombre));

    // Etape 3 : Créer les 4 fonctions
    // voir fonctions placées en haut

    try {

        switch(choixOperation){
            case 1 :
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2 :
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3 :
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 4 :
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
            default :
                throw new Error("Une erreur est survenue.")
        }

        alert("Voici le résultat = " + resultat);

    } catch (error) {

        alert(error);
        
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
    
} while(restart)