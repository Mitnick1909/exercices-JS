//Exercice 2 : Somme des nombres pairs

let number =parseInt(prompt("Entrez un nombre entier :"));

// Initialiser la somme à 0
let somme = 0;

// Vérifier que l'utilsateur rentre un nombre  
if (!isNaN(number) && number > 0) {
    // Parcourir les nombres de 1 à "number"
    for (let i = 2; i <= number; i += 2) {
        somme += i; // Ajouter les nombres pairs à la somme
    }

    console.log("La somme des nombres pairs entre 1 et " + number + " est : " + somme);
    
} 

else {
    console.log("Veuillez entrer un nombre entier positif.");
    
}
