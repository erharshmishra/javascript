const student = {
  name: "harsh",
  marks: 96,
  getName: function () {
    return this.name; // scope -> student object.
  },
  // this will not give the marks.
  getMarks: () => {
    return this.marks; // scope -> window object.
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this.marks); // scope -> student object.
    }, 2000);
  },
  // this will not give the marks.
  getInfo2: function () {
    setTimeout(function () {
      console.log(this.marks); // scope -> window object.
    }, 2000);
  },
};
console.log(student);
console.log(student.getName());
console.log(student.getMarks());
console.log(student.getInfo1());
console.log(student.getInfo2());
