let max = prompt("Enter the max value.");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter the value.");
while (true) {
  if (guess == "quit") {
    console.log("Quitting the app.");
    break;
  }
  if (guess == random) {
    console.log("You Won!");
    break;
  } else if (guess < random) {
    guess = parseInt(prompt("Hint : Your guess was too small, Try again."));
  } else if (guess > random) {
    guess = parseInt(prompt("Hint : Your guess was too big, Try again."));
  }
}
