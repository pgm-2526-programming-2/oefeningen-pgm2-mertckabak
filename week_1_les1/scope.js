const message = "Hey daar";

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
