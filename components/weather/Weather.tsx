import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { WeatherForecast } from "@/types/types";
import { UserActionPrompt } from "@/styles/shared/globalStyles";
import { useDispatch } from "react-redux";
import { updateLocation } from "@/store/weatherSlice";
import getWeather from "../services/getWeather";
import { Location } from "@/types/types";

type WeatherProperties = {
  showMore: boolean;
};

const Weather = ({ showMore }: WeatherProperties) => {
  const [location, setLocation] = useState<Location>();
  const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  const dispatch = useDispatch();
  const fetchWeather = async () => {
    if (location) {
      const response = await getWeather(location);
      setWeatherForecast(response);
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
    fetchWeather();
  }, [location]);

  return weatherForecast ? (
    <WeatherCard showMore={showMore} weatherReport={weatherForecast} />
  ) : null;
};

export default Weather;
