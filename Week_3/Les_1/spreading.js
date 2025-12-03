//Operators
//>, <, ===, !=== , etc

// Spread en rest operator
// ... drie puntjes

const numbers = [1, 2, 3];
console.log(numbers, ...numbers);

//Reden om te spreaden
//1) kopie maken van een referentie datatype

const students = ["Mert", "Jens"];
students.push("Farah");
const friends = students;

//const people = [students]; // ["Mert", "Jens", "Farah"]
const people = [...students];
students.push("Milana");
// students -> ["Mert", "Jens", "Farah", "Milana"];
// friends -> ["Mert", "Jens", "Farah", "Milana"];
//people -> ["Mert", "Jens", "Farah"]

//2) is om arrays om samen te voegen
const drinks = ["Pintje", "Gin", "Mocktail"];
const snacks = ["Frikandel", "Chipjes"];

//3) wanneer een methode geen arrays aanvaardt
Math.max(3, 5, 7, 1, 2);
Math.max(...numbers);

const menu = [...drinks, "Cola", ...snacks];

// dit werkt ook allemaal met objecten
const car = {
  brand: "Citroen",
  model: "C8",
  year: 2011,
};

const upgrade = {
  spoiler: true,
  extra: ["GPS", "Custom uitlaat"],
};

//car.upgrade = upgrade;

/*const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
        upgrade = {
    spoiler: true,
    extra: ["GPS", "Custom uitlaat"]
}
}
*/

const upgradedCar = {
  ...car,
  ...upgrade,
};

/*const upgradedCar = {
    brand: "Citroen",
    model: "C8",
    year: 2011
    spoiler: true,
    extra: ["GPS", "Custom uitlaat"]
}
}
*/

// Object keys advanced syntax
const a = "hello";

const obj = {
  a,
};

// a: a (eerste is de ket tweede is de variabele)
// a = "hello"
//korte schrijfwijze is gewoon: a
