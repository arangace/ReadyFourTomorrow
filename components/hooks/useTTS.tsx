import { setIsSpeaking } from "@/store/textToSpeechSlice";
import { useDispatch } from "react-redux";

const useTextToSpeech = () => {
  const dispatch = useDispatch();

  const speak = (forecastToAnnounce: string, stop: boolean) => {
    speechSynthesis.cancel();
    let message = new SpeechSynthesisUtterance(forecastToAnnounce);
    if ("speechSynthesis" in window) {
      if (stop) {
        speechSynthesis.cancel();
        dispatch(setIsSpeaking(false));
        return;
      } else {
        speechSynthesis.speak(message);
        dispatch(setIsSpeaking(true));
      }

      message.addEventListener("end", () => {
        dispatch(setIsSpeaking(false));
        speechSynthesis.cancel();
      });
    } else {
      throw new Error("Cannot use text to speech");
    }
  };
  return { speak };
};

export default useTextToSpeech;
