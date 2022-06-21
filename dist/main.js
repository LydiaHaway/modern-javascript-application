/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_randomPictures_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/randomPictures.js */ \"./src/modules/randomPictures.js\");\n/* harmony import */ var _modules_randomPicturesOnLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/randomPicturesOnLoad.js */ \"./src/modules/randomPicturesOnLoad.js\");\nconst buttonSubmit = document.querySelector(\".submit\");\r\nconst buttonClear = document.querySelector(\".clear\");\r\nconst city = document.querySelector(\"#city\");\r\nconst app = document.querySelector(\".weather--app\");\r\n\r\n//__________________________________________________________________________________________CurrentDays\r\n\r\nconst fetchWeather = async (city) => {\r\n  try {\r\n    let res = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`\r\n    );\r\n    await res.json().then((data) => {\r\n      const dayOne = document.createElement(\"article\");\r\n      app.appendChild(dayOne);\r\n      dayOne.setAttribute(\"class\", \"day_one\");\r\n\r\n      const containerPartOne = document.createElement(\"div\");\r\n      dayOne.appendChild(containerPartOne);\r\n      containerPartOne.setAttribute(\"class\", \"city_data\");\r\n\r\n      const city = document.createElement(\"h2\");\r\n      city.textContent = data.city.name + \", \" + data.city.country;\r\n      containerPartOne.appendChild(city);\r\n\r\n      const dateOne = document.createElement(\"p\");\r\n      dateOne.setAttribute(\"class\", \"date\");\r\n      const date = data.list[0].dt;\r\n      const day = new Date(date * 1000);\r\n      dateOne.textContent = day.toDateString();\r\n      containerPartOne.appendChild(dateOne);\r\n\r\n      const tempData = document.createElement(\"div\");\r\n      tempData.setAttribute(\"class\", \"temp_data\");\r\n      dayOne.appendChild(tempData);\r\n\r\n      const icon = document.createElement(\"img\");\r\n      tempData.appendChild(icon);\r\n      const icon_data = data.list[0].weather[0].icon;\r\n      const icon_link = `http://openweathermap.org/img/wn/${icon_data}.png`;\r\n      icon.src = icon_link;\r\n      icon.alt = \"icon\";\r\n\r\n      const weatherDescription = document.createElement(\"p\");\r\n      weatherDescription.setAttribute(\"class\", \"description\");\r\n      weatherDescription.textContent = data.list[0].weather[0].description;\r\n      tempData.appendChild(weatherDescription);\r\n\r\n      const tempOne = document.createElement(\"p\");\r\n      tempOne.setAttribute(\"class\", \"temp\");\r\n      tempOne.textContent = Math.floor(data.list[0].main.temp) + \"°C\";\r\n      tempData.appendChild(tempOne);\r\n\r\n      const otherWeatherData = document.createElement(\"div\");\r\n      otherWeatherData.setAttribute(\"class\", \"weather_data\");\r\n      dayOne.appendChild(otherWeatherData);\r\n\r\n      const weatherOne = document.createElement(\"p\");\r\n      weatherOne.setAttribute(\"class\", \"weather\");\r\n      weatherOne.textContent =\r\n        \"Feels like \" + Math.floor(data.list[0].main.feels_like) + \"°C\";\r\n      otherWeatherData.appendChild(weatherOne);\r\n\r\n      const min = document.createElement(\"p\");\r\n      min.textContent = \"Min: \" + Math.floor(data.list[0].main.temp_min) + \"°C\";\r\n      otherWeatherData.appendChild(min);\r\n\r\n      const max = document.createElement(\"p\");\r\n      max.textContent = \"Max: \" + Math.floor(data.list[0].main.temp_max) + \"°C\";\r\n      otherWeatherData.appendChild(max);\r\n\r\n      const humidity = document.createElement(\"p\");\r\n      humidity.textContent = \"Humidity: \" + data.list[0].main.humidity + \"%\";\r\n      otherWeatherData.appendChild(humidity);\r\n\r\n      const wind = document.createElement(\"p\");\r\n      const windSpeed = data.list[0].wind.speed;\r\n      const WindSpeedByKm = Math.floor(windSpeed * 3.6);\r\n      wind.textContent = \"wind speed: \" + WindSpeedByKm + \" km/h\";\r\n      otherWeatherData.appendChild(wind);\r\n\r\n      window.localStorage.LastCityAsk = city.textContent;\r\n    });\r\n  } catch (error) {\r\n    alert(\"There is an error somewhere!\");\r\n  }\r\n};\r\n\r\n//_____________________________________________________________________________________FallowingDays\r\n\r\nconst fetchWeatherFallowingDays = async (city) => {\r\n  try {\r\n    let res = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`\r\n    );\r\n    await res.json().then((data) => {\r\n      const fallowing_day = document.createElement(\"article\");\r\n      app.appendChild(fallowing_day);\r\n      fallowing_day.setAttribute(\"class\", \"container_fallowing_days\");\r\n\r\n      //_____________________________________________________________________________________Function\r\n\r\n      let fallowingDaysWeatherDisplay = (e) => {\r\n        const day = document.createElement(\"div\");\r\n        fallowing_day.appendChild(day);\r\n        day.setAttribute(\"class\", \"fallowing_days\");\r\n\r\n        const date = document.createElement(\"p\");\r\n        day.appendChild(date);\r\n        const dateData = data.list[e].dt;\r\n        const dayData = new Date(dateData * 1000);\r\n        date.textContent = dayData.toDateString();\r\n\r\n        const icon = document.createElement(\"img\");\r\n        day.appendChild(icon);\r\n        const icon_data = data.list[e].weather[0].icon;\r\n        const icon_link = `http://openweathermap.org/img/wn/${icon_data}.png`;\r\n        icon.src = icon_link;\r\n        icon.alt = \"icon\";\r\n\r\n        const weather = document.createElement(\"p\");\r\n        day.appendChild(weather);\r\n        weather.textContent = data.list[e].weather[0].description;\r\n\r\n        const temp = document.createElement(\"p\");\r\n        day.appendChild(temp);\r\n        temp.textContent = Math.floor(data.list[e].main.temp) + \"°C\";\r\n      };\r\n\r\n      //_________________________________________________________________________________________Days\r\n\r\n      fallowingDaysWeatherDisplay(7);\r\n      fallowingDaysWeatherDisplay(15);\r\n      fallowingDaysWeatherDisplay(23);\r\n      fallowingDaysWeatherDisplay(31);\r\n    });\r\n  } catch (error) {\r\n    alert(\"There is an error somewhere!\");\r\n  }\r\n};\r\n\r\n//________________________________________________________________________________________________GRAPH\r\n\r\nconst fetchGraph = async (city) => {\r\n  try {\r\n    let res = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`\r\n    );\r\n    await res.json().then((data) => {\r\n      //__________________________________________________________________________________________Function\r\n\r\n      let GetDate = (e) => {\r\n        const date = data.list[0].dt;\r\n        const day = new Date(date * 1000);\r\n\r\n        return day.toDateString();\r\n      };\r\n\r\n      //__________________________________________________________________________________________MyGraph\r\n\r\n      let chartStatus = Chart.getChart(\"myChart\");\r\n      if (chartStatus != undefined) {\r\n        chartStatus.destroy();\r\n      }\r\n\r\n      const ctx = document.getElementById(\"myChart\").getContext(\"2d\");\r\n      const myChart = new Chart(ctx, {\r\n        type: \"line\",\r\n        data: {\r\n          labels: [\r\n            GetDate(0),\r\n            GetDate(7),\r\n            GetDate(15),\r\n            GetDate(23),\r\n            GetDate(31),\r\n          ],\r\n          datasets: [\r\n            {\r\n              label:\r\n                \"Graph for the fallowing days for \" +\r\n                data.city.name +\r\n                \", \" +\r\n                data.city.country,\r\n              data: [\r\n                Math.floor(data.list[0].main.temp),\r\n                Math.floor(data.list[7].main.temp),\r\n                Math.floor(data.list[15].main.temp),\r\n                Math.floor(data.list[23].main.temp),\r\n                Math.floor(data.list[31].main.temp),\r\n              ],\r\n              backgroundColor: [\r\n                \"rgba(255, 99, 132, 0.2)\",\r\n                \"rgba(54, 162, 235, 0.2)\",\r\n                \"rgba(255, 206, 86, 0.2)\",\r\n                \"rgba(75, 192, 192, 0.2)\",\r\n                \"rgba(153, 102, 255, 0.2)\",\r\n                \"rgba(255, 159, 64, 0.2)\",\r\n              ],\r\n              borderColor: [\r\n                \"rgba(255, 99, 132, 1)\",\r\n                \"rgba(54, 162, 235, 1)\",\r\n                \"rgba(255, 206, 86, 1)\",\r\n                \"rgba(75, 192, 192, 1)\",\r\n                \"rgba(153, 102, 255, 1)\",\r\n                \"rgba(255, 159, 64, 1)\",\r\n              ],\r\n              borderWidth: 1,\r\n            },\r\n          ],\r\n        },\r\n        options: {},\r\n      });\r\n    });\r\n  } catch (error) {\r\n    alert(\"There is an error somewhere!\");\r\n  }\r\n};\r\n\r\n//________________________________________________________________________________________________ PICTURES\r\n\r\n\r\n\r\n\r\n\r\n//________________________________________________________________________________________________ EVENTS\r\n\r\nconst CityAsk = localStorage.getItem(\"LastCityAsk\");\r\n\r\nbuttonSubmit.addEventListener(\"click\", () => {\r\n  (0,_modules_randomPictures_js__WEBPACK_IMPORTED_MODULE_0__.randomPictures)();\r\n  fetchWeather(city.value);\r\n  fetchWeatherFallowingDays(city.value);\r\n  fetchGraph(city.value);\r\n\r\n  city.value = \"\";\r\n});\r\n\r\ndocument.addEventListener(\"keypress\", (e) => {\r\n  if (e.key === \"Enter\") {\r\n    (0,_modules_randomPictures_js__WEBPACK_IMPORTED_MODULE_0__.randomPictures)();\r\n    fetchWeather(city.value);\r\n    fetchWeatherFallowingDays(city.value);\r\n    fetchGraph(city.value);\r\n\r\n    city.value = \"\";\r\n  }\r\n});\r\n\r\nbuttonClear.addEventListener(\"click\", () => {\r\n  location.reload();\r\n});\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  if (CityAsk) {\r\n    (0,_modules_randomPicturesOnLoad_js__WEBPACK_IMPORTED_MODULE_1__.randomPicturesOnLoad)(localStorage.LastCityAsk);\r\n    fetchWeather(localStorage.LastCityAsk);\r\n    fetchWeatherFallowingDays(localStorage.LastCityAsk);\r\n    fetchGraph(localStorage.LastCityAsk);\r\n  } else {\r\n    (0,_modules_randomPictures_js__WEBPACK_IMPORTED_MODULE_0__.randomPictures)(\"san sebastian, PR\");\r\n    fetchWeather(\"san sebastian, PR\");\r\n    fetchWeatherFallowingDays(\"san sebastian, PR\");\r\n    fetchGraph(\"san sebastian, PR\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://modern-javascript-application/./src/index.js?");

/***/ }),

/***/ "./src/modules/randomPictures.js":
/*!***************************************!*\
  !*** ./src/modules/randomPictures.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomPictures\": () => (/* binding */ randomPictures)\n/* harmony export */ });\nlet randomPictures = () => {\r\n  const app = document.querySelector(\".weather--app\");\r\n  const containerPictures = document.createElement(\"div\");\r\n  app.appendChild(containerPictures);\r\n  containerPictures.setAttribute(\"class\", \"containerPictures\");\r\n  const picturesRandom = document.createElement(\"img\");\r\n  containerPictures.appendChild(picturesRandom);\r\n  picturesRandom.src = `https://source.unsplash.com/random/?${city.value}`;\r\n  picturesRandom.alt = \"city_illustration\";\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://modern-javascript-application/./src/modules/randomPictures.js?");

/***/ }),

/***/ "./src/modules/randomPicturesOnLoad.js":
/*!*********************************************!*\
  !*** ./src/modules/randomPicturesOnLoad.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomPicturesOnLoad\": () => (/* binding */ randomPicturesOnLoad)\n/* harmony export */ });\nlet randomPicturesOnLoad = () => {\r\n  const app = document.querySelector(\".weather--app\");\r\n  const containerPictures = document.createElement(\"div\");\r\n  app.appendChild(containerPictures);\r\n  containerPictures.setAttribute(\"class\", \"containerPictures\");\r\n  const picturesRandom = document.createElement(\"img\");\r\n  containerPictures.appendChild(picturesRandom);\r\n  picturesRandom.src = `https://source.unsplash.com/random/?${localStorage.LastCityAsk}`;\r\n  picturesRandom.alt = \"city_illustration\";\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://modern-javascript-application/./src/modules/randomPicturesOnLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;