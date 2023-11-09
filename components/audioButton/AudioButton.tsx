import React from "react";
import { PauseIcon, SpeakerIcon, SummaryButton } from "./AudioButtonStyles";
import useTextToSpeech from "../hooks/useTTS";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AudioButton = () => {
  const { isSpeaking, speak } = useTextToSpeech();
  const forecast = useSelector((state: RootState) => state.forecast.text);
  const meetings = useSelector((state: RootState) => state.meetings.value);
  const summary = `${forecast} ${meetings}`;

  const handleSummaryButtonClick = () => {
    if (isSpeaking) {
      speak(summary, true);
    } else {
      speak(summary, false);
    }
  };

  return forecast !== "" && meetings !== "" ? (
    <SummaryButton type="button" onClick={handleSummaryButtonClick}>
      <span>SUMMARY</span>
      {isSpeaking ? (
        <PauseIcon className="fa-solid fa-pause"></PauseIcon>
      ) : (
        <SpeakerIcon className="fas fa-volume-up"></SpeakerIcon>
      )}
    </SummaryButton>
  ) : null;
};

export default AudioButton;
