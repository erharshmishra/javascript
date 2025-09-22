let arr = [1, 3, 45, 67];
function print(el) {
  console.log(el);
}
arr.forEach(print);

// or

arr.forEach((el) => {
  console.log(el);
});

//or

arr.forEach(function (el) {
  console.log(el);
});
