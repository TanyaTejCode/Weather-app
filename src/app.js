let now = new Date();
let months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];
let month = months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, "0");
let dateTime = document.querySelector("#date");
dateTime.innerHTML = `${month} ${date}, ${hour}:${minutes}`;

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let apiKey = "ec60a7f865c1bc2ca6ffb4f631d54c2d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#input");
form.addEventListener("submit", displayCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay = document.querySelector("#temp");
  temperatureDisplay.innerHTML = temperature;
  let city = response.data.name;
  let cityDisplay = document.querySelector("#city");
  cityDisplay.innerHTML = city;
  let weather = response.data.weather[0].description;
  let weatherDisplay = document.querySelector("#weather");
  weatherDisplay.innerHTML = weather;
}
function displayCurrent(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay = document.querySelector("#temp");
  temperatureDisplay.innerHTML = temperature;
  let city = response.data.name;
  let cityDisplay = document.querySelector("#city");
  cityDisplay.innerHTML = city;
  let weather = response.data.weather[0].description;
  let weatherDisplay = document.querySelector("#weather");
  weatherDisplay.innerHTML = weather;
}
function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  function showLocation() {
    let apiKey = "ec60a7f865c1bc2ca6ffb4f631d54c2d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayCurrent);
  }

  let formCurrent = document.querySelector("#current");

  formCurrent.addEventListener("click", showLocation);
}

navigator.geolocation.getCurrentPosition(handlePosition);
