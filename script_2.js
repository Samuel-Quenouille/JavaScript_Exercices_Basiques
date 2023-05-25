//2.2.1 Calculs rapides
// Définition de la fonction factorielle
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
let entier = parseInt(nombre);

function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
}
  
// Calcul de la factorielle
let resultat = factorielle(entier);
  
// Affichage du résultat dans la console
console.log("Le résultat est : " + resultat);
