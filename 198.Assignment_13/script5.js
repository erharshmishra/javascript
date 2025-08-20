let arr = [23, 4, 6, 76, 21, 100, 20, 89];
let largest = 0;

for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(`Largest element in the array ${largest}`);
