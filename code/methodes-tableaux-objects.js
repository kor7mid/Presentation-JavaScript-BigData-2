let nombres = [1, 2, 3, 4, 5];

// Méthode map
let carrés = nombres.map((n) => n * n);
console.log('Carrés:', carrés);

// Méthode filter
let pairs = nombres.filter((n) => n % 2 === 0);
console.log('Pairs:', pairs);

// Méthode reduce
let somme = nombres.reduce((acc, n) => acc + n, 0);
console.log('Somme:', somme);
