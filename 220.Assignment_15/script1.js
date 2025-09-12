let arr = [12, 43, 56, 67, 98, 122, 100, 45];
let a = 0;
function largestNum(num) {
  for (let i = 0; i < arr.length; i++) {
    if (a < arr[i]) {
      a = arr[i];
    }
  }
  if (a >= num) {
    return a;
  } else {
    return "given number is largest in the array.";
  }
}
console.log(largestNum(23));
