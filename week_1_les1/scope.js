const message = "Hey daar";

sayHello();
// say(); // werkt niet

function sayHello() {
  const message = "Bye!";

  function say() {
    const newMessage = "YOLO";
    console.log(message);
  }

  console.log(newMessage);
  say();
}

sayHello();
console.log(message);
