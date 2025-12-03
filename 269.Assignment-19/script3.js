let h2 = document.querySelector("h2");
let input = document.querySelector("input");

input.addEventListener("input", function () {
  if (/^[a-zA-Z]*$/.test(this.value)) {
    h2.innerText = this.value;
  }
});
