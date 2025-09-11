const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  mod: function (a, b) {
    return a % b;
  },
};

console.log(calculator.add(1, 3));
console.log(calculator.sub(1, 3));
console.log(calculator.mul(1, 3));
console.log(calculator.div(1, 3));
console.log(calculator.mod(1, 3));
