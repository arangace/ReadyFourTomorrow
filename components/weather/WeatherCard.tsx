import { WeatherForecast } from "@/types/types";
import { useSelector, useDispatch } from "react-redux";
import { updateForecast } from "../../store/weatherSlice";
import { RootState } from "../../store/store";
import {
  Forecast,
  Summary,
  WeatherContainer,
  Temperature,
  WeatherCondition,
  WeatherForecastInformation,
} from "./WeatherStyles";
import { useEffect } from "react";
import AudioButton from "../audioButton/AudioButton";

type WeatherCard = {
  weatherReport: WeatherForecast;
};

const WeatherCard = ({ weatherReport }: WeatherCard) => {
  const forecast = useSelector((state: RootState) => state.forecast.value);
  const dispatch = useDispatch();

  const weatherForecast = `Here's tomorrows weather forecast. ${
    weatherReport.weather.averageCondition
  }
  ${weatherReport.snowChance !== "none" ? weatherReport.snowChance : ""}
  . With an average day temperature of ${weatherReport.temp} °C
  . ${weatherReport.weather.morningConditions} in the morning,
   and ${weatherReport.weather.eveningConditions} in the evening
  ${
    weatherReport.weather.morningConditions.includes("rain") ||
    weatherReport.weather.eveningConditions.includes("rain")
      ? ". It is recommended to bring an umbrella"
      : ""
  }
  ${
    weatherReport.windy === "It will be windy."
      ? `. ${weatherReport.windy.slice(0, -1)}, so do take extra care`
      : ""
  }
  ${`. Lastly, ${weatherReport.uv} Have a good day!`}`;

  const getForecast = () => {
    dispatch(updateForecast(weatherForecast));
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <WeatherContainer>
      <Summary>
        <Temperature>
          {weatherReport.currentConditions.temp} <span>&#8451;</span>
        </Temperature>
        <WeatherCondition>
          {weatherReport.currentConditions.conditions}
        </WeatherCondition>
      </Summary>
      <AudioButton />
      <Forecast>
        <h2>Tomorrows Weather</h2>
        <WeatherForecastInformation>{forecast}</WeatherForecastInformation>
      </Forecast>
    </WeatherContainer>
  );
};

export default WeatherCard;
