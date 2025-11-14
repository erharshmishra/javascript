let heading = document.querySelector("h1");
console.log(heading.style);
heading.style.color = "red"; // inline css
heading.style.backgroundColor = "yellow";

let body = document.querySelector("body");
body.style.backgroundColor = "wheat";

let links = document.querySelectorAll(".boxLink");
for (link of links) {
  link.style.color = "red";
}
