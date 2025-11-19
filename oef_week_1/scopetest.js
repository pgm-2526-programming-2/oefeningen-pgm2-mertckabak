function outerFunction() {
  const innerVar = 25;

  function innerFunction() {
    console.log(innerVar);
  }

  innerFunction();
}

outerFunction();
