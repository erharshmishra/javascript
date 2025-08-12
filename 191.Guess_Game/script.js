let favMovie = "avatar";
let guess = prompt("Guess my favorite movie.");

while (guess != favMovie && guess != "quit") {
  guess = prompt("Bad Luck.. Try Again..");
}

if (guess == favMovie) {
  document.write("Congrates,You have won");
} else {
  document.write("You Quit the game.");
}
