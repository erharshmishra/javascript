let para = document.querySelector("p");
console.dir(para);
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);
console.log((para.innerText = "Hi, I am Harsh Mishra")); // Normal Text.

let heading = document.querySelector("h1");
console.log((heading.innerHTML = "Hi, I am <u>Harsh Mishra</u>"));
