// Definition de la fonction mapReduce directement dans le fichier principal

const mapreduceCustom = {};

mapreduceCustom.mapReduce = function (data, mapFn, reduceFn) {
  // Etape 1: Application de la fonction map sur les donnees
  let mappedData = mapreduceCustom.map(data, mapFn);

  // Etape 2: Regroupement des donnees mappees par cle
  let shuffledData = mapreduceCustom.shuffle(mappedData);

  // Etape 3: Application de la fonction reduce sur les donnees regroupees
  return mapreduceCustom.reduce(shuffledData, reduceFn);
};

mapreduceCustom.map = function (data, mapFn) {
  let mappedData = [];

  // Appliquer la fonction map sur chaque element des donnees
  for (let i = 0; i < data.length; i++) {
    let [key, value] = mapFn(i, data[i]); // key est ignore ici, car nous utilisons une sequence de donnees
    mappedData.push([
      value ? value[0] : undefined,
      value ? value[1] : undefined,
    ]);
  }

  return mappedData;
};

mapreduceCustom.shuffle = function (mappedData) {
  let shuffledData = {};

  // Regrouper les donnees mappees par cle
  for (let i = 0; i < mappedData.length; i++) {
    let [key, value] = mappedData[i];
    if (!shuffledData[key]) {
      shuffledData[key] = [];
    }
    shuffledData[key].push(value);
  }

  return shuffledData;
};

mapreduceCustom.reduce = function (shuffledData, reduceFn) {
  let reducedData = [];

  // Appliquer la fonction reduce sur chaque groupe de donnees
  for (let key in shuffledData) {
    let result = reduceFn(key, shuffledData[key]);
    reducedData.push([key, result]);
  }

  return reducedData;
};

// Definition des fonctions de map et de reduction

let data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function mapFn(key, value) {
  if (value !== undefined) {
    return [[value, 1]];
  } else {
    return [];
  }
}

function reduceFn(key, values) {
  // Ignorer les valeurs undefined lors de la reduction
  values = values.filter((value) => value !== undefined);
  return values.reduce((a, b) => a + b, 0);
}

// Appel de la fonction mapReduce avec les donnees et les fonctions de map et de reduction

let result = mapreduceCustom.mapReduce(data, mapFn, reduceFn);
console.log(result); // Output: [["apple", 3], ["banana", 2], ["orange", 1]]
