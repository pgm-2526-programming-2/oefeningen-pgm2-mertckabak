function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }
