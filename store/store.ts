import { configureStore } from "@reduxjs/toolkit";

import forecastReducer from "./weatherSlice";
import meetingsReducer from "./meetingsSlice";
import ttsReducer from "./textToSpeechSlice";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    meetings: meetingsReducer,
    tts: ttsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
