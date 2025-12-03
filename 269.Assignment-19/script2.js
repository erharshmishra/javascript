let btn = document.createElement("button");
btn.innerText = "click me";

document.querySelector("body").append(btn);

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
});
