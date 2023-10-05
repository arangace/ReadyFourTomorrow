import React from "react";
import { PauseIcon, SpeakerIcon, SummaryButton } from "./AudioButtonStyles";
import useTextToSpeech from "../hooks/useTTS";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AudioButton = () => {
  const { speak } = useTextToSpeech();
  const forecast = useSelector((state: RootState) => state.forecast.text);
  const meetings = useSelector((state: RootState) => state.meetings.value);
  const audioPlaying = useSelector((state: RootState) => state.tts.isSpeaking);

  const handleSummaryButtonClick = () => {
    const summary = `${forecast} ${meetings}`;
    console.log(summary);
    if (audioPlaying) {
      speak(summary, true);
    } else {
      speak(summary, false);
    }
  };

  return (
    <SummaryButton type="button" onClick={handleSummaryButtonClick}>
      SUMMARY
      {audioPlaying ? (
        <PauseIcon className="fa-solid fa-pause"></PauseIcon>
      ) : (
        <SpeakerIcon className="fas fa-volume-up"></SpeakerIcon>
      )}
    </SummaryButton>
  );
};

export default AudioButton;
