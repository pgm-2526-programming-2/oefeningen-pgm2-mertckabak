const book = { title: "JavaScript Basics", author: "John Doe" };

// schrijf hier je code om de waarden toe te kennen aan variabelen

const { title } = book;
const { author } = book;
const { pages = "no data" } = book;

console.log(title, author, pages);
