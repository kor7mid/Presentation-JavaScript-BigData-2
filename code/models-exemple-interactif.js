const readline = require('readline');
const tf = require('@tensorflow/tfjs');

// Creation du modèle
const model = tf.sequential(); //modèle sequentiel compose d'une seule couche
model.add(tf.layers.dense({ units: 1, inputShape: [1] })); // une seule unite de neurone  et une seule valeur en entree
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' }); //'sgd' (descente de gradient stochastique)

//'meanSquaredError' (erreur quadratique moyenne)

// Chargement du modèle entraîne (si disponible)
// Remplacez 'path/to/saved_model' par le chemin vers votre modèle sauvegarde
// Par exemple : await model.load('model/saved_model.json');
// Si vous n'avez pas de modèle sauvegarde, vous pouvez ignorer cette etape
// await model.load('path/to/saved_model');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  'Modèle prêt. Entrez une valeur pour la prediction (appuyez sur Ctrl + C pour quitter) :'
);

rl.on('line', async (input) => {
  const inputNumber = parseFloat(input);
  if (!isNaN(inputNumber)) {
    const inputTensor = tf.tensor2d([[inputNumber]]);
    const output = model.predict(inputTensor);
    const prediction = output.dataSync()[0];
    console.log(`Prediction pour ${inputNumber} : ${prediction}`);
  } else {
    console.log('Veuillez entrer un nombre valide.');
  }
});
