//Maak een functie genaamd combineAllArrays(), deze functie kan een ongelimiteerd aantal arrays ontvangen. Return éen array met enkel de waardes van de doorgegeven arrays.

function combineAllArrays(...arrays) {
  return arrays.flat();
}

console.log(combineAllArrays([10, 12], [5, 4])); // [10, 12, 5, 4]
console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6])); // [10, 12, 5, 4, 6, 6]
