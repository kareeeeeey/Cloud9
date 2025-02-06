// script.js (for index.html)
const locationInput = document.getElementById("location");
const getWeatherButton = document.getElementById("get-weather");
const cityDisplay = document.getElementById("city");
const temperatureDisplay = document.getElementById("temperature");
const conditionsDisplay = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

getWeatherButton.addEventListener("click", () => {
  const location = locationInput.value;
  getWeatherData(location);
});

async function getWeatherData(location) {
  // ... (fetch weather data - same as before) ...
}
