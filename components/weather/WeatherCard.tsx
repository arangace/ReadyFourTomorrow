import { WeatherForecast } from "@/types/types";
import { useSelector, useDispatch } from "react-redux";
import { updateForecast } from "../../store/weatherSlice";
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
  showMore: boolean;
};

const WeatherCard = ({ weatherReport, showMore }: WeatherCard) => {
  const dispatch = useDispatch();

  const weatherForecast = `Here's tomorrows weather forecast. ${
    weatherReport.weather.averageCondition
  }.
  ${weatherReport.snowChance !== "none" ? weatherReport.snowChance : ""}
  With an average day temperature of ${weatherReport.temp} °C
  . ${weatherReport.weather.morningConditions} in the morning,
   and ${weatherReport.weather.eveningConditions} in the evening.
  ${
    weatherReport.weather.morningConditions.includes("rain") ||
    weatherReport.weather.eveningConditions.includes("rain")
      ? "It is recommended to bring an umbrella"
      : ""
  }
  ${
    weatherReport.windy === "It will be windy."
      ? `${weatherReport.windy.slice(0, -1)}, so do take extra care`
      : ""
  }
  ${`Lastly, ${weatherReport.uv} Have a good day!`}`;
  dispatch(updateForecast(weatherForecast));
  return (
    <WeatherContainer>
      {showMore && (
        <Forecast>
          <h2>Tomorrows Weather</h2>
          <WeatherForecastInformation id="forecast-content">
            {weatherForecast}
          </WeatherForecastInformation>
        </Forecast>
      )}
    </WeatherContainer>
  );
};

export default WeatherCard;
