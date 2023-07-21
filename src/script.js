const apiKey = "caa700cd0e7383f6904e3258edb848dc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  if (data && data.name) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "src/IMG/cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "..src/IMG/sunny.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "..src/IMG/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "..src/IMG/drizzel.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "..src/IMG/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  } else {
    // Set default values for New York
    document.querySelector(".city").innerHTML = "New York";
    document.querySelector(".temp").innerHTML = "26°C";
    document.querySelector(".humidity").innerHTML = "50%";
    document.querySelector(".wind").innerHTML = "15km/h";
    weatherIcon.src = "";
    document.querySelector(".weather").style.display = "Clear";
  }
}
searchBox.addEventListener("input", () => {
  const city = searchBox.value.trim();
  if (city !== "") {
    checkWeather(city);
  } else {
    // Clear the weather information if the search box is empty
    document.querySelector(".city").innerHTML = "";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".wind").innerHTML = "";
    weatherIcon.src = "";
    document.querySelector(".weather").style.display = "none";
  }
});











