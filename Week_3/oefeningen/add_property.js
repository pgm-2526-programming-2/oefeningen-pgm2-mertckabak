function addProperty(obj1, key, value) {
  return { ...obj1, [key]: value };
}

const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }
