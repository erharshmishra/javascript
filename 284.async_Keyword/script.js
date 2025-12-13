async function greet() {
  // throw "error found"
  return "Good Morning";
}

greet()
  .then((result) => {
    console.log("Resolved : ", result);
  })
  .catch((error) => {
    console.log("Rejected : ", error);
  });
