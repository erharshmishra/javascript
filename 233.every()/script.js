let arr = [2, 3, 5, 6, 8, 9];

let trueOrFalse = arr.every((ele) => {
  return ele % 2 == 0;
});
console.log(trueOrFalse);

let array = [2, 6, 8];

let newtrueOrFalse = array.every((ele) => {
  return ele % 2 == 0;
});
console.log(newtrueOrFalse);
