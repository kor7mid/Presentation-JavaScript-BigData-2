// Conditions
let x = 10;
if (x > 5) {
  console.log('x est plus grand que 5');
} else if (x === 5) {
  console.log('x est egal à 5');
} else {
  console.log('x est plus petit que 5');
}

// Boucles
for (let i = 0; i < 5; i++) {
  console.log('i:', i);
}

let j = 0;
while (j < 5) {
  console.log('j:', j);
  j++;
}

// Fonctions
function addition(a, b) {
  return a + b;
}

const multiplication = (a, b) => a * b; //fonctions fleches

console.log('Addition:', addition(2, 3));
console.log('Multiplication:', multiplication(2, 3));
