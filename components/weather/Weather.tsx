import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { WeatherForecast } from "@/types/types";
import { UserActionPrompt } from "@/styles/shared/globalStyles";
import { useDispatch } from "react-redux";
import { updateLocation } from "@/store/weatherSlice";

type Location = {
  lat: number;
  long: number;
};
type WeatherProperties = {
  showMore: boolean;
};

const Weather = ({ showMore }: WeatherProperties) => {
  const [location, setLocation] = useState<Location>();
  const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
  const [gotWeatherInfo, setGotWeatherInfo] = useState<boolean>(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  const dispatch = useDispatch();
  const getWeather = async () => {
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
            uvConcern =
              "It is extremely highly recommended to put on sunscreen.";
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

          setWeatherForecast(weather);
          localStorage.setItem(
            "conditions",
            weather.currentConditions.conditions
          );
          localStorage.setItem("temp", weather.currentConditions.temp);
          setGotWeatherInfo(true);
        }
      }
    }
  };
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
    dispatch(updateLocation(locationEnabled));
  }, [locationEnabled]);

  useEffect(() => {
    getWeather();
  }, [location]);

  return weatherForecast ? (
    <WeatherCard showMore={showMore} weatherReport={weatherForecast} />
  ) : null;
};

export default Weather;
