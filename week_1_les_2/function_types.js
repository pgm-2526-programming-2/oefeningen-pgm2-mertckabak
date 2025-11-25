sum(7, 4); // werkt ook

function sum(a, b) {
  return a + b;
}

sum(3, 4); // werkt

//anotherSum(2, 3); // werkt niet
// Function expression
const anotherSum = function (a, b) {
  return a + b;
};

anotherSum(2, 3); // werkt nu wel

// Arrow function
const arrowSum = (a, b) => {
  return a + b;
};

//Geen curly braces? = return het statement
const altArrowSum = (a, b) => a + b;
