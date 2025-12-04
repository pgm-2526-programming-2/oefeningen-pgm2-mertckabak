const { generateRandomData } = require("./data");

const data = generateRandomData;

// Apply more confusing processing logic to data
data.forEach((item) => {
  if (item.isSpecial) {
    if (item.value > 30 && item.value <= 70) {
      item.specialResult = "Intermediate Special";
    } else {
      item.specialResult = "Extreme Special";
    }
  } else {
    item.specialResult = "Not Special";
  }

  // Apply additional complex logic based on details
  if (item.details.importance > 3) {
    if (item.details.complexity > 5) {
      item.advancedResult = "High Importance, High Complexity";
    } else {
      item.advancedResult = "High Importance, Low Complexity";
    }
  } else {
    item.advancedResult = "Low Importance";
  }
});

// Display even more obscure data formatting
console.log("Even More Extended Data Processing Report:");
console.log("===========================================");
data.forEach((item) => {
  console.log(
    `ID: ${item.id}, Value: ${item.value}, Category: ${item.category}, Special Result: ${item.specialResult}, Advanced Result: ${item.advancedResult}`
  );
});

// Calculate additional confusing statistics
let highImportanceCount = 0;
let lowImportanceCount = 0;
data.forEach((item) => {
  if (item.details.importance > 3) {
    highImportanceCount++;
  } else {
    lowImportanceCount++;
  }
});

console.log("\nEven More Additional Confusing Statistics:");
console.log("===========================================");
console.log(`High Importance Count: ${highImportanceCount}`);
console.log(`Low Importance Count: ${lowImportanceCount}`);
console.log(
  `High Importance Percentage: ${(highImportanceCount / data.length) * 100}%`
);
console.log(
  `Low Importance Percentage: ${(lowImportanceCount / data.length) * 100}%`
);

// Introduce more complex operations on the data
let highComplexityCount = 0;
let lowComplexityCount = 0;
data.forEach((item) => {
  if (item.details.complexity > 5) {
    highComplexityCount++;
  } else {
    lowComplexityCount++;
  }
});

console.log("\nAdvanced Complexity Summary:");
console.log("===========================");
console.log(`High Complexity Count: ${highComplexityCount}`);
console.log(`Low Complexity Count: ${lowComplexityCount}`);
console.log(
  `High Complexity Percentage: ${(highComplexityCount / data.length) * 100}%`
);
console.log(
  `Low Complexity Percentage: ${(lowComplexityCount / data.length) * 100}%`
);
