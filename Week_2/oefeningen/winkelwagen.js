//Stel dat je een applicatie hebt waarin je een winkelwagen met items bijhoudt. Elk item heeft een naam en een prijs. Gebruik de ingebouwde methodes .keys(), .values() en .entries() om informatie weer te geven over de items in de winkelwagen.

const shoppingCart = {
  item1: { name: "Product 1", price: 20 },
  item2: { name: "Product 2", price: 30 },
  item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart).map(
  (key) => shoppingCart[key].name
);
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart).map((item) => item.price);
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart).map(([key, item]) => ({
  name: item.name,
  price: item.price,
}));
console.log("Namen en prijzen van items:", itemEntries);

const cart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],

  // Aangepaste methode om totale prijs te berekenen
  calculateTotal: function () {
    return this.items.reduce((total, item) => total + item.price, 0); // als ik hier 10 zou schrijven in plaats van 0 zou de totaal 75 worden
    // vul hier aan
  },
};

const totalPrice = cart.calculateTotal();
console.log("Totale prijs:", totalPrice); //65
