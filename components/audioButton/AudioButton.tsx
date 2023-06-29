import React from "react";
import { SummaryButton } from "./AudioButtonStyles";
import TextToSpeech from "../hooks/useTTS";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "@fortawesome/fontawesome-free/css/all.css";

const AudioButton = () => {
  const forecast = useSelector((state: RootState) => state.forecast.value);

  const handleSummaryButtonClick = () => {
    TextToSpeech(forecast);
  };
  return (
    <SummaryButton onClick={handleSummaryButtonClick}>
      SUMMARY <i className="fas fa-volume-up"></i>
    </SummaryButton>
  );
};

export default AudioButton;
