let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = this.elements[0].value;
  let pass = this.elements[1].value;
  console.log(user);
  console.log(pass);
  alert(`Hi ${user}, your password is set to ${pass}`);
  // let user = document.querySelector('#user');
  // let pass = document.querySelector('#pass');
  // console.log(user.value);
  // console.log(pass.value);
  // alert(`Hi ${user.value}, your password is set to ${pass.value}`)

  console.log("Form successfully submitted...");
});
