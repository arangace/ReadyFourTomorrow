import { WeatherForecast } from "@/types/types";
import useWeatherForecast from "../hooks/useWeatherForecast";
import {
  Forecast,
  WeatherContainer,
  WeatherForecastInformation,
} from "./WeatherStyles";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type WeatherCard = {
  weatherReport: WeatherForecast;
  showMore: boolean;
};

const WeatherCard = ({ weatherReport, showMore }: WeatherCard) => {
  useWeatherForecast(weatherReport);
  const forecast = useSelector((state: RootState) => state.forecast.text);

  return showMore ? (
    <WeatherContainer>
      {forecast && (
        <Forecast>
          <h2>Tomorrows Weather</h2>
          <WeatherForecastInformation id="forecast-content">
            {forecast}
          </WeatherForecastInformation>
        </Forecast>
      )}
    </WeatherContainer>
  ) : null;
};

export default WeatherCard;
