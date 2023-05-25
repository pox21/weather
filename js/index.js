import { getWeather } from "./modules/services.js";
console.log("hello")


const printWeather = async () => {
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const { data, city } = await getWeather();
  console.log(data, city);
  const el = `<div class="weather-side">
        <div class="weather-gradient"></div>
        <div class="date-container">
            <h2 class="date-dayname">${week[new Date().getDay() - 1]}</h2><span class="date-day">${new Date().toLocaleDateString()}</span><i class="location-icon" data-feather="map-pin"></i><span class="location">${city}</span>
        </div>
        <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
            <h1 class="weather-temp">${data.current_weather.winddirection}°C</h1>
            <h3 class="weather-desc">Sunny</h3>
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
        <div class="location-container"><button class="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button></div>
    </div>`;

    document.querySelector(".container").innerHTML = el;
}

printWeather()