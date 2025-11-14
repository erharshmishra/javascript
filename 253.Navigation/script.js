let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);
console.log(h4.previousElementSibling);
console.log(h4.nextElementSibling);

let image = document.querySelector("img");
console.log(image.previousElementSibling);
image.previousElementSibling.style.color = "orange";

let ul = document.querySelector("div ul");
console.log(ul);
console.log(ul.childElementCount);
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.children[1]);
console.log(ul.children[1].parentElement);
console.log(ul.children[1].children);
console.log(ul.children[1].childElementCount);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);
