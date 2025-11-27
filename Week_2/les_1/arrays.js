const games = ["Super mario bros", "Zelda", "N+ game", "Pokemon"];
const favoriteGames = [
  {
    name: "Super mario",
    releaseYear: 1980,
  },
  {
    name: "Zelda",
    releaseYear: 1984,
  },
];

const allGames = new Array();
Array.isArray(games); // true

const secondGame = games[1]; // "Zelda"
const allSecondGame = games.at(1); // "Zelda"
const lastGame = games.at(-1); //games[length - 1] = "N+ game"

const values = [
  "Adriaan",
  function () {
    console.log("Hello");
  },
];

const amountOfFavoriteGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;
//console.log(games);

const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof array); // "string"

//stringArray.push(5); dit kan niet
numbers.push(5);

const numberString = JSON.stringify(numbers);
console.log(stringArray, numbers); // [1, 2, 3, 4, 5]

const students = ["Nick", "Mert", "Jens"];
const people = ["Nick", "Mert", "Jens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(teacher === friend); // true
console.log(students === people); // false

// mijn oplossing
function areArrayEqual() {
  const numberStudents = JSON.stringify(students);
  const numberPeople = JSON.stringify(people);

  if (numberStudents === numberPeople) {
    return true;
  } else {
  }
}

console.log(areArrayEqual());

// oplossing docent, via dit kan je elke arrays vergelijken

function areArrayEqual(arrOne, arrTwo) {
  // if (arrOne.length !== arrTwo.length) {
  return false;
  // }

  return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
}

console.log(areArrayEqual(students, people)); // true

const matrix = [
  ["0", "0", "0", "0"],
  ["0", "x", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
];

//matrix[1][1]; // "x"

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color); // for of loop
}

colors.forEach((color) => {
  console.log(color); // for each loop
});

//array.forEach(function (color) {
//  console.log(color); // for each loop hetzelfde als hierboven
//});

colors.push("purple"); //voegt een element toe aan het einde van de array
colors.pop(); //verwijdert het laatste element van de array
colors.unshift("begin van het array tovoegen"); //voegt een element toe aan het begin van de array
colors.shift(); //verwijdert het eerste element van de array

console.log("numbers", numbers);
const doubleNumbers = numbers.map((value, index) => {
  if (value === 2) {
    return value;
  }

  return value * 2;
});

console.log("double numbers", doubleNumbers);

console.log("Double number as string ", doubleNumbers.join(" | "));

const numbersWithoutEight = doubleNumbers.filter((value) => {
  return value !== 8;
});

console.log(numbersWithoutEight);

numbers.some((number) => {
  return number === 8;
});

numbers.every((number) => {
  return number === 8;
});

// Reduce => waarde uit array halen en er 1 waarde van maken
// van een array naar 1 getal te gaan (meestal een som/optelling)

const sales = [4, 10, 6];

const totalSales = sales.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

console.log("Total sales: ", totalSales);

//loop 1: 0 + 4 = 4
//loop 2: 4 + 10 = 14
//loop 3: 14 + 6 = 20

const products = [
  { name: "shirt", price: 20 },
  { name: "shoes", price: 50 },
  { name: "hat", price: 15 },
];

const totalPrice = products.reduce((prevPrice, currentPrice) => {
  if (typeof prevPrice === "object") {
    return prevPrice.price + currentPrice.price;
  }

  return prevPrice + currentPrice.price;
});

console.log("Totaal prijs: ", totalPrice);
