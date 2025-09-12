let arr = [12, 43, 56, 67, 98, 122, 100, 45];

function largestNum(num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      return arr[i];
    }
  }
}
console.log(largestNum(45));
