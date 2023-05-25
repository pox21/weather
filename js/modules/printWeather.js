import { getWeather } from "./services.js";
const decodeWeatherCode = (code) => {
  switch (code) {
    case 0:
      return "Clear sky";
    case (1, 2, 3):
      return "Mainly clear, partly cloudy, and overcast";
    case (45, 48):
      return "Fog and depositing rime fog";
    case (51, 53, 55):
      return "Drizzle: Light, moderate, and dense intensity";
    case (56, 57):
      return "Freezing Drizzle: Light and dense intensity";
    case (61, 63, 65):
      return "Rain: Slight, moderate and heavy intensity";
    case (66, 67):
      return "Freezing Rain: Light and heavy intensity";
    case (71, 73, 75):
      return "Snow fall: Slight, moderate, and heavy intensity";
    case 77:
      return "Snow grains";
    case (80, 81, 82):
      return "Rain showers: Slight, moderate, and violent";
    case (85, 86):
      return "Snow showers slight and heavy";
    case 95:
      return "Thunderstorm: Slight or moderate";
    case (96, 99):
      return "Thunderstorm with slight and heavy hail";
    default:
      return "";
  }
};

const printWeather = async () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [weekday, dayAndMonth, year] = new Date()
    .toLocaleDateString("en-US", options)
    .split(",");
  const [month, day] = dayAndMonth.trim().split(" ");
  const { data, city } = await getWeather();
  const {
    current_weather: { temperature },
    current_weather: { weathercode },
  } = data;
  const el = `
  <div class="weather-card">
    <div class="weather-card__weather-side">
      <div class="weather-gradient"></div>
      <div class="weather-card__date-wrapper">
        <h3 class="weather-card__date-dayname">${weekday}</h3>
        <span class="weather-card__date-day">${day} ${month} ${year}</span>
        <div class="weather-card__location-wrapper">
          <span class="weather-card__location-icon" data-feather="map-pin"></span>
          <span class="weather-card__location">${city}</span>
        </div>
      </div>
      <div class="weather-card__weather-wrapper">
        <span class="weather-card__weather-icon" data-feather="sun"></span>
        <h1 class="weather-card__temp">${temperature}°C</h1>
        <h3 class="weather-card__desc">${decodeWeatherCode(weathercode)}</h3>
      </div>
    </div>
    <div class="weather-card__info-side">
      <div class="weather-card__info-wrapper">
        <ul class="weather-card__info-list">
          <li class="weather-card__info-item precipitation">
            <span class="title">PRECIPITATION</span>
            <span class="value">0 %</span>
          </li>
          <li class="weather-card__info-item humidity">
            <span class="title">HUMIDITY</span>
            <span class="value">34 %</span>
          </li>
          <li class="weather-card__info-item wind">
            <span class="title">WIND</span>
            <span class="value">0 km/h</span>
          </li>
        </ul>
      </div>
      <div class="weather-card__week-wrapper">
        <ul class="weather-card__week-list">
          <li class="weather-card__week-item active">
            <span class="day-icon" data-feather="sun"></span>
            <span class="day-name">Tue</span>
            <span class="day-temp">29°C</span>
          </li>
          <li class="weather-card__week-item">
            <span class="day-icon" data-feather="cloud"></span>
            <span class="day-name">Wed</span>
            <span class="day-temp">21°C</span>
          </li>
          <li class="weather-card__week-item">
            <span class="day-icon" data-feather="cloud-snow"></span>
            <span class="day-name">Thu</span>
            <span class="day-temp">08°C</span>
          </li>
          <li class="weather-card__week-item">
            <span class="day-icon" data-feather="cloud-rain"></span>
            <span class="day-name">Fry</span>
            <span class="day-temp">19°C</span>
          </li>
        </ul>
      </div>
      <div class="weather-card__location-wrapper">
        <button class="weather-card__location-button">
          <span class="weather-card__location-button-icon" data-feather="map-pin"></span>
          <span>Change location</span>
        </button>
      </div>
    </div>
  </div>`;

  document.querySelector(".container").innerHTML = el;
  feather.replace();
};

export { printWeather };
