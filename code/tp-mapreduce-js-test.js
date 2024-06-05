const fs = require('fs'); //système de fichiers

// Lire le fichier data.txt
const data = fs.readFileSync('./data/pg17489.txt', 'utf8');

// Séparer le texte en mots
const words = data.split(/\s+/); // à un ou plusieurs espaces blancs

// Fonction map: prend chaque mot et l'associe au nombre 1
function map(data) {
  return data.map((word) => [word, 1]);
}

// Fonction shuffle: réorganise les données par clé
function shuffle(mappedData) {
  const shuffled = {};
  mappedData.forEach(([word, count]) => {
    if (!shuffled[word]) {
      shuffled[word] = [];
    }
    shuffled[word].push(count);
  });
  return shuffled;
}

// Fonction reduce: additionne les occurrences de chaque mot
function reduce(shuffledData) {
  const reduced = {};
  for (const word in shuffledData) {
    reduced[word] = shuffledData[word].reduce((a, b) => a + b, 0);
  }
  return reduced;
}

// Appliquer MapReduce
const mapped = map(words);
const shuffled = shuffle(mapped);
const result = reduce(shuffled);

// Construire le contenu à écrire dans le fichier résultat
let output = 'Résultat du MapReduce:\n';
for (const word in result) {
  output += `${word}: ${result[word]}\n`;
}

// Écrire le résultat dans un fichier
fs.writeFileSync('./data/result.txt', output, 'utf8');

console.log('Le résultat a été enregistré dans result.txt');
