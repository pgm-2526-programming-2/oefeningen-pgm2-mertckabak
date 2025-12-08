// Je code hier
function printDetails({ name, age = 25, gender = "Unknown" }) {
  console.log(`Name: ${name}, Age: ${age}, Gender = ${gender}`);
}

// Voorbeeldgebruik:
printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown
