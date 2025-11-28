let btn = document.querySelectorAll("button");

for (btns of btn) {
  // btns.onclick = sayHello;
  // btns.onclick = sayName;
  btns.addEventListener("click", sayHello);
  btns.addEventListener("click", sayName);
  btns.addEventListener("dblclick", () => {
    console.log("you doubled click me!");
  });
}

function sayHello() {
  console.log("Hello");
}

function sayName() {
  console.log("Harsh Mishra");
}
