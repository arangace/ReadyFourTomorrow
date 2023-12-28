import React, { useEffect, useRef } from "react";
import { Summary, Temperature, WeatherCondition } from "./WeatherStyles";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { UserActionPrompt } from "@/styles/HomeStyles";
import Image from "next/image";
import useWeather from "../hooks/useWeather";

const WeatherSummary = () => {
  const conditions = useRef(localStorage.getItem("conditions"));
  const temp = useRef(localStorage.getItem("temp"));
  const icon = useRef(localStorage.getItem("icon"));
  const { updateCurrentWeatherStore, currentConditions } = useWeather();
  const locationEnabled = useSelector(
    (state: RootState) => state.forecast.locationEnabled
  );
  useEffect(() => {
    if (currentConditions) {
      conditions.current = currentConditions.conditions;
      temp.current = currentConditions.temp;
      icon.current = currentConditions.icon;
      updateCurrentWeatherStore();
    }
  }, []);

  return locationEnabled ? (
    <Summary>
      <Temperature>
        {temp.current} <span>&#8451;</span>
      </Temperature>
      <WeatherCondition>
        {conditions.current}
        {icon.current && <img alt={"Weather icon"} src={icon.current} />}
      </WeatherCondition>
    </Summary>
  ) : (
    <UserActionPrompt>
      Location disabled, please enable location
    </UserActionPrompt>
  );
};

export default WeatherSummary;
