let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me";
let body = document.querySelector("body");
body.append(input, "\n");
body.append(btn);

input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");
