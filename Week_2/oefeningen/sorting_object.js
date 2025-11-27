//Schrijf een functie die een array van objecten sorteert op basis van een eigenschap van het object.

function sorterenOpEigenschap(objecten, eigenschap) {
  return [...objecten].sort((a, b) => {
    if (a[eigenschap] < b[eigenschap]) return 1;
    if (a[eigenschap] > b[eigenschap]) return -1;
  });
} // Implementeer de logica hier

let objectenArray = [
  { naam: "Anna", leeftijd: 30 },
  { naam: "Bob", leeftijd: 25 },
  { naam: "Charlie", leeftijd: 35 },
];
let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, "naam");

console.log(gesorteerdOpNaam); // geeft de array gesorteerd op naam
