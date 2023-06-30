const TextToSpeech = (forecastToAnnounce: string) => {
  speechSynthesis.cancel();
  let message = new SpeechSynthesisUtterance(forecastToAnnounce);
  // const voices = speechSynthesis.getVoices();
  // const narratorVoice = voices.find(
  //   (voice) => voice.lang === "en-GB"
  // ) as SpeechSynthesisVoice;
  // message.voice = narratorVoice;
  message.pitch = 50;
  message.rate = 1.5;
  speak(message);
};
const speak = (message: SpeechSynthesisUtterance) => {
  if ("speechSynthesis" in window) {
    console.log("speaking");
    speechSynthesis.speak(message);
  } else {
    console.log("can't speak");
  }
};
export default TextToSpeech;
