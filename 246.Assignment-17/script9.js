let arr = [1, 3, 2, 3, 2, 4];
let newArr = [...new Set(arr)];
console.log(newArr);

let removeDuplicate = (arr) => {
  return arr.filter((value, index, self) => self.indexOf(value) == index);
};
console.log(removeDuplicate(arr));
