let arr = [1, 3, 2, 3, 2, 4];

let unique = (arr) => {
  return arr.filter((value, index, self) => self.indexOf(value) == index);
};
let newArr = unique(arr);

let sum = 0;
for (ele of newArr) {
  sum = sum + ele;
}
console.log(sum);
