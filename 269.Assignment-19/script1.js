let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

h1.addEventListener("mouseout", function () {
  console.log("mouseout");
});

btn.addEventListener("keypress", function () {
  console.log("keypress");
});
