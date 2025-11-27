// VAT bij europese webshop.
//BTW bij belgische webshop.

//Instelling
const regionNotation = "btw";

//Object
const product = {
  price: 25,
  name: "GameBoy",
  [regionNotation]: 21,
};

//const productKeys = ["price", "name"];
const productKeys = Object.keys(product);

const test = "btw";

product.color = "Red"; //voegt een nieuwe property toe aan het object
product.color = "Blue"; //wijzigt de waarde van een bestaande property
product[regionNotation] = 32; //wijzigt de waarde van een bestaande property met behulp van een variabele
product[test] = 40; //wijzigt de waarde van een bestaande property met behulp van een variabele

//object length in JS?
productKeys.length;

const productMap = new Map();
productMap.set("price", 25);
productMap.set("name", "GameBoy");
productMap.set("color", "Red");
productMap.set("color", "Blue");
productMap.set(regionNotation, 20);

// voordeel, makkelijker de lengte ophalen
const productMapLength = productMap.size;

console.log(product, productMap);
