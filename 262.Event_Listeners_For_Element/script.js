let h1 = document.querySelector("h1");
let div = document.querySelector("div");

h1.addEventListener("click", function () {
  console.log("Heading was clicked!");
});

div.addEventListener("mouseenter", function () {
  console.log("Mouse inside the div!");
});
