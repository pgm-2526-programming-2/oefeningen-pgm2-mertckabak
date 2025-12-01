const persoon = {
  naam: "Anna",
  leeftijd: 25,
  adres: {
    straat: "Hoofdstraat",
    nummer: 123,
    stad: "Stadsville",
  },
};

//Nested Property
//Schrijf een script dat het straatnummer van het adres-object in de vorige oefening ophaalt en weergeeft in de console.

const straatNummer = persoon.adres.nummer;
console.log("Straatnummer:", straatNummer);
//#Object uitbreiden
//Breid het object persoon uit door de eigenschap telefoon toe te voegen met een willekeurig telefoonnummer.

persoon.telefoon = "0612345678";

console.log(persoon);

//#Object samenvoegen
//Maak een nieuw object genaamd extraInfo met willekeurige extra informatie (bijvoorbeeld hobby, favorieteKleur, enz.). Voeg deze informatie toe aan het object persoon.

const extraInfo = {
  hobby: "voetbal",
  favorieteKleur: "blauw",
};

Object.assign(persoon, extraInfo);

console.log(persoon);
