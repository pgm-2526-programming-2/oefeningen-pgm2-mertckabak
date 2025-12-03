function addOnlyNumbers(...rest) {
  const sum = rest.reduce((total, item) => {
    return typeof item === "number" ? total + item : total;
  }, 0);

  console.log(
    `er waren ${rest.length} argumenten, de som van de getallen zijn ${sum}.`
  );
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.
