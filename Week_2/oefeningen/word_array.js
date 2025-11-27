let woordenArray = ["appel", "peer", "kiwi", "banaan"];

let langsteWoord = woordenArray.reduce((longest, word) => {
  return word.length > longest.length ? word : longest;
});

console.log(langsteWoord); // schrijf hier de logica om het langste woord te vinden // geeft 'banaan'
