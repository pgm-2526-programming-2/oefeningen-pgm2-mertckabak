//console.log(firstName);
//console.log(lastName);
//console.log(age);
const firstName = "Adriaan";
var lastName = "Glibert";
let age = 30;

//var lastName;
//lastName = 'Glibert';

showMessage();
//showAnotherMessage(); js leest niet van boven naar beneden bij const, alleen bij function en var

function showMessage() {
  console.log("Hello world!");
}

const showAnotherMessage = function () {
  console.log("Another world!");
};

const showArrowMessage = () => {
  console.log("Arrow message!");
};

showAnotherMessage(); // zo werkt het wel
