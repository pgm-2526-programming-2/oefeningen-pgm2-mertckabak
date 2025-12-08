const numbers = [1, 2, 3, 4, 5];

// schrijf hier je code om de waarden toe te kennen aan variabelen
const [first] = numbers;
const [, second] = numbers;
const [, , ...rest] = numbers;

console.log(first, second, rest); // Output: 1 2 [3, 4, 5]
