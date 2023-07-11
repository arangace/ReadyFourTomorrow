import React, { useEffect } from "react";
import { Summary, Temperature, WeatherCondition } from "./WeatherStyles";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { UserActionPrompt } from "@/styles/HomeStyles";

const WeatherSummary = () => {
  let conditions = localStorage.getItem("conditions");
  let temp = localStorage.getItem("temp");

  const updateWeather = () => {
    conditions = localStorage.getItem("conditions");
    temp = localStorage.getItem("temp");
  };

  const locationEnabled = useSelector(
    (state: RootState) => state.forecast.locationEnabled
  );
  useEffect(() => {
    updateWeather();
  }, [locationEnabled]);

  return locationEnabled ? (
    <Summary>
      <Temperature>
        {temp} <span>&#8451;</span>
      </Temperature>
      <WeatherCondition>{conditions}</WeatherCondition>
    </Summary>
  ) : (
    <UserActionPrompt>
      Location disabled, please enable location
    </UserActionPrompt>
  );
};

export default WeatherSummary;
