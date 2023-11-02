import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { WeatherForecast } from "@/types/types";
import { UserActionPrompt } from "@/styles/shared/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "@/store/weatherSlice";
import getWeather from "../services/getWeather";
import { Location } from "@/types/types";
import getLocation from "../services/getLocation";
import { RootState } from "@/store/store";

type WeatherProperties = {
  showMore: boolean;
};

const Weather = ({ showMore }: WeatherProperties) => {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  const dispatch = useDispatch();

  const locationEnabled = useSelector(
    (state: RootState) => state.forecast.locationEnabled
  );

  const fetchWeather = async (location: Location) => {
    if (location) {
      const response = await getWeather(location);
      setWeatherForecast(response);
    }
  };

  const fetchLocation = async () => {
    const geoLocation = (await getLocation()) as Location | null;
    if (geoLocation) {
      fetchWeather(geoLocation);
      dispatch(updateLocation(true));
    } else {
      dispatch(updateLocation(false));
    }
  };

  useEffect(() => {
    fetchLocation();
  }, [locationEnabled]);

  return weatherForecast ? (
    <WeatherCard showMore={showMore} weatherReport={weatherForecast} />
  ) : null;
};

export default Weather;
