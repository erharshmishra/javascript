let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

// btn.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// })
// h1.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// })
// h3.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// })
// p.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// })

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "red";
}

// by using this we can reduce redundancy.
btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
