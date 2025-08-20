let num = 5;
let fact = 1;

if (num == 0 || num == 1) {
  console.log("Factorial of 0 or 1 is always 1.");
} else if (num > 1) {
  for (let i = num; num >= 1; num--) {
    fact = fact * num;
  }
  console.log(`Factorial of given number is ${fact}`);
} else {
  console.log("Enter a valid number.");
}
