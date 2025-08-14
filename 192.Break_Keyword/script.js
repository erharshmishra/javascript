let favMovie = "avatar";
let guess = prompt("Guess my favorite movie.");

while (guess != favMovie) {
  if (guess == "quit") {
    document.write("You quit the game.");
    break;
  }
  guess = prompt("Bad Luck.. Try Again..");
}

if (guess == favMovie) {
  document.write("Congrates,You have won");
}
