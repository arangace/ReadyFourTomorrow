import { Location } from "@/types/types";

const getWeather = async (location: Location) => {
  if (location) {
    const response = await fetch("/api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: location.lat,
        long: location.long,
        days: 2,
      }),
    });
    const weatherData = await response.json();
    if (response.status === 400) {
      return;
    } else {
      if (weatherData) {
        //Using the weather data, get today and tomorrows weather information. Then construct an appropriate phrase from
        //the weather data and append it to an object with the text.
        const tomorrowsWeather = weatherData[1].day;
        const tomorrowsWeatherList = weatherData[1].hour;
        const avgWeather = tomorrowsWeather.condition.text;

        const todaysWeather = weatherData[0].day;
        const todaysWeatherForecast = todaysWeather.condition.text;

        const morningWeather = tomorrowsWeatherList[8].condition.text;
        const eveningWeather = tomorrowsWeatherList[17].condition.text;

        const temperature = tomorrowsWeather.avgtemp_c;
        const todaysTemperature = todaysWeather.avgtemp_c;

        //Constructs the new string with what the numerical value of the weather condition is i.e. rain 100% to "It will rain"
        let rainChance = "";
        if (tomorrowsWeather.daily_will_it_rain === 1) {
          rainChance = "It will rain.";
        } else if (tomorrowsWeather.daily_will_it_rain === 0) {
          rainChance = "none";
        } else {
          rainChance = `There is a ${tomorrowsWeather.daily_chance_of_rain} chance of rain.`;
        }

        let snowChance = "";
        if (tomorrowsWeather.daily_will_it_snow === 1) {
          snowChance = "It will snow.";
        } else if (tomorrowsWeather.daily_will_it_snow === 0) {
          snowChance = "none";
        } else {
          snowChance = `There is a ${tomorrowsWeather.daily_chance_of_snow} chance of rain.`;
        }

        let isWindy = "";
        if (tomorrowsWeather.maxwind_kph >= 39) {
          isWindy = "It will be windy.";
        } else {
          isWindy = "It will not be windy.";
        }

        let uvConcern = "";
        if (tomorrowsWeather.uv <= 5) {
          uvConcern = "It is recommended to put on sunscreen.";
        } else if (tomorrowsWeather.uv <= 7) {
          uvConcern = "It is highly recommended to put on sunscreen.";
        } else if (tomorrowsWeather.uv <= 10) {
          uvConcern = "It is very highly recommended to put on sunscreen.";
        } else if (tomorrowsWeather.uv > 10) {
          uvConcern = "It is extremely highly recommended to put on sunscreen.";
        }

        const weather = {
          currentConditions: {
            temp: todaysTemperature,
            conditions: todaysWeatherForecast,
          },
          weather: {
            morningConditions: morningWeather,
            eveningConditions: eveningWeather,
            averageCondition: avgWeather,
          },
          rainChance: rainChance,
          snowChance: snowChance,
          temp: temperature,
          windy: isWindy,
          uv: uvConcern,
        };

        localStorage.setItem(
          "conditions",
          weather.currentConditions.conditions
        );
        localStorage.setItem("temp", weather.currentConditions.temp);
        return weather;
      }
    }
  }
};
export default getWeather;
