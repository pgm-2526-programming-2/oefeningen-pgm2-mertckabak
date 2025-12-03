// selecteert "de rest"
function sum(a, b, ...rest) {
  console.log(rest);
  return a + b + rest.reduce((prev, curr) => prev + curr, 0);
}

//rest operator verzamelt de overige argumenten en slaat deze op.

//rest operator is altijd op het einde en binnen haakjes.

console.log(sum(1, 2, 3, 4));
