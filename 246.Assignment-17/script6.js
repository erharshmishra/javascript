let a = [2, 3, 67, 8, 9];

let max = a.reduce((ele1, ele2) => {
  if (ele2 > ele1) {
    return ele2;
  } else {
    return ele1;
  }
});
console.log(max);
