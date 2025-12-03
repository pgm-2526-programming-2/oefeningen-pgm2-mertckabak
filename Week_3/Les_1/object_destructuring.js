const person = {
  firstName: "Mert",
  lastName: "Kabak",
  age: 23,
};

const myFirstName = person.firstName; // belletje! variabele naam zelfde als key naam
const myLastName = person.lastName;
const myAge = person.age;

//const {firstName, lastName, age} = person;

//verschil tussen array en object destructuring, object is op basis van een key niet
//  de index! dus de volgorde maakt niet uit in tegenstelling tot array destructuring
const { firstName, age, gender = "Male" } = person;
console.log(age, gender); // 23, undefined (male wanneer default waarde)

//nadeel van object destructuring! zelfde naam als key in object
const options = {
  c: 20000,
  w: 3000,
  mod: "C8",
  b: undefined,
};

const { c: cost, w: weight, mod: model, b: brand = "Citroen" } = options; //nieuwe variabele naam

const { w: altWeight, ...rest } = options;

/* rest = {

c: 20000 ,
mod: "C8",
b: undefined}
*/

const song = {
  name: "Flowers",
  artist: "Miley",
};

const info = {
  name: " 7 things",
};

function editSong(s, { name }) {
  s.name = name;
}

editSong(song, edit);
