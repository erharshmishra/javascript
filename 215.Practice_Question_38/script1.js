function sum(n) {
  return (n * (n + 1)) / 2;
}
console.log(sum(10));

function sum(num) {
  let sub = 0;
  for (let i = 1; i <= num; i++) {
    sub = sub + i;
  }
  return sub;
}
console.log(sum(10));
