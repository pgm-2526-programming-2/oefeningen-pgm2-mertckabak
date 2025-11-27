//Gebruik for…of om elk element in de array numbers te loggen.
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

//Gebruik for…of om elk karakter in de string “Hello” te loggen.
const greeting = "Hello";

for (const char of greeting) {
  console.log(char);
}

//Gebruik forEach om elk element in de array colors te loggen, samen met het bijbehorende indexnummer.
const colors = ["red", "blue", "green", "yellow"];

colors.forEach((color, index) => {
  console.log(index, color);
});
