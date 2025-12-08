// Je code hier
function mergeOptions({ ...obj1 }, { ...obj2 }) {
  const merged = { ...obj1, ...obj2 };
  console.log(merged);
}

// Voorbeeldgebruik:
mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }
