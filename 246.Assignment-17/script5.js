let obj1 = {
  name: "harsh",
  rollno: 9,
  batch: 2021,
};
// if keys are same for obj1 and obj2 than one will overwrite.
// but obj1 and obj2 keys are different than it will merge
let obj2 = {
  fname: "rohan",
  frollno: 7,
  fbatch: 2022,
};
console.log({ ...obj1, ...obj2 });

let arr = [2, 3, 4];
let ar = [5, 6, 7];
console.log([...arr, ...ar]);

let mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObject({ a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 }));
