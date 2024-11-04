const searchBar = document.getElementById("search-bar");
const suggestions = document.getElementById("suggestions");
const weatherDisplay = document.getElementById("weather-display");
const locationName = document.getElementById("location-name");
const weatherDescription = document.getElementById("weather-description");
const temperature = document.getElementById("temperature");

let timeout;

searchBar.addEventListener("input", function () {
  clearTimeout(timeout);
  const query = searchBar.value.trim();
  if (query.length >= 3) {
    timeout = setTimeout(() => {
      fetchLocations(query);
    }, 300);
  } else {
    suggestions.innerHTML = "";
  }
});

function fetchLocations(query) {
  fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=1692c058504e430e8869dd82a7edf7ec`
  )
    .then((response) => response.json())
    .then((data) => {
      showSuggestions(data.features);
    });

}

function showSuggestions(locations) {
  suggestions.innerHTML = "";
  locations.forEach((location) => {
    const option = document.createElement("div");
    option.classList.add("cursor-pointer", "p-2", "hover:bg-gray-100");
    option.textContent = location.properties.formatted;
    option.addEventListener("click", () => selectLocation(location));
    suggestions.appendChild(option);
  });
}

function selectLocation(location) {
  searchBar.value = location.properties.formatted;
  suggestions.innerHTML = "";

  const lat = location.geometry.coordinates[1];
  const lon = location.geometry.coordinates[0];

  fetchWeather(lat, lon);
}

function fetchWeather(lat, lon) {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    )
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      });
  displayWeather(data);
}

function displayWeather(data) {
  const weatherDisplay = document.getElementById("weather-display");
  weatherDisplay.classList.remove("hidden");

  const currentWeather = data.current_weather;
  const hourlyData = data.hourly;

  weatherDisplay.innerHTML = `
      <div class="bg-gray-800 text-white w-full p-6 rounded-xl shadow-lg">
        <h2 class="text-4xl font-semibold mb-6 text-center">Current Weather</h2>
        <p class="text-lg mb-2 text-gray-300 text-center">Location: ${data.latitude.toFixed(
          2
        )}°N, ${data.longitude.toFixed(2)}°E</p>
        <div class="flex justify-around items-center mb-8">
          <div class="text-center">
            <p class="text-6xl font-bold">${currentWeather.temperature}°C</p>
            <p class="text-gray-400 text-xl">Temperature</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold">${currentWeather.windspeed} km/h</p>
            <p class="text-gray-400 text-xl">Wind Speed</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold">${currentWeather.winddirection}°</p>
            <p class="text-gray-400 text-xl">Wind Direction</p>
          </div>
        </div>

        <div class="border-t border-gray-600 pt-6 mt-4">
          <h3 class="text-2xl font-semibold mb-4 text-center">Hourly Forecast</h3>
          <div class="grid grid-cols-6 gap-4">
            ${hourlyData.time
              .slice(0, 12)
              .map(
                (time, index) => `
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                  <p class="text-sm text-gray-300">${new Date(
                    time
                  ).getHours()}:00</p>
                  <p class="text-2xl font-semibold">${
                    hourlyData.temperature_2m[index]
                  }°C</p>
                  <p class="text-sm text-gray-300">${
                    hourlyData.wind_speed_10m[index]
                  } km/h</p>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
}