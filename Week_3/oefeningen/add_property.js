function addProperty(obj1) {
  return { ...obj1 };
}

const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }
