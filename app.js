const loginForm = document.getElementById("login-form"); // or querySelector('#login-form')
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
  //console.dir(loginInput);
  console.log(loginInput.value); // we can get the value of the input
  console.log("click");
}
loginButton.addEventListener("click", onLoginBtnClick);
