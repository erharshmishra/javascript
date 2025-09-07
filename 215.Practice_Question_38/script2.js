let arr = ["Hi", "Harsh", "Mishra", "Ji"];

function concat(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

console.log(concat(arr));
