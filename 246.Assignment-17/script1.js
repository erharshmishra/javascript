let nums = [2, 3, 4, 5, 6];
let square = nums.map((num) => num * num);
// console.log(square);

let sum = square.reduce((res, ele) => res + ele);
// console.log(sum);

let average = sum / nums.length;
console.log(average);
