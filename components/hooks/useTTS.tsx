import { setIsSpeaking } from "@/store/textToSpeechSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useTextToSpeech = () => {
  const dispatch = useDispatch();

  const speak = (forecastToAnnounce: string) => {
    speechSynthesis.cancel();
    let message = new SpeechSynthesisUtterance(forecastToAnnounce);
    if ("speechSynthesis" in window) {
      speechSynthesis.speak(message);
      dispatch(setIsSpeaking(true));

      message.addEventListener("end", (event) => {
        dispatch(setIsSpeaking(false));
        speechSynthesis.cancel();
      });
    } else {
      console.log("can't speak");
      throw new Error("Cannot use text to speech");
    }
    // useEffect(() => {
    //   speechSynthesis.cancel();
    //   let message = new SpeechSynthesisUtterance(forecastToAnnounce);
    //   // const voices = speechSynthesis.getVoices();
    //   // const narratorVoice = voices.find(
    //   //   (voice) => voice.lang === "en-GB"
    //   // ) as SpeechSynthesisVoice;
    //   // message.voice = narratorVoice;
    //   message.pitch = 10;
    //   message.rate = 1;
    //   if ("speechSynthesis" in window) {
    //     console.log("speaking");
    //     speechSynthesis.speak(message);
    //     message.addEventListener("end", (event) => {
    //       console.log("ending speech");
    //       dispatch(setIsSpeaking(true));
    //     });
    //   } else {
    //     console.log("can't speak");
    //     throw new Error("Cannot use text to speech");
    //   }
    //   return () => {
    //     message.removeEventListener("end", () => dispatch(setIsSpeaking(true)));
    //     speechSynthesis.cancel();
    //   };
    // }, []);
  };
  return { speak };
};

export default useTextToSpeech;
