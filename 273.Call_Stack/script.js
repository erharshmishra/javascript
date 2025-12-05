function hello() {
  console.log("Hello");
}

function demo() {
  console.log("Demo");
  hello();
  console.log("Demo 2");
}

console.log("Hi");
demo();
