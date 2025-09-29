let arr2 = [2, 45, 167, 88, 123, 4, 56];

let small = arr2.reduce((res, ele) => {
  if (res > ele) {
    return ele;
  } else {
    return res;
  }
});
console.log(small);
