const data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function mapReduce(data) {
  const counts = {};

  // Étape de map : compter les occurrences de chaque élément
  data.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  // Convertir les résultats en tableau de paires clé-valeur
  const result = Object.entries(counts);

  return result;
}

const result = mapReduce(data);
console.log(result); // Output: [["apple", 3], ["banana", 2], ["orange", 1]]
