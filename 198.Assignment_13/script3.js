let number = 287152;
let sum = 0;

while (number) {
  sum = (number % 10) + sum;
  number = parseInt(number / 10);
}
console.log(`Sum digits in given number is : ${sum}`);
