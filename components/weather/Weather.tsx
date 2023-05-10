import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { WeatherForecast } from "@/types/types";
import { WeatherPrompt } from "./WeatherStyles";
type Location = {
  lat: number;
  long: number;
};

const Weather = () => {
  const [location, setLocation] = useState<Location>();
  const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationEnabled(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        setLocationEnabled(true);
      },
      (error) => {
        setLocationEnabled(false);
        console.log(error);
      }
    );
  }, [locationEnabled]);
  useEffect(() => {
    const getWeather = async () => {
      if (location) {
        console.log(location);
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
        if (weatherData) {
          const tomorrowsWeather = weatherData[1].day;
          const tomorrowsWeatherList = weatherData[1].hour;
          const avgWeather = tomorrowsWeather.condition.text;
          console.log("handling weather..");
          const morningWeather = tomorrowsWeatherList[8].condition.text;
          const eveningWeather = tomorrowsWeatherList[17].condition.text;
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
          console.log(weatherData[1]);
          const temperature = tomorrowsWeather.avgtemp_c;
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
            uvConcern =
              "It is extremely highly recommended to put on sunscreen.";
          }
          const weather = {
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
          setWeatherForecast(weather);
        }
      }
    };
    getWeather();
  }, [location]);

  return (
    <div>
      {locationEnabled ? (
        weatherForecast && <WeatherCard weatherReport={weatherForecast} />
      ) : (
        <WeatherPrompt>Location disabled, please enable location</WeatherPrompt>
      )}
    </div>
  );
};

export default Weather;
