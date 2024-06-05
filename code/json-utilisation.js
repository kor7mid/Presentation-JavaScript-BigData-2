// Objet JavaScript
let utilisateur = {
  nom: 'Alice',
  age: 30,
  pays: 'France',
};

// Conversion de l'objet en JSON
let utilisateurJSON = JSON.stringify(utilisateur);
console.log('JSON:', utilisateurJSON);

// Conversion du JSON en objet
let utilisateurObjet = JSON.parse(utilisateurJSON);
console.log('Objet:', utilisateurObjet);
