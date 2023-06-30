import React from "react";
import { SummaryButton } from "./AudioButtonStyles";
import TextToSpeech from "../hooks/useTTS";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "@fortawesome/fontawesome-free/css/all.css";

const AudioButton = () => {
  const forecast = useSelector((state: RootState) => state.forecast.value);
  const meetings = useSelector((state: RootState) => state.meetings.value);
  const handleSummaryButtonClick = () => {
    const summary = `${forecast} ${meetings}`;
    console.log(summary);
    TextToSpeech(summary);
  };
  return (
    <SummaryButton onClick={handleSummaryButtonClick}>
      SUMMARY <i className="fas fa-volume-up"></i>
    </SummaryButton>
  );
};

export default AudioButton;
