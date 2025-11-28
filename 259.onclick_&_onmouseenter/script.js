let btn = document.querySelectorAll("button");

for (btns of btn) {
  btns.onclick = () => {
    console.log("Photo was liked");
  };

  btns.onmouseenter = () => {
    console.log("You liked the photo");
  };
}
