function range(start, end) {
  let random = Math.floor(Math.random() * (end - start)) + start;
  return random;
}

console.log(range(10, 15));
