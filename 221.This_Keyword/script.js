let student = {
  name: "harsh",
  age: 22,
  eng: 95,
  math: 89,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};
student.getAvg();
