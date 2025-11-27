const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];

//Maak een string door alle elementen in de array te verbinden met een koppelteken.
const wordsAsString = woorden.join("-");
//Controleer of ten minste één woord in de array begint met de letter “B”.
const wordStartingWithB = woorden.some((value) => {
  return value;
});
//Voeg het woord “Hello” toe aan het begin van de array.
const firstWord = woorden.unshift("Hello");
//Controleer of alle woorden in de array meer dan twee letters hebben.
const wordsMoreThanTwoLetters = woorden.every((value) => {
  if (value.length > 2) {
    return true;
  }
});
//Sorteer de array in oplopende volgorde.
woorden.sort();

//Haal het element op de derde positie in de array op.
const thirdWord = woorden[3];

//Filter de woorden die langer zijn dan vier letters uit de array.
const wordsLongerThanFourLetters = woorden.filter((value) => {
  return value.length > 4;
});

console.log("words as string", wordsAsString);
console.log("Is there a word starting with B?", wordStartingWithB);
console.log(woorden);
console.log("Are all words more than two letters?", wordsMoreThanTwoLetters);
console.log("Words longer than four letters", wordsLongerThanFourLetters);
console.log("Third word in the array:", thirdWord);
