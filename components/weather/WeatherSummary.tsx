import React from "react";
import { Summary, Temperature, WeatherCondition } from "./WeatherStyles";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { UserActionPrompt } from "@/styles/HomeStyles";

const WeatherSummary = () => {
  const conditions = localStorage.getItem("conditions");
  const temp = localStorage.getItem("temp");
  const locationEnabled = useSelector(
    (state: RootState) => state.forecast.locationEnabled
  );

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
