h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 5) + 1;
    if (random > 3) {
      reject("Promise rejected");
    } else {
      setTimeout(() => {
        h1.style.color = color;
        console.log("Color : ", color);
        resolve("Promise resolved");
      }, delay);
    }
  });
}

async function set() {
  try {
    await colorChange("red", 1000);
    await colorChange("yellow", 1000);
    await colorChange("pink", 1000);
    await colorChange("purple", 1000);
    await colorChange("blue", 1000);
    await colorChange("green", 1000);
  } catch (error) {
    console.log("error found");
    console.log(error);
  }
  let a = 5;
  console.log(a + 5);
}

set();
