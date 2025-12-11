function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 1) {
      resolve("Success : Data saved");
    } else {
      reject("Failure : Weak connection");
    }
  });
}

savetoDB("apnacollege")
  .then((result) => {
    console.log("Data1 : Promise resolved");
    console.log("Result1 : ", result);
    return savetoDB("hello world");
  })
  .then((result) => {
    console.log("Data2 : Promise resolved");
    console.log("Result2 : ", result);
    return savetoDB("harshmishra");
  })
  .then((result) => {
    console.log("Data3 : Promise resolved");
    console.log("Result3 : ", result);
  })
  .catch((error) => {
    console.log("Promise rejected");
    console.log("Error : ", error);
  });
