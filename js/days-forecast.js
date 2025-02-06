// forecast.js (for forecast.html)
const forecastDisplay = document.getElementById("forecast-display");
const locationInput = document.getElementById("location"); // Get location input from index.html (you might need to refine this if you want separate location input on this page)
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

// You'll likely want a way to trigger the forecast - either on page load or when the user searches on the home page.  Here's an example tied to the home page search:

// This example assumes you're storing the location in localStorage after the user searches on the home page.
document.addEventListener("DOMContentLoaded", () => {
  const storedLocation = localStorage.getItem("location"); // Get the location from local storage
  if (storedLocation) {
    getForecastData(storedLocation);
  }
});

async function getForecastData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    forecastDisplay.innerHTML = ""; // Clear previous forecast

    for (let i = 0; i < data.list.length; i += 8) {
      // ... (create forecast elements - same as before) ...
    }
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    forecastDisplay.innerHTML = "<p>Error fetching forecast data.</p>";
  }
}

// script.js (for index.html)
const getWeatherButton = document.getElementById("get-weather");
const cityDisplay = document.getElementById("city");
const temperatureDisplay = document.getElementById("temperature");
const conditionsDisplay = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");

getWeatherButton.addEventListener("click", () => {
  const location = locationInput.value;
  getWeatherData(location);
});

async function getWeatherData(location) {
  // ... (fetch weather data - same as before) ...
}

document.getElementById("weather-display").innerHTML =
"The weather in your area is" + cityDisplay + temperatureDisplay + conditionsDisplay + weatherIcon