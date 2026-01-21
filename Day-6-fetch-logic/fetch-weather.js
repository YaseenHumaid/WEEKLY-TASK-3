const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=11.25&longitude=75.77&current_weather=true";

async function fetchWeather() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    console.log("Current Temperature:", data.current_weather.temperature);
    console.log("Wind Speed:", data.current_weather.windspeed);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchWeather();
