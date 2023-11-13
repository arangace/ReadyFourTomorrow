import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForecast, updateLocation } from "@/store/weatherSlice";
import getWeather from "../services/setWeather";
import { Location } from "@/types/types";
import getLocation from "../services/getLocation";
import { RootState } from "@/store/store";
import {
  Forecast,
  WeatherContainer,
  WeatherForecastInformation,
} from "./WeatherStyles";
import getWeatherForecast from "../services/getWeatherForecast";
import useWeather from "../hooks/useWeather";
import useLocation from "../hooks/useLocation";

type WeatherProperties = {
  showMore: boolean;
};

const Weather = ({ showMore }: WeatherProperties) => {
  const { fetchLocation } = useLocation();
  const { weatherForecast, fetchWeather } = useWeather();

  const locationEnabled = useSelector(
    (state: RootState) => state.forecast.locationEnabled
  );
  const fetchWeatherInformation = async () => {
    const location = await fetchLocation();
    if (location) {
      fetchWeather(location);
    }
  };

  useEffect(() => {
    fetchWeatherInformation();
  }, [locationEnabled]);

  return weatherForecast ? (
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
  ) : null;
};

export default Weather;
