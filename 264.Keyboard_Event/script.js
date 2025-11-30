let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//     console.log("key pressed ...");
// })
// inp.addEventListener("keyup", function () {
//     console.log("key released...");
// })

inp.addEventListener("keydown", function (event) {
  //   console.log(event.code); // ArrowDown // ArrowUp // ArrowLeft // ArrowRight
  if (event.code == "ArrowUp") {
    console.log("Character moving Forward.");
  } else if (event.code == "ArrowDown") {
    console.log("Character moving Backward.");
  } else if (event.code == "ArrowLeft") {
    console.log("Character moving Left.");
  } else if (event.code == "ArrowRight") {
    console.log("Character moving Right.");
  } else {
    console.log("press only up,down,left,right key");
  }
});
