

//_________________________________________________________________________________________Const

const buttonSubmit = document.querySelector(".submit");
const buttonClear = document.querySelector(".clear");
const city = document.querySelector("#city");
const app = document.querySelector(".weather--app");

//__________________________________________________________________________________________CurrentDays

const fetchWeather = async (city) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`
    );
    await res.json().then((data) => {
      const dayOne = document.createElement("article");
      app.appendChild(dayOne);
      dayOne.setAttribute("class", "day_one");

      const containerPartOne = document.createElement("div");
      dayOne.appendChild(containerPartOne);
      containerPartOne.setAttribute("class", "city_data");

      const city = document.createElement("h2");
      city.textContent = data.city.name + ", " + data.city.country;
      containerPartOne.appendChild(city);

      const dateOne = document.createElement("p");
      dateOne.setAttribute("class", "date");
      const date = data.list[0].dt;
      const day = new Date(date * 1000);
      dateOne.textContent = day.toDateString();
      containerPartOne.appendChild(dateOne);

      const tempData = document.createElement("div");
      tempData.setAttribute("class", "temp_data");
      dayOne.appendChild(tempData);

      const icon = document.createElement("img");
      tempData.appendChild(icon);
      const icon_data = data.list[0].weather[0].icon;
      const icon_link = `http://openweathermap.org/img/wn/${icon_data}.png`;
      icon.src = icon_link;
      icon.alt = "icon";

      const weatherDescription = document.createElement("p");
      weatherDescription.setAttribute("class", "description");
      weatherDescription.textContent = data.list[0].weather[0].description;
      tempData.appendChild(weatherDescription);

      const tempOne = document.createElement("p");
      tempOne.setAttribute("class", "temp");
      tempOne.textContent = Math.floor(data.list[0].main.temp) + "°C";
      tempData.appendChild(tempOne);

      const otherWeatherData = document.createElement("div");
      otherWeatherData.setAttribute("class", "weather_data");
      dayOne.appendChild(otherWeatherData);

      const weatherOne = document.createElement("p");
      weatherOne.setAttribute("class", "weather");
      weatherOne.textContent =
        "Feels like " + Math.floor(data.list[0].main.feels_like) + "°C";
      otherWeatherData.appendChild(weatherOne);

      const min = document.createElement("p");
      min.textContent = "Min: " + Math.floor(data.list[0].main.temp_min) + "°C";
      otherWeatherData.appendChild(min);

      const max = document.createElement("p");
      max.textContent = "Max: " + Math.floor(data.list[0].main.temp_max) + "°C";
      otherWeatherData.appendChild(max);

      const humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      otherWeatherData.appendChild(humidity);

      const wind = document.createElement("p");
      const windSpeed = data.list[0].wind.speed;
      const WindSpeedByKm = Math.floor(windSpeed * 3.6);
      wind.textContent = "wind speed: " + WindSpeedByKm + " km/h";
      otherWeatherData.appendChild(wind);

      window.localStorage.LastCityAsk = city.textContent;
    });
  } catch (error) {
    alert("There is an error somewhere!");
  }
};

//_____________________________________________________________________________________FallowingDays

const fetchWeatherFallowingDays = async (city) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`
    );
    await res.json().then((data) => {
      const fallowing_day = document.createElement("article");
      app.appendChild(fallowing_day);
      fallowing_day.setAttribute("class", "container_fallowing_days");

      //_____________________________________________________________________________________Function

      let fallowingDaysWeatherDisplay = (e) => {
        const day = document.createElement("div");
        fallowing_day.appendChild(day);
        day.setAttribute("class", "fallowing_days");

        const date = document.createElement("p");
        day.appendChild(date);
        const dateData = data.list[e].dt;
        const dayData = new Date(dateData * 1000);
        date.textContent = dayData.toDateString();

        const icon = document.createElement("img");
        day.appendChild(icon);
        const icon_data = data.list[e].weather[0].icon;
        const icon_link = `http://openweathermap.org/img/wn/${icon_data}.png`;
        icon.src = icon_link;
        icon.alt = "icon";

        const weather = document.createElement("p");
        day.appendChild(weather);
        weather.textContent = data.list[e].weather[0].description;

        const temp = document.createElement("p");
        day.appendChild(temp);
        temp.textContent = Math.floor(data.list[e].main.temp) + "°C";
      };

      //_________________________________________________________________________________________Days

      fallowingDaysWeatherDisplay(7);
      fallowingDaysWeatherDisplay(15);
      fallowingDaysWeatherDisplay(23);
      fallowingDaysWeatherDisplay(31);
    });
  } catch (error) {
    alert("There is an error somewhere!");
  }
};

//________________________________________________________________________________________________GRAPH

const fetchGraph = async (city) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`
    );
    await res.json().then((data) => {
      //__________________________________________________________________________________________Function

      let GetDate = (e) => {
        const date = data.list[e].dt;
        const day = new Date(date * 1000);

        return day.toDateString();
      };

      //__________________________________________________________________________________________MyGraph


      let chartStatus = Chart.getChart("myChart");
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }

      const ctx = document.getElementById("myChart").getContext("2d");

      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            GetDate(0),
            GetDate(7),
            GetDate(15),
            GetDate(23),
            GetDate(31),
          ],
          datasets: [
            {
              label:
                "Graph for the fallowing days for " +
                data.city.name +
                ", " +
                data.city.country,
              data: [
                Math.floor(data.list[0].main.temp),
                Math.floor(data.list[7].main.temp),
                Math.floor(data.list[15].main.temp),
                Math.floor(data.list[23].main.temp),
                Math.floor(data.list[31].main.temp),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {},
      });
    });
  } catch (error) {
    alert("There is an error somewhere!");
  }
};

//________________________________________________________________________________________________ PICTURES

import { randomPictures } from "./modules/randomPictures.js";

import { randomPicturesOnLoad } from "./modules/randomPicturesOnLoad.js";

//________________________________________________________________________________________________ EVENTS

const CityAsk = localStorage.getItem("LastCityAsk");

buttonSubmit.addEventListener("click", () => {
  randomPictures();
  fetchWeather(city.value);
  fetchWeatherFallowingDays(city.value);
  fetchGraph(city.value);

  city.value = "";
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    randomPictures();
    fetchWeather(city.value);
    fetchWeatherFallowingDays(city.value);
    fetchGraph(city.value);

    city.value = "";
  }
});

buttonClear.addEventListener("click", () => {
  location.reload();
});

window.addEventListener("load", () => {
  if (CityAsk) {
    randomPicturesOnLoad(localStorage.LastCityAsk);
    fetchWeather(localStorage.LastCityAsk);
    fetchWeatherFallowingDays(localStorage.LastCityAsk);
    fetchGraph(localStorage.LastCityAsk);
  } else {
    randomPictures("san sebastian, PR");
    fetchWeather("san sebastian, PR");
    fetchWeatherFallowingDays("san sebastian, PR");
    fetchGraph("san sebastian, PR");
  }
});
