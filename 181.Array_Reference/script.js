let arr1 = [1];
let arr2 = [1];
console.log(arr1 == arr2);
console.log(arr1 === arr2);

let arr = ["a", "b", "c"];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arrCopy.push("d");
console.log(arr === arrCopy);
