const process = require("process");
const pathModule = require("path");
const filesystemModule = require("fs");

//const studentsPath = "./students.json";
const studentsPath = pathModule.join(".", "students.json");

//filesystem kan om bestanden te lezen!
const fileContent = filesystemModule.readFileSync(studentsPath, "utf8");
const fileContentAsArray = JSON.parse(fileContent);
fileContentAsArray.push({
  name: "Yens",
  age: 25,
});
console.log(fileContentAsArray);

filesystemModule.writeFileSync(
  studentsPath,
  JSON.stringify(fileContentAsArray)
);

//zo gebruikt Linux \ in plaats van /
//const pathToFunctionsCourse = "../../week_1/les_1/functions.js";
const pathToFunctionCourse = pathModule.join(
  "..",
  "..",
  "week_1",
  "les_1",
  "functions.js"
);

//nut van path
//platform afhankelijk ( \ vs /)
//veiliger / robuster - speciale tekens zoals spatie kunnen.
// toekomst ! nieuwe OS?

console.log(__dirname);
