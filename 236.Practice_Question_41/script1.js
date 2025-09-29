let arr = [2, 45, 67, 88, 123, 4, 56];
let maxNumber = 0;

for (let i = 0; i < arr.length; i++) {
  if (maxNumber < arr[i]) {
    maxNumber = arr[i];
  }
}
console.log(maxNumber);

let arr1 = [2, 45, 167, 88, 123, 4, 56];

let max = arr1.reduce((res, ele) => {
  if (res < ele) {
    return ele;
  } else {
    return res;
  }
});
console.log(max);
