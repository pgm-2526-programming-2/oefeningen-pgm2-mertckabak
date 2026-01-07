/**
 * @author Mert Kabak
 */

/**
 * @typedef {{id: number | string, name: string, amountOfStudents: number, isFun: boolean}} CourseType
 */

/**
 * A definition of student type
 * @typedef {Object} StudentType
 * @property {string} name The name of a student
 * @property {number} age The age of a student
 * @property {?string} gender The optional gender of a student
 */

/**
 * student name
 * @type {string}
 */
const studentName = "Mert";

/**
 * This is the info of a random student
 * @type {StudentType}
 */
const student = {
  name: "Mert",
  age: 23,
};

/**
 * A list of students who are physically in class
 * @type {Array <string>}
 */
const students = ["Mert", "Ignace", "Hasan", "Arne", "Justin"];

/**
 * This is a description of a course and its properties
 * @type {CourseType}
 */
const course = {
  id: "oahjedoi",
  name: "Programming 2",
  amountOfStudents: 20,
  isFun: true,
};

/**
 * This is a description of a second course
 * @type {CourseType}
 */
const secondCourse = {
  id: "oahjedoi",
  name: "@work 2",
  amountOfStudents: 30,
  isFun: true,
};

/**
 * This logs a message in our console
 */

function sayHello() {
  console.log("Hello");
}

/**
 * This function calculates the sum of two arguments
 * @param {number} a  first number
 * @param {number} b  second number
 * @returns {string}
 */
function sum(a, b) {
  return `De som van ${a} en ${b} is ${a + b}`;
}
