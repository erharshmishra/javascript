const calAverage = () => {
  let arr = [3, 4, 5, 66, 7];
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    add += arr[i];
  }
  return add / arr.length;
};
console.log(calAverage());
