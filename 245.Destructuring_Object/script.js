let student = {
  name: "harsh",
  roll: 9,
  username: "harsh@abc",
  password: "abc@123",
};

// it is not desturcturing.
// let names = student.username;
// let pass = student.password;
// console.log(names);
// console.log(pass)

// it is destructuring.
let { username: names, password: pass, city = "gorakhpur" } = student;
console.log(names);
console.log(pass);

// value of city is by default value.
// it will print only if city is not present in object.
console.log(city);
