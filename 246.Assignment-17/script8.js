let str = "helloooooppppppo";
let newStr = "";
for (ele of str) {
  if (newStr.indexOf(ele) == -1) {
    newStr += ele;
  }
}
console.log(newStr);
