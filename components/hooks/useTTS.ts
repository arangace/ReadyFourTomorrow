const TextToSpeech = (forecastToAnnounce: string) => {
  let message = new SpeechSynthesisUtterance(forecastToAnnounce);
  const voices = speechSynthesis.getVoices();
  message.voice = voices.find(
    (voice) => voice.lang === "en-GB"
  ) as SpeechSynthesisVoice;
  if ("speechSynthesis" in window) {
    console.log("speaking");
    speechSynthesis.cancel();
    speechSynthesis.speak(message);
  } else {
    console.log("can't speak");
  }
};

export default TextToSpeech;
