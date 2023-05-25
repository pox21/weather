import { getWeather } from "./modules/services.js";
console.log("hello")

const decodeWeatherCode = (code) => {
  switch(code) {
    case 0:
      return "Clear sky";
    case 1, 2, 3:
      return "Mainly clear, partly cloudy, and overcast";
    case 45, 48:
      return "Fog and depositing rime fog";
    case 51, 53, 55:
      return "Drizzle: Light, moderate, and dense intensity";
    case 56, 57:
      return "Freezing Drizzle: Light and dense intensity";
    case 61, 63, 65:
      return "Rain: Slight, moderate and heavy intensity";
    case 66, 67:
      return "Freezing Rain: Light and heavy intensity";
    case 71, 73, 75:
      return "Snow fall: Slight, moderate, and heavy intensity";
    case 77:
      return "Snow grains";
    case 80, 81, 82:
      return "Rain showers: Slight, moderate, and violent";
    case 85, 86:
      return "Snow showers slight and heavy";
    case 95:
      return "Thunderstorm: Slight or moderate";
    case 96, 99:
      return "Thunderstorm with slight and heavy hail";
    default:
      return "";
  }
  
}

const printWeather = async () => {
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const { data, city } = await getWeather();
  console.log(data, city);
  const el = `<div class="weather-side">
        <div class="weather-gradient"></div>
        <div class="date-container">
            <h2 class="date-dayname">${
              week[new Date().getDay() - 1]
            }</h2><span class="date-day">${new Date().toLocaleDateString()}</span><i class="location-icon" data-feather="map-pin"></i><span class="location">${city}</span>
        </div>
        <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
            <h1 class="weather-temp">${data.current_weather.temperature}°C</h1>
            <h3 class="weather-desc">${decodeWeatherCode(
              data.current_weather.weathercode
            )}</h3>
        </div>
    </div>
    <div class="info-side">
        <div class="today-info-container">
            <div class="today-info">
                <div class="precipitation"> <span class="title">PRECIPITATION</span><span class="value">0 %</span>
                    <div class="clear"></div>
                </div>
                <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">34 %</span>
                    <div class="clear"></div>
                </div>
                <div class="wind"> <span class="title">WIND</span><span class="value">0 km/h</span>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="week-container">
            <ul class="week-list">
                <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span class="day-temp">29°C</span></li>
                <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span class="day-temp">21°C</span></li>
                <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span class="day-temp">08°C</span></li>
                <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span class="day-temp">19°C</span></li>
                <div class="clear"></div>
            </ul>
        </div>
        <div class="location-container"><button class="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
          <p style="text-align:center;">
            <small>the information here may not be true,</small><br>
            <small>this functionality is under development</small>
          </p>
        </div>
        
        
    </div>`;

    document.querySelector(".container").innerHTML = el;
}

printWeather()