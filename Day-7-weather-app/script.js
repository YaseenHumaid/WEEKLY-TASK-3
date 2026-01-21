const DEFAULT_CITY = "Delhi";

async function fetchWeather(city) {
  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
      document.getElementById("desc").innerText = "City not found";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    const data = await weatherRes.json();

    document.getElementById("city-name").innerText =
      `${name}, ${country}`;
    document.getElementById("time").innerText =
      `As of ${new Date().toLocaleTimeString()}`;
    document.getElementById("temp").innerText =
      `${data.current_weather.temperature}°C`;
    document.getElementById("desc").innerText =
      "Current Weather";
    document.getElementById("wind").innerText =
      data.current_weather.windspeed;
    document.getElementById("day").innerText =
      data.daily.temperature_2m_max[0];
    document.getElementById("night").innerText =
      data.daily.temperature_2m_min[0];

  } catch {
    document.getElementById("desc").innerText =
      "Unable to fetch weather";
  }
}

function searchCity() {
  const city = document.getElementById("city-input").value;
  if (city) fetchWeather(city);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

fetchWeather(DEFAULT_CITY);
