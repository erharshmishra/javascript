function sum(...args) {
  for (let i = 0; i <= args.length; i++) {
    console.log("you gave us : ", args[i]);
  }
}
sum(1);
sum(1, 2, 3, 4, 5, 6);
sum(1, 1, 1, 1, 1);

function min() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments.length);
}
console.log("hi");
min(1, 2, 3, 4);
