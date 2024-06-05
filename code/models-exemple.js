const tf = require('@tensorflow/tfjs');

// Creation d'un modèle lineaire
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compilation du modèle
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Donnees d'entraînement
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Entraînement du modèle
model.fit(xs, ys, { epochs: 100 }).then(() => {
  // Prediction avec le modèle entraîne
  const output = model.predict(tf.tensor2d([5], [1, 1]));
  output.print();
});
