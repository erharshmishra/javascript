h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then((result) => {
    console.log("Color1");
    console.log(result);
    return changeColor("green", 1000);
  })
  .then((result) => {
    console.log("Color2");
    console.log(result);
    return changeColor("blue", 1000);
  })
  .then((result) => {
    console.log("Color3");
    console.log(result);
    return changeColor("orange", 1000);
  })
  .then((result) => {
    console.log("Color4");
    console.log(result);
  })
  .catch((error) => {
    console.log("Color not changed");
    console.log(error);
  });
