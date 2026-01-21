const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=11.25&longitude=75.77&current_weather=true";

async function getCurrentTemperature() {
  try {
    const response = await fetch(WEATHER_API);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const { current_weather } = await response.json();
    console.log("Temperature:", current_weather.temperature);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getCurrentTemperature();
