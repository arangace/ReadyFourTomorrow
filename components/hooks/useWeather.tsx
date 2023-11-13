import React, { useState } from "react";
import getWeather from "../services/setWeather";
import getWeatherForecast from "../services/getWeatherForecast";
import { updateForecast } from "@/store/weatherSlice";
import { useDispatch } from "react-redux";
import { Location } from "@/types/types";

type CurrentConditions = {
  temp: string;
  conditions: string;
  icon: string;
};

const useWeather = () => {
  const [weatherForecast, setWeatherForecast] = useState<string>();
  const [currentConditions, setCurrentConditions] =
    useState<CurrentConditions>();
  const dispatch = useDispatch();

  const fetchWeather = async (location: Location) => {
    if (location) {
      const response = await getWeather(location);
      if (response) {
        const formattedForecast = getWeatherForecast(response);
        dispatch(updateForecast(formattedForecast));
        setWeatherForecast(formattedForecast);
        setCurrentConditions(() => response.currentConditions);
      }
    }
  };
  const updateCurrentWeatherStore = () => {
    if (currentConditions) {
      localStorage.setItem("conditions", currentConditions.conditions);
      localStorage.setItem("temp", currentConditions.temp);
      localStorage.setItem("icon", currentConditions.icon);
    }
  };
  return {
    fetchWeather,
    updateCurrentWeatherStore,
    weatherForecast,
    currentConditions,
  };
};

export default useWeather;
