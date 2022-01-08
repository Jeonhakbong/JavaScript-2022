// interval : run the function every ms you set.
// setInterval(sayHello, 5000); // function name, ms

// timeout : run the function after ms you set.
// setTimeout(sayHello, 5000);

// Variables
const clock = document.querySelector("h2#clock");

// Functions
function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart("2", 0);
  const minutes = String(date.getMinutes()).padStart("2", 0);
  const seconds = String(date.getSeconds()).padStart("2", 0);
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000); // 1000 ms
