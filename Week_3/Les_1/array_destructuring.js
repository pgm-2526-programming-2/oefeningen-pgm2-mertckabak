// ophalen van waardes uit een array of een object eb die opslaan in een variabele

const person = ["Mert", "Kabak"];

const firstName = person[0];
const lastName = person[1];

//destructuring
//door aan de linkerzijde vierkantehaakjes te gebruiken weten
// dat we waardes uit een array gaan destrucuturen
const [firstN, lastN] = ["Mert", "Kabak"];
const [firstNn = "Jan", lastNn, middleNm = "Ignace"] = person; //standaardwaarde

console.log(firstNn, middleNm); // Mert Ignace

const results = ["Ignace", "Arif", "Kobe", "Justin"];
const [firstWinner, , thirdWinner] = results; // je kan elementen overslaan

console.log(firstWinner, thirdWinner);

const songs = [
  {
    name: "Ophelia",
    artist: "Taylor Swift",
  },
  {
    name: "Still Dre",
    artist: "Snoop dog",
  },
];

const [, firstTrack, lastTrack] = songs; //let op de komma
console.log(lastTrack);

//combinatie van de rest operator en destructuring
// doel! array opsplitsen in eerste element en de rest

const [head, ...tail] = [1, 2, 3, 4, 5]; //tail = [2,3,4,5]

const letters = ["a", "b", "c"];

//destructuring in een for of van een array
