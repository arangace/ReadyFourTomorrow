import { useState } from "react";

const useTextToSpeech = () => {
  const [isSpeaking, setisSpeaking] = useState(false);

  const speak = (forecastToAnnounce: string, stop: boolean) => {
    speechSynthesis.cancel();
    let message = new SpeechSynthesisUtterance(forecastToAnnounce);
    if ("speechSynthesis" in window) {
      if (stop) {
        speechSynthesis.cancel();
        setisSpeaking(false);
        return;
      } else {
        speechSynthesis.speak(message);
        setisSpeaking(true);
      }

      message.addEventListener("end", () => {
        setisSpeaking(false);
        speechSynthesis.cancel();
      });
    } else {
      throw new Error("Cannot use text to speech");
    }
  };
  return { isSpeaking, speak };
};

export default useTextToSpeech;
