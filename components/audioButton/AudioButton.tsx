import React, { useEffect } from "react";
import { SummaryButton } from "./AudioButtonStyles";
import useTextToSpeech from "../hooks/useTTS";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "@fortawesome/fontawesome-free/css/all.css";
import { setIsSpeaking } from "@/store/textToSpeechSlice";

const AudioButton = () => {
  const synth = window.speechSynthesis;
  const { speak } = useTextToSpeech();

  const forecast = useSelector((state: RootState) => state.forecast.value);
  const meetings = useSelector((state: RootState) => state.meetings.value);
  const audioPlaying = useSelector((state: RootState) => state.tts.isSpeaking);

  const handleSummaryButtonClick = () => {
    const summary = `${forecast} ${meetings}`;
    console.log(summary);
    speak(summary);
  };
  useEffect(() => {
    console.log("audio is playing..");
    console.log(audioPlaying);
  }, [audioPlaying]);

  return (
    <SummaryButton onClick={handleSummaryButtonClick}>
      SUMMARY
      {audioPlaying && <i className="fas fa-volume-up"></i>}
    </SummaryButton>
  );
};

export default AudioButton;
