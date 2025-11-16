let para = document.createElement("p");
para.innerText = "Hey I'm Red!";
let body = document.querySelector("body");
body.append(para);
para.style.color = "red";

let heading = document.createElement("h3");
heading.innerText = "Hey I'm a blue h3.";
body.append(heading);
heading.style.color = "blue";

let division = document.createElement("div");
body.append(division);
// division.style.borderWidth = "2px";
// division.style.borderStyle = "solid";
// division.style.borderColor = "black";
division.style.border = "2px solid black";
division.style.backgroundColor = "pink";

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
division.append(h1);

let p = document.createElement("p");
p.innerHTML = "ME TOO!";
division.append(p);

division.style.paddingLeft = "30px";

body.style.textAlign = "center";
body.style.padding = "0";
body.style.margin = "0";
