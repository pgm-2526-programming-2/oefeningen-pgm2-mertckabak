const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

// schrijf hier je code om de waarden toe te kennen aan variabelen

const { name } = person;
const { age } = person;
const {
  address: { street },
} = person;
const {
  address: { city },
} = person;

console.log(name, age, street, city);
