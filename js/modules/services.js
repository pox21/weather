const GEO_URL = "https://get.geojs.io/v1/ip/geo.json";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

const getGeo = async () => {
  const response = await fetch(GEO_URL);
  const data = await response.json();
  return { latitude: data.latitude, longitude: data.longitude, city: data.city };
};

const getWeather = async () => {
  const { latitude, longitude, city } = await getGeo();
  const response = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json();
  console.log(data, city);
  return { latitude: data.latitude, longitude: data.longitude };
}

export { getWeather };