function sum(a, b = 5) {
  return a + b;
}
console.log(sum(3));

// if argument values are not given than it will use these value.
function sum(a = 5, b = 5) {
  return a + b;
}
// argument values have more priority.
console.log(sum(7, 7));

// order matter.
function sum1(a = 5, b) {
  return a + b;
}
console.log(sum1(3)); // a = 3, b = undefined.
