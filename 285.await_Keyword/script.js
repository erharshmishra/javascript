h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
      reject("color not chnaged");
    }, delay);
  });
}

async function set() {
  await colorChange("red", 1000);
  await colorChange("yellow", 1000);
  await colorChange("pink", 1000);
  await colorChange("purple", 1000);
  await colorChange("blue", 1000);
  colorChange("green", 1000);
}

set();
