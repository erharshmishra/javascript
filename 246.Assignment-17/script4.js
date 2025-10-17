const doubleandreturn = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];
console.log(doubleandreturn([1, 2, 3, 4], 4, 8, 9, 10));
