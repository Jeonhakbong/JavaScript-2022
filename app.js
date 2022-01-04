const loginForm = document.querySelector("#login-form"); // or querySelector('#login-form')
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// key word used often
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintGreetings(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello, " + userName; // == `Hello &{userName}`
}

function onLoginSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault(); // previent default behaviors of any events

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

// variables to check localStorage
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // continue to show
  paintGreetings(savedUserName);
}
