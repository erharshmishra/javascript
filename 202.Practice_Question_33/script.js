const student = {
  fname: "Harsh",
  age: 21,
  marks: 94.4,
  city: "Delhi",
};
console.log(student);
student.city = "Mumbai";
student.gender = "Male";
student.marks = "A";
console.log(student);
delete student.age;
console.log(student);
