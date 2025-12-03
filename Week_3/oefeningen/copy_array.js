function copyArray(a) {
  return [...a];
}

const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]
