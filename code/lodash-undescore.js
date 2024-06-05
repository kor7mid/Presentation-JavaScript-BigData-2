// Assurez-vous d'installer Lodash avant de lancer ce fichier avec `npm install lodash`
const _ = require('lodash');

//Lodash est une bibliothèque utilitaire JavaScript qui fournit
//des fonctions utiles pour travailler avec des tableaux, des objets, des chaînes, etc.

// Exemple avec Lodash
let utilisateurs = [
  { nom: 'Alice', age: 30 },
  { nom: 'Bob', age: 25 },
  { nom: 'Charlie', age: 35 },
];

// Utilisation de la fonction `sortBy`
let utilisateursTries = _.sortBy(utilisateurs, ['age']); //Utilise la fonction sortBy de Lodash pour trier le tableau utilisateurs par la propriété age.
console.log('Utilisateurs triés par âge:', utilisateursTries);

// let utilisateursAge25 = _.filter(utilisateurs, { age: 25 });
// console.log('Utilisateurs âgés de 25 ans:', utilisateursAge25);
// //_.filter(collection, [predicate=_.identity]): Crée un nouveau tableau contenant tous les éléments de
// // collection qui passent le test implémenté par predicate

// // Utilisation de la fonction `groupBy` pour grouper les utilisateurs par âge
// let groupesParAge = _.groupBy(utilisateurs, 'age');
// console.log('Utilisateurs groupés par âge:', groupesParAge);
// // _.groupBy(collection, [iteratee=_.identity]): Crée un objet composé de clés générées à partir
// // des résultats de l'application de iteratee à chaque élément de collection

// // Utilisation de la fonction `uniqBy` pour obtenir des utilisateurs uniques par âge
// let utilisateursUniquesParAge = _.uniqBy(utilisateurs, 'age');
// console.log('Utilisateurs uniques par âge:', utilisateursUniquesParAge);
// //_.uniqBy(array, [iteratee=_.identity]): Crée un tableau de valeurs uniques,
// //en utilisant iteratee pour déterminer l'unicité. Ici, iteratee est 'age',
// //donc les utilisateurs uniques sont déterminés par leur âge
