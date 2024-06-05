// var
for (var i = 0; i < 3; i++) {
  console.log('var i dans la boucle:', i);
}
console.log('var i après la boucle:', i); // var est fonction-scope

// let
for (let j = 0; j < 3; j++) {
  console.log('let j dans la boucle:', j);
}
// console.log("let j après la boucle:", j); // let est bloc-scope, donc j n'est pas accessible ici

// const
const k = 10;
console.log('const k:', k);
// k = 20; // Cette ligne génère une erreur car k est une constante
