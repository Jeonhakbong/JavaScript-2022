const API_KEY = "f8cda8ec242b57ac28a13f9276050f40";

function onGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // javascript call the url
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `, ${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you :(");
}
console.log(navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError));
