import React, { useState } from "react";
import { WeatherForecast } from "@/types/types";
import { Forecast, SummaryContainer, WeatherContainer } from "./WeatherStyles";

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
      <SummaryContainer>
        <h2>
          {weatherReport.temp} <span>&#8451;</span>
        </h2>
        <h3>{weatherReport.weather.averageCondition}</h3>
      </SummaryContainer>
      <Forecast>
        <h2>Tomorrows Weather</h2>
        <h3>Here{`'`}s tomorrows weather forecast</h3>
        <p>
          {weatherReport.rainChance !== "none" && (
            <span>{weatherReport.rainChance}</span>
          )}
          {weatherReport.snowChance !== "none" && (
            <span>{weatherReport.snowChance}</span>
          )}
          {` With an average day temperature of ${weatherReport.temp}`}&#8451;
          {"."}
          {` There is ${weatherReport.weather.morningConditions} in the morning`}
          {` and ${weatherReport.weather.eveningConditions} in the evening`}
          {weatherReport.weather.morningConditions.includes("rain") ||
          weatherReport.weather.eveningConditions.includes("rain")
            ? ", so it is recommended to bring an umbrella."
            : null}
          {weatherReport.windy === "It will be windy."
            ? `${weatherReport.windy}, do take extra care.`
            : null}
          {` Lastly, ${weatherReport.uv}`}
        </p>
      </Forecast>
    </WeatherContainer>
  );
};

export default WeatherCard;
