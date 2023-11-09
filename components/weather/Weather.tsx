import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForecast, updateLocation } from "@/store/weatherSlice";
import getWeather from "../services/getWeather";
import { Location } from "@/types/types";
import getLocation from "../services/getLocation";
import { RootState } from "@/store/store";
import {
  Forecast,
  WeatherContainer,
  WeatherForecastInformation,
} from "./WeatherStyles";
import getWeatherForecast from "../services/getWeatherForecast";

type WeatherProperties = {
  showMore: boolean;
};

const Weather = ({ showMore }: WeatherProperties) => {
  const [weatherForecast, setWeatherForecast] = useState<string>();
  const [previousLocationInformation, setpreviousLocationInformation] =
    useState<Location | null>(null);
  const dispatch = useDispatch();

  const locationEnabled = useSelector(
    (state: RootState) => state.forecast.locationEnabled
  );

  const fetchWeather = async (location: Location) => {
    if (location) {
      const response = await getWeather(location);
      if (response) {
        const formattedForecast = getWeatherForecast(response);
        dispatch(updateForecast(formattedForecast));
        setWeatherForecast(formattedForecast);
      }
    }
  };

  const fetchLocation = async () => {
    const geoLocation = (await getLocation()) as Location | null;
    if (geoLocation) {
      if (geoLocation !== previousLocationInformation) {
        setpreviousLocationInformation(geoLocation);
        fetchWeather(geoLocation);
        dispatch(updateLocation(true));
      }
    } else {
      dispatch(updateLocation(false));
    }
  };
  useEffect(() => {
    fetchLocation();
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
