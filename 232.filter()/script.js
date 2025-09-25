let num = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = num.filter((ele) => ele % 2 == 0);
console.log(even);

let odd = num.filter((ele) => ele % 2 != 0);
console.log(odd);

let greaterFive = num.filter((ele) => ele > 5);
console.log(greaterFive);

let lessFive = num.filter((ele) => ele < 5);
console.log(lessFive);
