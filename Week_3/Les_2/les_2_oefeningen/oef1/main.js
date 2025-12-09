const { generateRandomData } = require("./data.js");
const { processData, calculateCount } = require("./processing.js");
const {
  showProcessedData,
  showImportanceScore,
  showComplexitySummary,
} = require("./reporting.js");

const randomData = generateRandomData();
const processedData = processData(randomData);
showProcessedData(processedData);
const { highCount: highImportanceCount, lowCount: lowImportanceCount } =
  calculateCount(processedData);
showImportanceScore(highImportanceCount, lowImportanceCount, processedData);
const { highCount: highComplexityCount, lowCount: lowComplexityCount } =
  calculateCount(processedData, 5);
showComplexitySummary(highComplexityCount, lowComplexityCount, processedData);
