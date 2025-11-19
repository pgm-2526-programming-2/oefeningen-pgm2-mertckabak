function sum(a, b) {
  return a + b;
}

//oef multiply, division
const division = (a, b) => {
  return a / b;
};
const multiplier = function (a, b) {
  return a * b;
};
//oef maak een functie showCalculation die 3 parameters heeft 2 getallen en een van onze fucntie

function showCalculation(a, b, func) {
  console.log(func(a, b));
}

showCalculation(5, 5, sum);
showCalculation(5, 5, multiplier);
showCalculation(5, 5, division);

//---------------------------------------------------------

const name = "Adriaan";

function selectRandomStudent(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const age = 21;
const students = ["Yme", "Arne", "Mert", "Yaron"];

console.log(sum(age, 12));
console.log(20);
console.log(selectRandomStudent(students));

function showMessage() {
  console.log("Answer Checker Message");
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback();
    return true;
  }

  callback();
  return false;
}

checkAnswer("ja", "ja", showMessage);
