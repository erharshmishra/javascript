let textarea = document.querySelector("textarea");
let p = document.querySelector("p");

textarea.addEventListener("input", function () {
  p.innerHTML = this.value; // or inp.value
});
