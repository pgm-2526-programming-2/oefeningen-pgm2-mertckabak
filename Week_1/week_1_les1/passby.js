const firstName = "Student"; // primitief
const age = 20; // primitief
const isStudent = true; // primitief
const hobbies = ["gaming", "soccer"]; // samengesteld of reference type
const addres = {
  street: "New York Straat ",
  number: 4,
}; // samengesteld of reference type

let nickName = firstName;
const interests = hobbies;
const todos = interests;

nickName = "Gamerboy";
interests.push("KiteSurfen");

console.log(interests, hobbies, todos);

let total = 0;

function addFiveToNumber(a = 0) {
  total = a + 5;
  console.log(a + 5);
}

addFiveToNumber(2);
console.log("Totaal:", total);

function doubleNumber(num) {
  num = num * 2;
  console.log("Binnen functie:", num);
}

function doubleNumberWithReference(obj) {
  obj.number = obj.number * 2;
  console.log("Binnen ref functie:", obj.number);
}

let originalNumber = 5;
let originalNumberAsReferenceType = {
  number: 5,
};

doubleNumber(originalNumber);
doubleNumberWithReference(originalNumberAsReferenceType);
console.log("Original number uit functie", originalNumber);
console.log(
  "Original number uit ref functie",
  originalNumberAsReferenceType.number
);
