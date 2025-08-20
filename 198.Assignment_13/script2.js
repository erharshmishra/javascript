let number = 287152;
let i = 0;

while (number) {
  number = parseInt(number / 10);
  i++;
}
console.log(`Digits in given number is : ${i}`);
