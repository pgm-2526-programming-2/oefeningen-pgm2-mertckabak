const matrix = [
  [1, 2, 3],
  [5, 6, 7],
];

//Gegeven de tweedimensionale array matrix uit de vorige oefening. Schrijf een functie om een getal op te halen en te loggen op basis van de meegegeven column en row.

function getNumberFromMatrix(row, column) {
  console.log(matrix[row][column]);
}

getNumberFromMatrix(0, 2);
