const auto = {
  merk: "Toyota",
  model: "Camry",
  jaar: 2022,
  kleur: "blauw",
};

//Eigenschap wijzigen
//Verander de kleur van de auto in de vorige oefening naar “rood”.

auto.kleur = "rood";

console.log(auto);

//#Waarde ophalen
//Schrijf een script dat de merknaam van de auto in de vorige oefening ophaalt en weergeeft in de console.

const merkNaam = auto.merk;
console.log("Merknaam:", merkNaam);

//#Eigenschap toevoegen
//Voeg een nieuwe eigenschap toe aan het object auto genaamd brandstof en wijs deze de waarde “benzine” toe.

auto.brandstof = "benzine";

console.log(auto);

//#Eigenschap verwijderen
//Verwijder de eigenschap jaar uit het object auto.

delete auto.jaar;

console.log(auto);
