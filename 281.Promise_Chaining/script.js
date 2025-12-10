// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// savetoDB(
//   "harshmishra",
//   () => {
//     console.log("Success1 : Data saved");
//     savetoDB(
//       "apnacolloge",
//       () => {
//         console.log("Success2 : Data saved");
//         savetoDB(
//           "helloworld",
//           () => {
//             console.log("Success3 : Data saved");
//           },
//           () => {
//             console.log("Failure3 : Weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2 : Weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("Failure1 : Weak connection");
//   }
// );

// Callbacks Nesting ==> Callback Hell.

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

// let request = savetoDB("apnacollege");
// request.then(() => {
//   console.log("Promise resolved");
// })
// .catch(() => {
//   console.log("Promise rejected");
// });

// savetoDB("apnacollege")
//   .then(() => {
//     console.log("Data1 : Promise resolved");
//     savetoDB("hello world").then(() => {
//       console.log("Data2 : Promise resolved");
//     })
//   })
//   .catch(() => {
//     console.log("Promise rejected");
//   });

// Promise Chaining.
savetoDB("apnacollege")
  .then(() => {
    console.log("Data1 : Promise resolved");
    return savetoDB("hello world");
  })
  .then(() => {
    console.log("Data2 : Promise resolved");
    return savetoDB("harshmishra");
  })
  .then(() => {
    console.log("Data3 : Promise resolved");
  })
  .catch(() => {
    console.log("Promise rejected");
  });
