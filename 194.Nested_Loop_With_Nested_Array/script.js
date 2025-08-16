let fruits = [
  ["Orange", "Grapes", "Lemon", "Litchi"],
  ["Pineapple", "Banana", "Apple", "Blueberry"],
];
for (let i = 0; i < fruits.length; i++) {
  console.log(`List ${i}`);
  for (let j = 0; j < fruits[i].length; j++) {
    console.log(j, fruits[i][j]);
  }
}
