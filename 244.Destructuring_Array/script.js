let names = ["tony", "bruce", "steve", "peter", "xyz", "pyq"];

// it is not destructuring.
// let winner = names[0];
// let runnerup = names[1];
// let other = names.slice(2);
// console.log(winner)
// console.log(runnerup)
// console.log(other)

// it is destructuring.

let [winner, runnerup, ...other] = names;
console.log(winner);
console.log(runnerup);
console.log(other);
