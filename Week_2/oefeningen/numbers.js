const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

//Filter de getallen groter dan 10 uit de array.
const numbersBiggerThanTen = willekeurigeGetallen.filter((value) => {
  return value < 10;
});

//Verwijder het laatste element uit de array.
willekeurigeGetallen.pop();

//Verwijder het eerste element uit de array.
willekeurigeGetallen.shift();

//Voeg het getal 5 toe aan het einde van de array.
willekeurigeGetallen.push(5);

//Controleer of alle getallen in de array kleiner zijn dan 20.
const areAllNumbersLessThanTwenty = willekeurigeGetallen.every((value) => {
  if (value < 20) {
    return true;
  }
});

//Maak een string door alle elementen in de array te verbinden met een spatie.
const numbersAsString = willekeurigeGetallen.join(" ");

//Tel alle getallen in de array op.
const totalNumbers = willekeurigeGetallen.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

//Verdubbel elk getal in de array.
const doubleNumbers = willekeurigeGetallen.map((value, index) => {
  return value * 2;
});

//Controleer of ten minste één getal in de array groter is dan 30.
const numberBiggerThanThirty = willekeurigeGetallen.some((value) => {
  return value > 30;
});

console.log("numbers bigger than ten", numbersBiggerThanTen);
console.log("are all numbers less than twenty", areAllNumbersLessThanTwenty);
console.log("numbers as string", numbersAsString);
console.log(willekeurigeGetallen);
console.log("double numbers", doubleNumbers);
console.log("Total numbers: ", totalNumbers);
console.log("Is there a number bigger than thirty?", numberBiggerThanThirty);
