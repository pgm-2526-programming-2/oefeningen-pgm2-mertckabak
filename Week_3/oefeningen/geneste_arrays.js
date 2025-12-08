const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [[firstElement, ,]] = matrix;
const [[, ,], [, secondElement]] = matrix;
const [[, ,], [, ,], [, , thirdElement]] = matrix;

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
