//Schrijf een functie die alle even getallen uit een array filtert en een nieuwe array teruggeeft met enkel de even getallen.

function filterEvenGetallen(getallen) {
  return getallen.filter((getal) => getal % 2 === 0);
} // Implementeer de logica hier

let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen);
console.log(evenGetallen); // geeft [8, 6, 10]
