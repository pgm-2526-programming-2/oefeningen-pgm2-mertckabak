const willekeurigeNamenArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];

console.log(willekeurigeNamenArray);

//Maak een nieuwe array die alle subarrays flat maakt.
const flattenedNamesArray = willekeurigeNamenArray.flat();

//Verdubbel elk getal en maak een nieuwe array door alle subarrays te flatten.

//Verwijder het eerste element uit elke subarray.
const deleteFirstElement = willekeurigeNamenArray.map((subarray) => {
  subarray.shift();
});

//Verwijder het laatste element uit de array.
const deleteLastElement = willekeurigeNamenArray.map((subarray) => {
  subarray.pop();
});

console.log(flattenedNamesArray);
console.log(
  "After deleting first element from each subarray:",
  willekeurigeNamenArray
);
console.log(
  "After deleting last element from each subarray:",
  willekeurigeNamenArray
);
