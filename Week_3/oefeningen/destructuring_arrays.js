const letters = ["A", "B", "C"];

//dit is ook hetzelfde en makkelijkere versie
const firsLetter1 = letters[0];
const secondLetter1 = letters[1];
const thirdLetter1 = letters[2];

const [firsLetter] = letters;
const [, secondLetter] = letters;
const [, , thirdLetter] = letters;

console.log([firsLetter]);
console.log([secondLetter]);
console.log([thirdLetter]);

console.log(firsLetter1);
console.log(secondLetter1);
console.log(thirdLetter1);
