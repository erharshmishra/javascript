let arr = [
  ["x", null, "o"],
  [null, "x", null],
  ["o", null, "x"],
];
console.log(arr);
console.log(arr[0][0]);
console.log(arr[0][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[2][2]);
console.log((arr[0][1] = "o"));
console.log(arr);
