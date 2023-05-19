import React, { useState } from "react";
import { WeatherForecast } from "@/types/types";
import {
  Forecast,
  Summary,
  WeatherContainer,
  Temperature,
  WeatherCondition,
  WeatherForecastInformation,
} from "./WeatherStyles";

type WeatherCard = {
  weatherReport: WeatherForecast;
};
// const synth = window.speechSynthesis;
// const utterThis = new SpeechSynthesisUtterance("hello");

// synth.speak(utterThis);

const WeatherCard = ({ weatherReport }: WeatherCard) => {
  console.log(weatherReport);
  const [weatherForecast, setWeatherForecast] = useState();

  return (
    <WeatherContainer>
      <Summary>
        <Temperature>
          {weatherReport.temp} <span>&#8451;</span>
        </Temperature>
        <WeatherCondition>
          {weatherReport.weather.averageCondition}
        </WeatherCondition>
      </Summary>
      <Forecast>
        <h2>Tomorrows Weather</h2>
        <WeatherForecastInformation>
          {`Here's tomorrows weather forecast`}
          <span>{`. ${weatherReport.weather.averageCondition}`}</span>
          {weatherReport.snowChance !== "none" && (
            <span>{weatherReport.snowChance}</span>
          )}
          {`. With an average day temperature of ${weatherReport.temp} `}&#8451;
          {`. ${weatherReport.weather.morningConditions} in the morning,`}
          {` and ${weatherReport.weather.eveningConditions} in the evening`}
          {weatherReport.weather.morningConditions.includes("rain") ||
          weatherReport.weather.eveningConditions.includes("rain")
            ? ". It is recommended to bring an umbrella"
            : null}
          {weatherReport.windy === "It will be windy."
            ? `. ${weatherReport.windy.slice(0, -1)}, so do take extra care`
            : null}
          {`. Lastly, ${weatherReport.uv} Have a good day!`}
        </WeatherForecastInformation>
      </Forecast>
    </WeatherContainer>
  );
};

export default WeatherCard;
