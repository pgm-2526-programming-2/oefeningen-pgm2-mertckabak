function checkScoping() {
  const a = 50;

  if (true) {
    const a = 75;
    console.log(a);
  }

  console.log(a);
}

checkScoping();
