let newP = document.createElement("p");
console.log(newP);
newP.innerText = "Hi, I am a new Paragraph.";
console.log(newP);

let body = document.querySelector("body");
body.appendChild(newP);

newP.append(
  "After ( Hi, I am a new Paragraph.) Now i am trying to add this text in my previous newP"
);
console.log(newP);
newP.prepend(
  "Before ( Hi, I am a new Paragraph.) Now i am trying to add this text in my previous newP"
);
console.log(newP);

let box = document.querySelector(".box");
let btn = document.createElement("button");
let btn1 = document.createElement("button");
btn1.innerText = "Don't Click Me";
btn.innerText = "Click Me";
console.log(btn1);
box.append(btn1);
box.append(btn);

// box.insertAdjacentElement("beforebegin",btn)
// box.insertAdjacentElement("afterbegin",btn)
// box.insertAdjacentElement("beforeend",btn)
box.insertAdjacentElement("afterend", btn);

body.removeChild(btn);
btn1.remove();
// body.remove();
